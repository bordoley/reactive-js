import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectIsSome,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Observable from "../../computations/Observable.js";
import * as Subject from "../../computations/Subject.js";
import { BroadcasterLike_connect } from "../../computations.js";
import {
  Optional,
  bindMethod,
  ignore,
  pipe,
  returns,
} from "../../functions.js";
import { increment } from "../../math.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  SchedulerLike_schedule,
  ThrowBackpressureStrategy,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Computation from "../Computation.js";

testModule(
  "Subject",
  describe(
    "create",
    test("with replay", () => {
      using vts = VirtualTimeScheduler.create();

      const subject = Subject.create<number>({ replay: 2 });
      for (const v of [1, 2, 3, 4]) {
        subject[EventListenerLike_notify](v);
      }

      subject[DisposableLike_dispose]();

      const result: number[] = [];
      pipe(
        subject,
        Broadcaster.toObservable(),
        Observable.forEach(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([3, 4]));
    }),

    test("with multiple observers", () => {
      using vts = VirtualTimeScheduler.create();

      const subject = Subject.create({ autoDispose: true });
      pipe(subject[DisposableLike_isDisposed], expectFalse());
      const sub1 = pipe(subject,  Broadcaster.toObservable(),  Observable.subscribe(vts));
      pipe(subject[DisposableLike_isDisposed], expectFalse());
      const sub2 = pipe(subject, Broadcaster.toObservable(), Observable.subscribe(vts));
      pipe(subject[DisposableLike_isDisposed], expectFalse());
      const sub3 = pipe(
        Observable.create(observer => {
          subject[BroadcasterLike_connect](observer);
          subject[BroadcasterLike_connect](observer);
        }),
        Observable.subscribe(vts),
      );
      pipe(subject[DisposableLike_isDisposed], expectFalse());
      sub3[DisposableLike_dispose]();
      pipe(subject[DisposableLike_isDisposed], expectFalse());
      sub1[DisposableLike_dispose]();
      pipe(subject[DisposableLike_isDisposed], expectFalse());
      sub2[DisposableLike_dispose]();
      pipe(subject[DisposableLike_isDisposed], expectTrue());
    }),
    test("notifying a disposed subject", () => {
      using vts = VirtualTimeScheduler.create();
      const subject = Subject.create<number>();

      const result: number[] = [];

      const subjectSubscription = pipe(
        subject,
        Broadcaster.toObservable(),
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      const generateSubscription = pipe(
        Computation.generate<Observable.Computation>(Observable)(
          increment,
          returns(-1),
          {
            delay: 3,
            delayStart: true,
          },
        ),
        Observable.forEach(bindMethod(subject, EventListenerLike_notify)),
        Observable.subscribe(vts),
      );

      vts[SchedulerLike_schedule](
        () => {
          subject[DisposableLike_dispose]();
        },
        { delay: 7 },
      );

      vts[SchedulerLike_schedule](
        () => {
          generateSubscription[DisposableLike_dispose]();
        },
        { delay: 10 },
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(subjectSubscription[DisposableLike_isDisposed], expectTrue());

      pipe(result, expectArrayEquals([0, 1]));
    }),
    test("subscribing to a subject disposed with an error", () => {
      using vts = VirtualTimeScheduler.create();
      const subject = Subject.create<number>();

      const e = new Error();
      subject[DisposableLike_dispose](e);

      const subscription = pipe(subject,  Broadcaster.toObservable(), Observable.subscribe(vts));

      vts[VirtualTimeSchedulerLike_run]();

      pipe(
        subscription[DisposableLike_error],
        expectEquals<Optional<Error>>(e),
      );
    }),
    test("notifing an observer that throws an exception on overflow", () => {
      using vts = VirtualTimeScheduler.create();

      const subject = Subject.create<number>();

      const subscription = pipe(
        subject,
        Broadcaster.toObservable(),
        Observable.forEach(ignore),
        Observable.backpressureStrategy({
          backpressureStrategy: ThrowBackpressureStrategy,
          capacity: 1,
        }),
        Observable.subscribe(vts),
      );

      subject[EventListenerLike_notify](1);
      subject[EventListenerLike_notify](2);
      subject[EventListenerLike_notify](3);

      expectIsSome(subscription[DisposableLike_error]);
    }),
    test("with autoDispose", () => {
      using vts = VirtualTimeScheduler.create();

      const subject = Subject.create<number>({
        autoDispose: true,
        replay: 2,
      });
      for (const v of [1, 2, 3, 4]) {
        subject[EventListenerLike_notify](v);
      }

      const result: number[] = [];
      const subscription = pipe(
        subject,
        Broadcaster.toObservable(),
        Observable.forEach(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[SchedulerLike_schedule](() => {
        pipe(result, expectArrayEquals([3, 4]));
        pipe(subject[DisposableLike_isDisposed], expectFalse());
        subscription[DisposableLike_dispose]();
        pipe(subject[DisposableLike_isDisposed], expectTrue());
      });

      vts[VirtualTimeSchedulerLike_run]();
    }),
  ),
);

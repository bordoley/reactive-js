import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsSome,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Enumerable from "../../collections/Enumerable.js";
import {
  ObservableLike_observe,
  ReplayObservableLike_get,
  SchedulerLike_schedule,
  SubjectLike_observerCount,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import { SinkLike_notify } from "../../events.js";
import {
  Optional,
  bind,
  bindMethod,
  increment,
  pipe,
  returns,
} from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Observable from "../Observable.js";
import * as Subject from "../Subject.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "Subject",
  describe(
    "create",
    test("with replay", () => {
      const scheduler = VirtualTimeScheduler.create();

      const subject = Subject.create<number>({ replay: 2 });
      for (const v of [1, 2, 3, 4]) {
        subject[SinkLike_notify](v);
      }

      pipe(subject[ReplayObservableLike_get](0), expectEquals(3));
      pipe(subject[ReplayObservableLike_get](1), expectEquals(4));

      subject[DisposableLike_dispose]();

      const result: number[] = [];
      pipe(
        subject,
        Observable.forEach(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([3, 4]));
    }),

    test("with multiple observers", () => {
      const scheduler = VirtualTimeScheduler.create();

      const subject = Subject.create();
      pipe(subject[SubjectLike_observerCount], expectEquals(0));
      const sub1 = pipe(subject, Observable.subscribe(scheduler));
      pipe(subject[SubjectLike_observerCount], expectEquals(1));
      const sub2 = pipe(subject, Observable.subscribe(scheduler));
      pipe(subject[SubjectLike_observerCount], expectEquals(2));
      const sub3 = pipe(
        Observable.create(observer => {
          subject[ObservableLike_observe](observer);
          subject[ObservableLike_observe](observer);
        }),
        Observable.subscribe(scheduler),
      );
      pipe(subject[SubjectLike_observerCount], expectEquals(3));
      sub3[DisposableLike_dispose]();
      pipe(subject[SubjectLike_observerCount], expectEquals(2));
      sub1[DisposableLike_dispose]();
      pipe(subject[SubjectLike_observerCount], expectEquals(1));
      sub2[DisposableLike_dispose]();
      pipe(subject[SubjectLike_observerCount], expectEquals(0));
    }),
    test("notifying a disposed subject", () => {
      const scheduler = VirtualTimeScheduler.create();
      const subject = Subject.create<number>();

      const result: number[] = [];

      const subjectSubscription = pipe(
        subject,
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      const generateSubscription = pipe(
        Enumerable.generate(increment, returns(-1)),
        Observable.fromEnumerable({ delay: 3, delayStart: true }),
        Observable.forEach(bindMethod(subject, SinkLike_notify)),
        Observable.subscribe(scheduler),
      );

      scheduler[SchedulerLike_schedule](
        () => {
          subject[DisposableLike_dispose]();
        },
        { delay: 7 },
      );

      scheduler[SchedulerLike_schedule](
        () => {
          generateSubscription[DisposableLike_dispose]();
        },
        { delay: 10 },
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      expectTrue(subjectSubscription[DisposableLike_isDisposed]);

      pipe(result, expectArrayEquals([0, 1]));
    }),
    test("subscribing to a subject disposed with an error", () => {
      const scheduler = VirtualTimeScheduler.create();
      const subject = Subject.create<number>();

      const e = new Error();
      subject[DisposableLike_dispose](e);

      const subscription = pipe(subject, Observable.subscribe(scheduler));

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(
        subscription[DisposableLike_error],
        expectEquals<Optional<Error>>(e),
      );
    }),
    test(
      "notifing an observer that throws an exception on overflow",
      Disposable.usingLazy(VirtualTimeScheduler.create)(vts => {
        const subject = Subject.create<number>();

        const subscription = pipe(
          subject,
          Observable.subscribe(vts, {
            backpressureStrategy: "throw",
            capacity: 1,
          }),
        );

        subject[SinkLike_notify](1);
        subject[SinkLike_notify](2);
        subject[SinkLike_notify](3);

        expectIsSome(subscription[DisposableLike_error]);
      }),
    ),
  ),
  describe(
    "createRefCounted",
    test("with replay", () => {
      const subject = Subject.createRefCounted<number>({ replay: 2 });
      for (const v of [1, 2, 3, 4]) {
        subject[SinkLike_notify](v);
      }

      pipe(subject[ReplayObservableLike_get](0), expectEquals(3));
      pipe(subject[ReplayObservableLike_get](1), expectEquals(4));
    }),
  ),
);

((_: Subject.Signature) => {})(Subject);

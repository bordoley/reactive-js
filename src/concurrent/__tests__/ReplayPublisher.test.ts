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
  ReplayPublisherLike_observerCount,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
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
  SinkLike_notify,
} from "../../utils.js";
import * as Observable from "../Observable.js";
import * as ReplayPublisher from "../ReplayPublisher.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "ReplayPublisher",
  describe(
    "create",
    test("with replay", () => {
      const scheduler = VirtualTimeScheduler.create();

      const publisher = ReplayPublisher.create<number>({ replay: 2 });
      for (const v of [1, 2, 3, 4]) {
        publisher[SinkLike_notify](v);
      }

      publisher[DisposableLike_dispose]();

      const result: number[] = [];
      pipe(
        publisher,
        Observable.forEach(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([3, 4]));
    }),

    test("with multiple observers", () => {
      const scheduler = VirtualTimeScheduler.create();

      const publisher = ReplayPublisher.create();
      pipe(publisher[ReplayPublisherLike_observerCount], expectEquals(0));
      const sub1 = pipe(publisher, Observable.subscribe(scheduler));
      pipe(publisher[ReplayPublisherLike_observerCount], expectEquals(1));
      const sub2 = pipe(publisher, Observable.subscribe(scheduler));
      pipe(publisher[ReplayPublisherLike_observerCount], expectEquals(2));
      const sub3 = pipe(
        Observable.create(observer => {
          publisher[ObservableLike_observe](observer);
          publisher[ObservableLike_observe](observer);
        }),
        Observable.subscribe(scheduler),
      );
      pipe(publisher[ReplayPublisherLike_observerCount], expectEquals(3));
      sub3[DisposableLike_dispose]();
      pipe(publisher[ReplayPublisherLike_observerCount], expectEquals(2));
      sub1[DisposableLike_dispose]();
      pipe(publisher[ReplayPublisherLike_observerCount], expectEquals(1));
      sub2[DisposableLike_dispose]();
      pipe(publisher[ReplayPublisherLike_observerCount], expectEquals(0));
    }),
    test("notifying a disposed publisher", () => {
      const scheduler = VirtualTimeScheduler.create();
      const publisher = ReplayPublisher.create<number>();

      const result: number[] = [];

      const publisherSubscription = pipe(
        publisher,
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      const generateSubscription = pipe(
        Enumerable.generate(increment, returns(-1)),
        Observable.fromEnumerable({ delay: 3, delayStart: true }),
        Observable.forEach(bindMethod(publisher, SinkLike_notify)),
        Observable.subscribe(scheduler),
      );

      scheduler[SchedulerLike_schedule](
        () => {
          publisher[DisposableLike_dispose]();
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

      expectTrue(publisherSubscription[DisposableLike_isDisposed]);

      pipe(result, expectArrayEquals([0, 1]));
    }),
    test("subscribing to a publisher disposed with an error", () => {
      const scheduler = VirtualTimeScheduler.create();
      const publisher = ReplayPublisher.create<number>();

      const e = new Error();
      publisher[DisposableLike_dispose](e);

      const subscription = pipe(publisher, Observable.subscribe(scheduler));

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(
        subscription[DisposableLike_error],
        expectEquals<Optional<Error>>(e),
      );
    }),
    test("notifing an observer that throws an exception on overflow", () => {
      const scheduler = VirtualTimeScheduler.create();
      const publisher = ReplayPublisher.create<number>();

      const subscription = pipe(
        publisher,
        Observable.subscribe(scheduler, {
          backpressureStrategy: "throw",
          capacity: 1,
        }),
      );

      publisher[SinkLike_notify](1);
      publisher[SinkLike_notify](2);
      publisher[SinkLike_notify](3);

      expectIsSome(subscription[DisposableLike_error]);
    }),
  ),
);

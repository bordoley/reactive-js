import * as Observable from "../Observable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as Scheduler from "../Scheduler.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectIsNone,
  test,
  testAsync,
  testModule,
} from "../__internal__/testing.js";
import { Optional, bindMethod, pipe } from "../functions.js";
import {
  DisposableLike_dispose,
  PublisherLike_observerCount,
  SinkLike_notify,
  VirtualTimeSchedulerLike_run,
} from "../types.js";

testModule(
  "Observable",
  describe(
    "createPublisher",
    test("with replay", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const publisher = Observable.createPublisher<number>({ replay: 2 });
      pipe(
        [1, 2, 3, 4],
        ReadonlyArray.forEach(bindMethod(publisher, SinkLike_notify)),
      );
      publisher[DisposableLike_dispose]();

      const result: number[] = [];
      pipe(
        publisher,
        Observable.forEach((x: number) => {
          result.push(x);
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([3, 4]));
    }),

    test("with multiple observers", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const publisher = Observable.createPublisher();
      pipe(publisher[PublisherLike_observerCount], expectEquals(0));
      const sub1 = pipe(publisher, Observable.subscribe(scheduler));
      pipe(publisher[PublisherLike_observerCount], expectEquals(1));
      const sub2 = pipe(publisher, Observable.subscribe(scheduler));
      pipe(publisher[PublisherLike_observerCount], expectEquals(2));
      sub1[DisposableLike_dispose]();
      pipe(publisher[PublisherLike_observerCount], expectEquals(1));
      sub2[DisposableLike_dispose]();
      pipe(publisher[PublisherLike_observerCount], expectEquals(0));
    }),
  ),
  describe(
    "firstAsync",
    testAsync("empty source", async () => {
      const result = await pipe(
        [],
        Observable.fromReadonlyArray(),
        Observable.firstAsync(),
      );
      pipe(result, expectIsNone);
    }),
    testAsync("it returns the first value", async () => {
      const result = await pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.firstAsync(),
      );
      pipe(result, expectEquals<Optional<number>>(1));
    }),
  ),
  describe(
    "lastAsync",
    testAsync("empty source", async () => {
      const result = await pipe(
        [],
        Observable.fromReadonlyArray(),
        Observable.lastAsync(),
      );
      pipe(result, expectIsNone);
    }),
    testAsync("it returns the last value", async () => {
      const result = await pipe(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Observable.lastAsync(),
      );
      pipe(result, expectEquals<Optional<number>>(3));
    }),
  ),
);

((_: Observable.Signature) => {})(Observable);

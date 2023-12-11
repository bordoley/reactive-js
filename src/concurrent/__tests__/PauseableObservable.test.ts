import {
  describe,
  expectArrayEquals,
  expectToThrowAsync,
  expectTrue,
  test,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as Enumerable from "../../collections/Enumerable.js";
import {
  PauseableLike_isPaused,
  PauseableLike_resume,
  SchedulerLike,
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import { StoreLike_value } from "../../events.js";
import {
  bind,
  error,
  increment,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as HostScheduler from "../HostScheduler.js";
import * as Observable from "../Observable.js";
import * as PauseableObservable from "../PauseableObservable.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "PauseableObservable",
  describe(
    "fromAsyncIterable",
    testAsync(
      "infinite immediately resolving iterable",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike) => {
          const stream = pipe(
            (async function* foo() {
              let i = 0;
              while (true) {
                yield i++;
              }
            })(),
            PauseableObservable.fromAsyncIterable(scheduler, { capacity: 1 }),
          );
          stream[PauseableLike_resume]();

          const result = await pipe(
            stream,
            Observable.takeFirst({ count: 10 }),
            Observable.buffer(),
            Observable.lastAsync<readonly number[]>(scheduler),
          );
          pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
        },
      ),
    ),
    testAsync(
      "iterable that completes",
      Disposable.usingAsyncLazy(HostScheduler.create)(
        async (scheduler: SchedulerLike) => {
          const stream = pipe(
            (async function* foo() {
              yield 1;
              yield 2;
              yield 3;
            })(),
            PauseableObservable.fromAsyncIterable<number>(scheduler),
          );
          stream[PauseableLike_resume]();

          const result = await pipe(
            stream,
            Observable.buffer<number>(),
            Observable.lastAsync(scheduler),
          );

          pipe(result ?? [], expectArrayEquals([1, 2, 3]));
        },
      ),
    ),
    testAsync(
      "iterable that throws",
      pipeLazy(
        Disposable.usingAsyncLazy(HostScheduler.create)(
          async (scheduler: SchedulerLike) => {
            const e = error();

            const stream = pipe(
              (async function* foo() {
                throw e;
              })(),
              PauseableObservable.fromAsyncIterable(scheduler),
            );
            stream[PauseableLike_resume]();

            await pipe(stream, Observable.lastAsync(scheduler));
          },
        ),
        expectToThrowAsync,
      ),
    ),
  ),
  describe(
    "sinkInto",
    test("sinking a pauseable observable into a stream with backpressure", () => {
      const scheduler = VirtualTimeScheduler.create();

      const src = pipe(
        Enumerable.generate(increment, returns(-1)),
        Observable.fromEnumerable({ delay: 1, delayStart: true }),
        Observable.takeFirst({ count: 5 }),
        Observable.flow(scheduler),
      );

      const dest = Streamable.identity<number>()[StreamableLike_stream](
        scheduler,
        {
          backpressureStrategy: "throw",
          capacity: 1,
        },
      );

      expectTrue(src[PauseableLike_isPaused][StoreLike_value]);

      pipe(
        src,
        PauseableObservable.sinkInto(dest),
        Observable.subscribe(scheduler),
      );

      const result: number[] = [];
      pipe(
        dest,
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    }),
  ),
);

((_: PauseableObservable.Signature) => {})(PauseableObservable);

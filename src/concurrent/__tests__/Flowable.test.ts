import {
  describe,
  expectArrayEquals,
  expectToHaveBeenCalledTimes,
  expectToThrowAsync,
  expectTrue,
  mockFn,
  test,
  testAsync,
  testModule,
} from "../../__internal__/testing.js";
import * as Enumerable from "../../collections/Enumerable.js";
import {
  FlowableLike_flow,
  PauseableLike_pause,
  PauseableLike_resume,
  SchedulerLike,
  SchedulerLike_schedule,
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import {
  Tuple2,
  bind,
  error,
  increment,
  invoke,
  pipe,
  pipeLazy,
  returns,
  tuple,
} from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Flowable from "../Flowable.js";
import * as HostScheduler from "../HostScheduler.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "Flowable",
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
            Flowable.fromAsyncIterable(),
            invoke(FlowableLike_flow, scheduler, { capacity: 1 }),
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
            Flowable.fromAsyncIterable<number>(),
            invoke(FlowableLike_flow, scheduler, { capacity: 1 }),
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
              Flowable.fromAsyncIterable(),
              invoke(FlowableLike_flow, scheduler, { capacity: 1 }),
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
    "fromRunnable",
    test("a source with delay", () => {
      const scheduler = VirtualTimeScheduler.create();

      const generateObservable = pipe(
        Enumerable.generate(increment, returns(-1)),
        Observable.fromEnumerable({ delay: 1, delayStart: true }),
        Flowable.fromRunnable(),
        invoke(FlowableLike_flow, scheduler),
      );

      generateObservable[PauseableLike_resume](),
        scheduler[SchedulerLike_schedule](
          () => generateObservable[PauseableLike_pause](),
          {
            delay: 2,
          },
        );

      scheduler[SchedulerLike_schedule](
        () => generateObservable[PauseableLike_resume](),
        {
          delay: 4,
        },
      );

      scheduler[SchedulerLike_schedule](
        () => generateObservable[DisposableLike_dispose](),
        {
          delay: 6,
        },
      );

      const f = mockFn();
      const subscription = pipe(
        generateObservable,
        Observable.forEach((x: number) => {
          f(x);
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(f, expectToHaveBeenCalledTimes(2));
      pipe(f.calls.flat(), expectArrayEquals([0, 1]));

      pipe(subscription[DisposableLike_isDisposed], expectTrue);
    }),
    test("flow a generating source", () => {
      const scheduler = VirtualTimeScheduler.create();

      const flowed = pipe(
        [0, 1, 2],
        Observable.fromReadonlyArray(),
        Flowable.fromRunnable(),
        invoke(FlowableLike_flow, scheduler),
        Disposable.addTo(scheduler),
      );

      scheduler[SchedulerLike_schedule](() => flowed[PauseableLike_resume](), {
        delay: 2,
      });

      const f = mockFn();
      const subscription = pipe(
        flowed,
        Observable.withCurrentTime<unknown, Tuple2<number, any>>(tuple),
        Observable.forEach(([_, v]: Tuple2<number, any>) => {
          f(v);
        }),
        Observable.subscribe(scheduler),
        Disposable.addTo(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(f, expectToHaveBeenCalledTimes(3));
      pipe(f.calls.flat(), expectArrayEquals([0, 1, 2]));

      pipe(subscription[DisposableLike_isDisposed], expectTrue);
    }),
  ),
  describe(
    "sinkInto",
    test("sinking a pauseable observable into a stream with backpressure", () => {
      const scheduler = VirtualTimeScheduler.create();

      const src = pipe(
        Enumerable.generate(increment, returns(-1)),
        Observable.fromEnumerable({ delay: 1, delayStart: true }),
        Observable.takeFirst<number>({ count: 5 }),
        Flowable.fromRunnable(),
      );

      const dest = Streamable.identity<number>()[StreamableLike_stream](
        scheduler,
        {
          backpressureStrategy: "throw",
          capacity: 1,
        },
      );

      pipe(src, Flowable.sinkInto(dest), Observable.subscribe(scheduler));

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

((_: Flowable.Signature) => {})(Flowable);

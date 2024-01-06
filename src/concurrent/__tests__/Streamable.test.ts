import {
  describe,
  expectArrayEquals,
  expectEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { ReadonlyObjectMapLike } from "../../collections.js";
import * as Enumerable from "../../collections/Enumerable.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import {
  CacheLike_get,
  DispatcherLike_complete,
  SchedulerLike_schedule,
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import {
  Optional,
  SideEffect,
  Tuple2,
  bind,
  bindMethod,
  invoke,
  none,
  pipe,
  returns,
  tuple,
} from "../../functions.js";
import {
  DisposableLike_dispose,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "Streamable",
  describe(
    "stateStore",
    test("createStateStore", () => {
      const scheduler = VirtualTimeScheduler.create();
      const streamable = Streamable.createStateStore(returns(1));
      const stateStream = streamable[StreamableLike_stream](scheduler, {
        capacity: 20,
        backpressureStrategy: "drop-latest",
      });

      pipe(stateStream[QueueableLike_capacity], expectEquals(20));
      pipe(
        stateStream[QueueableLike_backpressureStrategy],
        expectEquals("drop-latest"),
      );

      stateStream[QueueableLike_enqueue](returns(2));
      stateStream[QueueableLike_enqueue](returns(3));
      stateStream[DispatcherLike_complete]();

      let result: number[] = [];

      pipe(
        stateStream,
        Observable.forEach<number>(bind(Array.prototype.push, result)),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3]));
    }),
  ),
  describe(
    "createInMemoryCache",
    test("it publishes none on subscribe when the key is missing", () => {
      const scheduler = VirtualTimeScheduler.create();

      const cache = Streamable.createInMemoryCache<number>({ capacity: 1 })[
        StreamableLike_stream
      ](scheduler);

      const result: Optional<number>[] = [];

      pipe(
        [
          tuple(2, () => {
            pipe(
              cache[CacheLike_get]("abc"),
              Observable.forEach(bindMethod(result, "push")),
              Observable.subscribe(scheduler),
            );
          }),
        ],
        ReadonlyArray.forEach(([time, f]) => {
          scheduler[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals<Optional<number>>([none]));
    }),
    test("explicitly deleting a key", () => {
      const scheduler = VirtualTimeScheduler.create();

      const cache = Streamable.createInMemoryCache<number>({ capacity: 1 })[
        StreamableLike_stream
      ](scheduler);

      const result: number[] = [];

      pipe(
        [
          tuple(0, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 1 });
          }),

          tuple(1, () => {
            cache[QueueableLike_enqueue]({ abc: _ => none });
          }),

          tuple(2, () => {
            pipe(
              cache[CacheLike_get]("abc"),
              Observable.forEach(bindMethod(result, "push")),
              Observable.subscribe(scheduler),
            );
          }),

          tuple(3, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 2 });
          }),

          tuple(4, () => {
            cache[QueueableLike_enqueue]({ abc: _ => none });
          }),
        ],
        ReadonlyArray.forEach(([time, f]) => {
          scheduler[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([none, 2, none]));
    }),
    test("integration test", () => {
      const scheduler = VirtualTimeScheduler.create();

      const cache = Streamable.createInMemoryCache<number>({ capacity: 1 })[
        StreamableLike_stream
      ](scheduler);

      const result1: number[] = [];
      const abcSubscription1 = pipe(
        cache[CacheLike_get]("abc"),
        Observable.forEach(bindMethod(result1, "push")),
        Observable.subscribe(scheduler),
      );

      const result2: number[] = [];
      let abcSubscription2 = Disposable.disposed;

      const result3: number[] = [];
      let abcSubscription3 = Disposable.disposed;

      pipe(
        [
          tuple(1, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 1 });
          }),
          tuple(2, () => {
            abcSubscription2 = pipe(
              cache[CacheLike_get]("abc"),
              Observable.forEach(bindMethod(result2, "push")),
              Observable.subscribe(scheduler),
            );
          }),
          tuple(3, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 2 });
          }),
          tuple(4, () => {
            abcSubscription2[DisposableLike_dispose]();
          }),
          tuple(4, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 2, def: _ => 0 });
          }),
          tuple(5, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 3 });
          }),
          tuple(6, () => {
            abcSubscription1[DisposableLike_dispose]();
          }),
          tuple(7, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 3 });
          }),

          tuple(8, () => {
            abcSubscription3 = pipe(
              cache[CacheLike_get]("abc"),
              Observable.forEach(bindMethod(result3, "push")),
              Observable.subscribe(scheduler),
            );
          }),
          tuple(9, () => {
            abcSubscription3[DisposableLike_dispose]();
          }),
          tuple(10, () => {
            cache[QueueableLike_enqueue]({
              abc: _ => 3,
              def: _ => 1,
              ghi: _ => 2,
            });
          }),
        ],
        ReadonlyArray.forEach(([time, f]) => {
          scheduler[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result1, expectArrayEquals([none, 1, 2]));
      pipe(result2, expectArrayEquals([1]));
      pipe(result3, expectArrayEquals([3]));
    }),
  ),
  describe(
    "createPersistentCache",
    test("integration test", () => {
      const store: Record<string, number> = {
        abc: 1,
        def: 2,
      };

      const persistentStore = {
        load: (_: ReadonlySet<string>) =>
          pipe({ ...store }, Observable.fromValue()),
        store: (updates: ReadonlyObjectMapLike<string, number>) =>
          pipe(
            Observable.empty(),
            Observable.onSubscribe(() => {
              pipe(
                updates,
                ReadonlyObjectMap.forEach<number, string>((v, k) => {
                  store[k] = v;
                }),
              );
            }),
          ),
      };

      const scheduler = VirtualTimeScheduler.create();

      const cache = Streamable.createPersistentCache<number>(persistentStore, {
        capacity: 1,
      })[StreamableLike_stream](scheduler);

      const result1: number[] = [];
      pipe(
        cache[CacheLike_get]("abc"),
        Observable.forEach(bindMethod(result1, "push")),
        Observable.subscribe(scheduler),
      );

      pipe(
        [
          [
            2,
            () => {
              cache[QueueableLike_enqueue]({ abc: _ => 4, hgi: _ => 6 });
            },
          ],
        ],

        ReadonlyArray.forEach(([time, f]: Tuple2<number, SideEffect>) => {
          scheduler[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(result1, expectArrayEquals([1, 4]));
    }),
  ),
  describe(
    "syncState",
    test("without throttling", () => {
      const vts = VirtualTimeScheduler.create();

      const stream = pipe(
        Streamable.createStateStore(returns(-1)),
        Streamable.syncState(
          state =>
            pipe(
              Enumerable.range(state + 10),
              Observable.fromEnumerable({ delay: 10 }),
              Observable.map(x => (_: number) => x),
              Observable.takeFirst({ count: 2 }),
            ),
          (oldState, newState) =>
            newState !== oldState
              ? Observable.empty({ delay: 0 })
              : Observable.empty({ delay: 0 }),
        ),
        invoke(StreamableLike_stream, vts),
      );

      pipe(
        (x: number) => x + 2,
        Observable.fromValue({ delay: 5 }),
        Observable.enqueue(stream),
        Observable.subscribe(vts),
      );

      const result: number[] = [];
      pipe(
        stream,
        Observable.forEach(bind(Array.prototype.push, result)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([-1, 9, 11, 10]));
    }),
    test("with throttling", () => {
      const vts = VirtualTimeScheduler.create();

      let updateCnt = 0;

      const stream = pipe(
        Streamable.createStateStore(returns(-1)),
        Streamable.syncState(
          _state => Observable.empty({ delay: 1 }),
          (oldState, newState) => {
            updateCnt++;
            return newState !== oldState
              ? Observable.empty({ delay: 1 })
              : Observable.empty({ delay: 1 });
          },
          { throttleDuration: 20 },
        ),
        invoke(StreamableLike_stream, vts),
      );

      pipe(
        (x: number) => x + 2,
        Observable.fromValue({ delay: 1 }),
        Observable.repeat(19),
        Observable.enqueue(stream),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(updateCnt, expectEquals(2));
    }),
  ),
);

((_: Streamable.Signature) => {})(Streamable);

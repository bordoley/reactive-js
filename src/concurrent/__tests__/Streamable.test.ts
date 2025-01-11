import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectTrue,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as Dictionary from "../../collections/Dictionary.js";
import { DictionaryCollection } from "../../collections/Dictionary.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import {
  DictionaryLike_get,
  ReadonlyObjectMapLike,
  keySet,
} from "../../collections.js";
import { sequence } from "../../computations.js";
import {
  CacheLike_get,
  DispatcherLike_complete,
  DispatcherLike_isCompleted,
  SchedulerLike_schedule,
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import * as EventSource from "../../events/EventSource.js";
import {
  Optional,
  SideEffect,
  Tuple2,
  bindMethod,
  invoke,
  none,
  pipe,
  pipeSome,
  returns,
  tuple,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import {
  DisposableLike_dispose,
  DropLatestBackpressureStrategy,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Observable from "../Observable.js";
import * as Streamable from "../Streamable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

testModule(
  "Streamable",
  describe(
    "animationGroup",
    test("blocking mode", () => {
      using vts = VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 });
      const stream = Streamable.animationGroup<number>(
        {
          a: Observable.keyFrame(500),
        },
        { mode: "blocking" },
      )[StreamableLike_stream](vts);

      pipe(
        stream,
        keySet<DictionaryCollection>(Dictionary.keys),
        invoke("has", "a"),
        expectTrue,
      );

      let result = 0;

      pipeSome(
        stream[DictionaryLike_get]("a"),
        EventSource.addEventHandler(ev => {
          result = ev;
        }),
      );

      stream[QueueableLike_enqueue](none);

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectEquals(1));
    }),
    test("queueing mode", () => {
      using vts = VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 });

      const stream = Streamable.animationGroup<number>(
        {
          a: Observable.keyFrame(500),
        },
        { mode: "queueing" },
      )[StreamableLike_stream](vts);

      pipe(
        stream,
        keySet<DictionaryCollection>(Dictionary.keys),
        invoke("has", "a"),
        expectTrue,
      );

      let result = 0;

      pipeSome(
        stream[DictionaryLike_get]("a"),
        EventSource.addEventHandler(ev => {
          result = ev;
        }),
      );

      stream[QueueableLike_enqueue](none);

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectEquals(1));
    }),
    test("switching mode", () => {
      using vts = VirtualTimeScheduler.create({ maxMicroTaskTicks: 1 });
      const stream = Streamable.animationGroup<number>(
        {
          a: Observable.keyFrame(500),
        },
        { mode: "switching" },
      )[StreamableLike_stream](vts);

      pipe(
        stream,
        keySet<DictionaryCollection>(Dictionary.keys),
        invoke("has", "a"),
        expectTrue,
      );

      let result = 0;

      pipeSome(
        stream[DictionaryLike_get]("a"),
        EventSource.addEventHandler(ev => {
          result = ev;
        }),
      );

      stream[QueueableLike_enqueue](none);

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectEquals(1));
    }),
  ),
  describe(
    "inMemoryCache",
    test("it publishes none on subscribe when the key is missing", () => {
      using vts = VirtualTimeScheduler.create();

      const cache = Streamable.inMemoryCache<number>({ capacity: 1 })[
        StreamableLike_stream
      ](vts);

      const result: Optional<number>[] = [];

      pipe(
        [
          tuple(2, () => {
            pipe(
              cache[CacheLike_get]("abc"),
              Observable.forEach(bindMethod(result, Array_push)),
              Observable.subscribe(vts),
            );
          }),
        ],
        ReadonlyArray.forEach(([time, f]) => {
          vts[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals<Optional<number>>([none]));
    }),
    test("explicitly deleting a key", () => {
      using vts = VirtualTimeScheduler.create();

      const cache = Streamable.inMemoryCache<number>({ capacity: 1 })[
        StreamableLike_stream
      ](vts);

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
              Observable.forEach(bindMethod(result, Array_push)),
              Observable.subscribe(vts),
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
          vts[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([none, 2, none]));
    }),
    test("integration test", () => {
      using vts = VirtualTimeScheduler.create();

      const cache =
        Streamable.inMemoryCache<number>()[StreamableLike_stream](vts);

      const result1: number[] = [];
      const abcSubscription1 = pipe(
        cache[CacheLike_get]("abc"),
        Observable.forEach(bindMethod(result1, Array_push)),
        Observable.subscribe(vts),
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
              Observable.forEach(bindMethod(result2, Array_push)),
              Observable.subscribe(vts),
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
              Observable.forEach(bindMethod(result3, Array_push)),
              Observable.subscribe(vts),
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
          vts[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result1, expectArrayEquals([none, 1, 2]));
      pipe(result2, expectArrayEquals([1]));
      pipe(result3, expectArrayEquals([3]));
    }),
  ),
  describe(
    "persistentCache",
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

      using vts = VirtualTimeScheduler.create();

      const cache = Streamable.persistentCache<number>(persistentStore, {
        capacity: 1,
      })[StreamableLike_stream](vts);

      const result1: number[] = [];
      pipe(
        cache[CacheLike_get]("abc"),
        Observable.forEach(bindMethod(result1, Array_push)),
        Observable.subscribe(vts),
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
          vts[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result1, expectArrayEquals([1, 4]));
    }),
  ),
  describe(
    "stateStore",
    test("stateStore", () => {
      using vts = VirtualTimeScheduler.create();
      const streamable = Streamable.stateStore(returns(1));
      const stateStream = streamable[StreamableLike_stream](vts, {
        capacity: 20,
        backpressureStrategy: DropLatestBackpressureStrategy,
      });

      pipe(stateStream[QueueableLike_capacity], expectEquals(20));
      pipe(
        stateStream[QueueableLike_backpressureStrategy],
        expectEquals(DropLatestBackpressureStrategy),
      );

      stateStream[QueueableLike_enqueue](returns(2));
      stateStream[QueueableLike_enqueue](returns(3));
      stateStream[DispatcherLike_complete]();

      let result: number[] = [];

      pipe(
        stateStream,
        Observable.forEach<number>(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([1, 2, 3]));
    }),
    test("completing the store", () => {
      using vts = VirtualTimeScheduler.create();
      const streamable = Streamable.stateStore(returns(1));
      const stateStream = streamable[StreamableLike_stream](vts, {
        capacity: 20,
        backpressureStrategy: DropLatestBackpressureStrategy,
      });

      expectFalse(stateStream[DispatcherLike_isCompleted]);

      stateStream[DispatcherLike_complete]();

      expectTrue(stateStream[DispatcherLike_isCompleted]);
    }),
  ),
  describe(
    "syncState",
    test("without throttling", () => {
      using vts = VirtualTimeScheduler.create();

      const stream = pipe(
        Streamable.stateStore(returns(-1)),
        Streamable.syncState(
          state =>
            pipe(
              sequence<Observable.PureRunnableComputation>(Observable.generate)(
                state + 10,
              ),
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
        Observable.forEach(bindMethod(result, Array_push)),
        Observable.subscribe(vts),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result, expectArrayEquals([-1, 9, 11, 10]));
    }),
    test("with throttling", () => {
      using vts = VirtualTimeScheduler.create();

      let updateCnt = 0;

      const stream = pipe(
        Streamable.stateStore(returns(-1)),
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

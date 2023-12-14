import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import { KeyedLike_get, ReadonlyObjectMapLike } from "../../collections.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import {
  DispatcherLike_complete,
  SchedulerLike_schedule,
  StreamableLike_stream,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
import {
  Optional,
  SideEffect,
  Tuple2,
  arrayEquality,
  bind,
  bindMethod,
  none,
  pipe,
  returns,
  tuple,
} from "../../functions.js";
import { DisposableLike_dispose, QueueableLike_enqueue } from "../../utils.js";
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
      const stateStream = streamable[StreamableLike_stream](scheduler);

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

      const result: Tuple2<number, Optional<number>>[] = [];

      pipe(
        [
          tuple(2, () => {
            pipe(
              cache[KeyedLike_get]("abc"),
              Observable.withCurrentTime(tuple<number, number>),
              Observable.forEach(bindMethod(result, "push")),
              Observable.subscribe(scheduler),
            );
          }),
        ],
        ReadonlyArray.forEach(([time, f]: Tuple2<number, SideEffect>) => {
          scheduler[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(
        result,
        expectArrayEquals<Tuple2<number, Optional>>([[2, none]], {
          valuesEquality: arrayEquality(),
        }),
      );
    }),
    test("explicitly deleting a key", () => {
      const scheduler = VirtualTimeScheduler.create();

      const cache = Streamable.createInMemoryCache<number>({ capacity: 1 })[
        StreamableLike_stream
      ](scheduler);

      const result: Tuple2<number, Optional<number>>[] = [];

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
              cache[KeyedLike_get]("abc"),
              Observable.withCurrentTime(tuple<number, number>),
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

      pipe(
        result,
        expectArrayEquals<Tuple2<number, Optional<number>>>(
          [tuple(2, none), tuple(3, 2), tuple(4, none)],
          { valuesEquality: arrayEquality() },
        ),
      );
    }),
    test("integration test", () => {
      const scheduler = VirtualTimeScheduler.create();

      const cache = Streamable.createInMemoryCache<number>({ capacity: 1 })[
        StreamableLike_stream
      ](scheduler);

      const result1: Tuple2<number, Optional<number>>[] = [];
      const abcSubscription1 = pipe(
        cache[KeyedLike_get]("abc"),
        Observable.withCurrentTime<number, Tuple2<number, number>>(tuple),
        Observable.forEach(bindMethod(result1, "push")),
        Observable.subscribe(scheduler),
      );

      const result2: Tuple2<number, Optional<number>>[] = [];
      let abcSubscription2 = Disposable.disposed;

      const result3: Tuple2<number, Optional<number>>[] = [];
      let abcSubscription3 = Disposable.disposed;

      pipe(
        [
          tuple(1, () => {
            cache[QueueableLike_enqueue]({ abc: _ => 1 });
          }),
          tuple(2, () => {
            abcSubscription2 = pipe(
              cache[KeyedLike_get]("abc"),
              Observable.withCurrentTime<number, Tuple2<number, number>>(tuple),
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
              cache[KeyedLike_get]("abc"),
              Observable.withCurrentTime<number, Tuple2<number, number>>(tuple),
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

      pipe(
        result1,
        expectArrayEquals<Tuple2<number, Optional<number>>>(
          [tuple(0, none), tuple(1, 1), tuple(3, 2), tuple(5, 3)],
          { valuesEquality: arrayEquality() },
        ),
      );

      pipe(
        result2,
        expectArrayEquals<Tuple2<number, Optional<number>>>(
          [tuple(2, 1), tuple(3, 2)],
          { valuesEquality: arrayEquality() },
        ),
      );

      pipe(
        result3,
        expectArrayEquals<Tuple2<number, Optional<number>>>([tuple(8, 3)], {
          valuesEquality: arrayEquality(),
        }),
      );
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
          pipe({ ...store }, Observable.fromOptional()),
        store: (updates: ReadonlyObjectMapLike<string, number>) =>
          pipe(() => {
            pipe(
              updates,
              ReadonlyObjectMap.forEach<number, string>((v, k) => {
                store[k] = v;
              }),
            );
          }, Observable.fromFactory()),
      };

      const scheduler = VirtualTimeScheduler.create();

      const cache = Streamable.createPersistentCache<number>(persistentStore, {
        capacity: 1,
      })[StreamableLike_stream](scheduler);

      const result1: Tuple2<number, Optional<number>>[] = [];
      pipe(
        cache[KeyedLike_get]("abc"),
        Observable.withCurrentTime<number, Tuple2<number, Optional<number>>>(
          tuple,
        ),
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

      pipe(
        result1,
        expectArrayEquals<Tuple2<number, Optional<number>>>(
          [tuple(0, 1), tuple(2, 4)],
          { valuesEquality: arrayEquality() },
        ),
      );
    }),
  ),
);

((_: Streamable.Signature) => {})(Streamable);

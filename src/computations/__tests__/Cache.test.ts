import { Array_push } from "../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  test,
  testModule,
} from "../../__internal__/testing.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../collections/ReadonlyObjectMap.js";
import { ReadonlyObjectMapLike } from "../../collections.js";
import * as Cache from "../../computations/Cache.js";
import * as Observable from "../../computations/Observable.js";
import {
  Optional,
  SideEffect,
  Tuple2,
  bindMethod,
  none,
  pipe,
  tuple,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as VirtualTimeScheduler from "../../utils/VirtualTimeScheduler.js";
import {
  DisposableLike_dispose,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../utils.js";

testModule(
  "Cache",
  describe(
    "inMemory",
    test("it publishes none on subscribe when the key is missing", () => {
      using vts = VirtualTimeScheduler.create();

      const cache = Cache.create<number>(vts, { maxEntries: 1 });

      const result: Optional<number>[] = [];

      pipe(
        [
          tuple(2, () => {
            pipe(
              Cache.get(cache, "abc"),
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

      const cache = Cache.create<number>(vts, { maxEntries: 1 });

      const result: number[] = [];

      pipe(
        [
          tuple(0, () => Cache.set(cache, "abc", 1)),
          tuple(1, () => Cache.removeMany(cache, ["abc"])),
          tuple(2, () => {
            pipe(
              Cache.get(cache, "abc"),
              Observable.forEach(bindMethod(result, Array_push)),
              Observable.subscribe(vts),
            );
          }),
          tuple(3, () => Cache.set(cache, "abc", 2)),
          tuple(4, () => Cache.remove(cache, "abc")),
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

      const cache = Cache.create<number>(vts);

      const result1: number[] = [];
      const abcSubscription1 = pipe(
        Cache.get(cache, "abc"),
        Observable.forEach(bindMethod(result1, Array_push)),
        Observable.subscribe(vts),
      );

      const result2: number[] = [];
      let abcSubscription2 = Disposable.disposed;

      const result3: number[] = [];
      let abcSubscription3 = Disposable.disposed;

      pipe(
        [
          tuple(1, () => Cache.set(cache, "abc", 1)),
          tuple(3, () => {
            abcSubscription2 = pipe(
              Cache.get(cache, "abc"),
              Observable.forEach(bindMethod(result2, Array_push)),
              Observable.subscribe(vts),
            );
          }),
          tuple(5, () => Cache.set(cache, "abc", 2)),
          tuple(7, () => {
            abcSubscription2[DisposableLike_dispose]();
          }),
          tuple(9, () => Cache.setMany(cache, { abc: 2, def: 0 })),
          tuple(11, () => Cache.set(cache, "abc", 3)),
          tuple(13, () => {
            abcSubscription1[DisposableLike_dispose]();
          }),
          tuple(15, () => Cache.set(cache, "abc", 3)),
          tuple(17, () => {
            abcSubscription3 = pipe(
              Cache.get(cache, "abc"),
              Observable.forEach(bindMethod(result3, Array_push)),
              Observable.subscribe(vts),
            );
          }),
          tuple(19, () => {
            abcSubscription3[DisposableLike_dispose]();
          }),
          tuple(21, () =>
            Cache.setMany(cache, {
              abc: 3,
              def: 1,
              ghi: 2,
            }),
          ),
        ],
        ReadonlyArray.forEach(([time, f]) => {
          vts[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result1, expectArrayEquals([none, 1, 2, 3]));
      pipe(result2, expectArrayEquals([1, 2]));
      pipe(result3, expectArrayEquals([3]));
    }),
  ),
  describe(
    "persistent",
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

      const cache = Cache.create(vts, { persistentStore, maxEntries: 1 });

      const result1: number[] = [];
      pipe(
        Cache.get(cache, "abc"),
        Observable.forEach(bindMethod(result1, Array_push)),
        Observable.subscribe(vts),
      );

      pipe(
        [[2, () => Cache.setMany(cache, { abc: 4, hgi: 6 })]],

        ReadonlyArray.forEach(([time, f]: Tuple2<number, SideEffect>) => {
          vts[SchedulerLike_schedule](f, { delay: time });
        }),
      );

      vts[VirtualTimeSchedulerLike_run]();

      pipe(result1, expectArrayEquals([1, 4]));
    }),
  ),
);

((_: Cache.Signature) => {})(Cache);

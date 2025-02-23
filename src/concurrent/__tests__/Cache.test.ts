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
import {
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../concurrent.js";
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
import { DisposableLike_dispose } from "../../utils.js";
import * as Cache from "../Cache.js";
import * as Observable from "../Observable.js";
import * as VirtualTimeScheduler from "../VirtualTimeScheduler.js";

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
          tuple(2, () => {
            abcSubscription2 = pipe(
              Cache.get(cache, "abc"),
              Observable.forEach(bindMethod(result2, Array_push)),
              Observable.subscribe(vts),
            );
          }),
          tuple(3, () => Cache.set(cache, "abc", 2)),
          tuple(4, () => {
            abcSubscription2[DisposableLike_dispose]();
          }),
          tuple(4, () => Cache.setMany(cache, { abc: 2, def: 0 })),
          tuple(5, () => Cache.set(cache, "abc", 3)),
          tuple(6, () => {
            abcSubscription1[DisposableLike_dispose]();
          }),
          tuple(7, () => Cache.set(cache, "abc", 3)),
          tuple(8, () => {
            abcSubscription3 = pipe(
              Cache.get(cache, "abc"),
              Observable.forEach(bindMethod(result3, Array_push)),
              Observable.subscribe(vts),
            );
          }),
          tuple(9, () => {
            abcSubscription3[DisposableLike_dispose]();
          }),
          tuple(10, () =>
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

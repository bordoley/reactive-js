import * as Observable from "../Observable.js";
import { __await, __constant, __memo } from "../Observable/effects.js";
import * as Runnable from "../Runnable.js";
import * as Scheduler from "../Scheduler.js";
import {
  describe,
  expectArrayEquals,
  expectToHaveBeenCalledTimes,
  expectToThrowAsync,
  expectTrue,
  mockFn,
  test,
  testModule,
} from "../__internal__/testing.js";
import {
  arrayEquality,
  increment,
  isSome,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  PauseableLike_pause,
  PauseableLike_resume,
  RunnableLike,
  SchedulerLike_now,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../types.js";
import RunnableContainerModuleTests from "./fixtures/RunnableContainerModuleTests.js";

testModule(
  "Runnable",
  ...RunnableContainerModuleTests(Runnable),
  describe(
    "compute",
    test(
      "batch mode",
      pipeLazy(
        Runnable.compute(() => {
          const fromValueWithDelay = __constant(
            (delay: number, value: number): RunnableLike<number> =>
              pipe([value], Observable.fromReadonlyArray({ delay })),
          );
          const obs1 = __memo(fromValueWithDelay, 10, 5);
          const result1 = __await(obs1);
          const obs2 = __memo(fromValueWithDelay, 20, 10);
          const result2 = __await(obs2);
          const obs3 = __memo(fromValueWithDelay, 30, 7);
          const result3 = __await(obs3);

          return result1 + result2 + result3;
        }),
        Runnable.takeLast<number>(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([22]),
      ),
    ),
    test(
      "combined-latest mode",
      pipeLazy(
        Runnable.compute(
          () => {
            const oneTwoThreeDelayed = __constant(
              pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 1 })),
            );
            const createOneTwoThree = __constant((_: unknown) =>
              pipe([1, 2, 3], Runnable.fromReadonlyArray()),
            );

            const v = __await(oneTwoThreeDelayed);
            const next = __memo(createOneTwoThree, v);
            return __await(next);
          },
          { mode: "combine-latest" },
        ),
        Runnable.keepType(isSome),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "conditional hooks",
      pipeLazy(
        Runnable.compute(() => {
          const src = __constant(
            pipe(
              [0, 1, 2, 3, 4, 5],
              Observable.fromReadonlyArray({ delay: 5 }),
            ),
          );
          const src2 = __constant(
            Observable.generate(increment, returns(100), {
              delay: 2,
              delayStart: false,
            }),
          );

          const v = __await(src);

          if (v % 2 === 0) {
            __memo(increment, 1);
            return __await(src2);
          }
          return v;
        }),
        Runnable.toReadonlyArray(),
        expectArrayEquals([
          101, 102, 103, 1, 101, 102, 103, 3, 101, 102, 103, 5,
        ]),
      ),
    ),
  ),

  describe(
    "exhaust",
    test(
      "when the initial observable never disposes",
      pipeLazy(
        [
          pipe([1, 2, 3], Observable.fromReadonlyArray<number>({ delay: 1 })),
          pipe([4, 5, 6], Observable.fromReadonlyArray<number>()),
          pipe([7, 8, 9], Observable.fromReadonlyArray<number>()),
        ],
        Observable.fromReadonlyArray(),
        Runnable.exhaust<number>(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),

  describe(
    "exhaustMap",
    test(
      "when the initial observable never disposes",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Runnable.exhaustMap<number, number>(_ =>
          pipe([1, 2, 3], Observable.fromReadonlyArray<number>({ delay: 1 })),
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  ),

  describe(
    "flow",
    test("a source with delay", () => {
      const scheduler = Scheduler.createVirtualTimeScheduler();

      const generateObservable = pipe(
        Observable.generate(increment, returns(-1), {
          delay: 1,
          delayStart: true,
        }),
        Runnable.flow(scheduler),
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
          f(scheduler[SchedulerLike_now], x);
        }),
        Observable.subscribe(scheduler),
      );

      scheduler[VirtualTimeSchedulerLike_run]();

      pipe(f, expectToHaveBeenCalledTimes(3));
      pipe(
        f.calls as [][],
        expectArrayEquals(
          [
            [1, 0],
            [2, 1],
            [5, 2],
          ],
          arrayEquality(),
        ),
      );

      pipe(subscription[DisposableLike_isDisposed], expectTrue);
    }),
  ),

  describe(
    "mergeMap",
    test(
      "without delay, merge all observables as they are produced",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Runnable.mergeMap<number, number>(x =>
          pipe([x, x, x], Observable.fromReadonlyArray<number>()),
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
      ),
    ),
  ),

  describe(
    "switchAll",
    test(
      "with empty source",
      pipeLazy(
        Observable.empty<RunnableLike>(),
        Runnable.switchAll<number>(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([] as readonly number[]),
      ),
    ),
    test(
      "when source throw",
      pipeLazy(
        pipeLazy(
          Observable.throws<RunnableLike<number>>(),
          Runnable.switchAll<number>(),
          Observable.toReadonlyArrayAsync(),
        ),
        expectToThrowAsync,
      ),
    ),
  ),

  describe(
    "switchMap",
    test(
      "only produce the last observable",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray(),
        Runnable.switchMap<number, number>(x =>
          pipe(
            [x, x, x],
            Observable.fromReadonlyArray<number>({
              delay: 1,
              delayStart: true,
            }),
          ),
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([3, 3, 3]),
      ),
    ),
  ),

  describe(
    "switchMap",
    test(
      "overlapping notification",
      pipeLazy(
        [none, none, none],
        Observable.fromReadonlyArray({ delay: 4 }),
        Runnable.switchMap<void, number>(_ =>
          pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 2 })),
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 1, 2, 1, 2, 3]),
      ),
    ),
    test(
      "concating arrays",
      pipeLazy(
        [1, 2, 3],
        Observable.fromReadonlyArray({ delay: 1 }),

        Runnable.switchMap<number, number>(_ =>
          pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 0 })),
        ),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
  ),
);

((_: Runnable.Signature) => {})(Runnable);

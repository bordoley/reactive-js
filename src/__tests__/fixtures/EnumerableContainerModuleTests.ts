import * as Disposable from "../../Disposable.js";
import * as Observable from "../../Observable.js";
import * as Scheduler from "../../Scheduler.js";
import {
  describe,
  expectArrayEquals,
  expectFalse,
  expectIsNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../../__internal__/testing.js";
import {
  arrayEquality,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import {
  Container,
  ContainerOf,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EnumerableContainerModule,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  PauseableLike_resume,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../types.js";
import RunnableContainerModuleTests from "./RunnableContainerModuleTests.js";

const EnumerableContainerModuleTests = <C extends Container>(
  m: EnumerableContainerModule<C>,
) => [
  ...RunnableContainerModuleTests(m),
  describe(
    "EnumerableContainerModule",
    describe(
      "concatAll",
      test(
        "concats the input containers in order",
        pipeLazy(
          [
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
          ],
          m.fromReadonlyArray(),
          m.concatAll(),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
    ),
    describe(
      "concatMap",
      test(
        "maps each value to a container and flattens",
        pipeLazy(
          [0, 1],
          m.fromReadonlyArray(),
          m.concatMap(pipeLazy([1, 2, 3], m.fromReadonlyArray())),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
    ),
    describe(
      "empty",
      test("returns an empty enumerator", () => {
        const enumerator = pipe(m.empty(), m.enumerate());

        expectFalse(enumerator[EnumeratorLike_move]());
        expectTrue(enumerator[DisposableLike_isDisposed]);
      }),
    ),
    describe(
      "enumerate",
      test(
        "with higher order observable and no delay",
        pipeLazy(
          Observable.generate<ContainerOf<C, number>>(
            _ => pipe(1, m.fromValue()),
            returns(m.empty<number>()),
          ),
          Observable.takeFirst({ count: 100 }),
          m.fromEnumerable<ContainerOf<C, number>>(),
          m.concatAll(),
          m.takeFirst({ count: 10 }),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
        ),
      ),
      test("calling move on a completed Enumerator", () => {
        const enumerator = pipe(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.enumerate(),
        );

        while (enumerator[EnumeratorLike_move]()) {}

        expectFalse(enumerator[EnumeratorLike_hasCurrent]);
        expectTrue(enumerator[DisposableLike_isDisposed]);
        expectIsNone(enumerator[DisposableLike_error]);

        expectFalse(enumerator[EnumeratorLike_move]());
      }),
    ),
    describe(
      "flow",
      test("flow a generating source", () => {
        const scheduler = Scheduler.createVirtualTimeScheduler();

        const flowed = pipe(
          [0, 1, 2],
          m.fromReadonlyArray(),
          m.flow(scheduler),
          Disposable.addTo(scheduler),
        );

        scheduler[SchedulerLike_schedule](
          () => flowed[PauseableLike_resume](),
          { delay: 2 },
        );

        const f = mockFn();
        const subscription = pipe(
          flowed,
          Observable.withCurrentTime((time, v) => [time, v]),
          Observable.forEach(([time, v]: [number, any]) => {
            f(time, v);
          }),
          Observable.subscribe(scheduler),
          Disposable.addTo(scheduler),
        );

        scheduler[VirtualTimeSchedulerLike_run]();

        pipe(f, expectToHaveBeenCalledTimes(3));
        pipe(
          f.calls as [][],
          expectArrayEquals(
            [
              [2, 0],
              [2, 1],
              [2, 2],
            ],
            arrayEquality(),
          ),
        );

        pipe(subscription[DisposableLike_isDisposed], expectTrue);
      }),
    ),
    describe(
      "fromFactory",
      test(
        "it produces the factory result",
        pipeLazy(
          () => 1,
          m.fromFactory(),
          m.toReadonlyArray(),
          expectArrayEquals([1]),
        ),
      ),
    ),
    describe(
      "fromOptional",
      test(
        "when none",
        pipeLazy(
          none,
          m.fromOptional(),
          m.toReadonlyArray<never>(),
          expectArrayEquals([]),
        ),
      ),
      test(
        "when some",
        pipeLazy(
          1,
          m.fromOptional(),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1]),
        ),
      ),
    ),
    describe(
      "fromReadonlyArray",
      test("negative count with start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: -3, start: 4 }),
          m.toReadonlyArray(),
          expectArrayEquals([5, 4, 3]),
        );
      }),
      test("positive count with start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: 3, start: 4 }),
          m.toReadonlyArray(),
          expectArrayEquals([5, 6, 7]),
        );
      }),
      test("negative count exceeding bounds with start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: -100, start: 3 }),
          m.toReadonlyArray(),
          expectArrayEquals([4, 3, 2, 1]),
        );
      }),
      test("positive count exceeding bounds with start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: 100, start: 7 }),
          m.toReadonlyArray(),
          expectArrayEquals([8, 9]),
        );
      }),
      test("negative count without start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: -3 }),
          m.toReadonlyArray(),
          expectArrayEquals([9, 8, 7]),
        );
      }),
      test("positive count without start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: 3 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        );
      }),
    ),
    describe(
      "fromValue",
      test(
        "it produces the value",
        pipeLazy(
          none,
          m.fromValue(),
          m.toReadonlyArray(),
          expectArrayEquals([none]),
        ),
      ),
    ),
    describe(
      "toIterable",
      test("when the source completes without error", () => {
        const iter = pipe([0, 1, 2], m.fromReadonlyArray(), m.toIterable());

        pipe(Array.from(iter), expectArrayEquals([0, 1, 2]));
      }),
    ),
    describe(
      "toObservable",
      test("returns an an enumerable observable", () => {
        const obs = pipe([1, 2, 3], m.fromReadonlyArray(), m.toObservable());

        expectTrue(obs[ObservableLike_isDeferred]);
        expectTrue(obs[ObservableLike_isEnumerable]);
        expectTrue(obs[ObservableLike_isRunnable]);
      }),
    ),
  ),
];

export default EnumerableContainerModuleTests;

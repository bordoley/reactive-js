import * as Disposable from "../../Disposable.js";
import * as Observable from "../../Observable.js";
import * as Scheduler from "../../Scheduler.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectIsNone,
  expectToHaveBeenCalledTimes,
  expectTrue,
  mockFn,
  test,
} from "../../__internal__/testing.js";
import {
  Optional,
  alwaysFalse,
  alwaysTrue,
  arrayEquality,
  greaterThan,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import {
  Container,
  DisposableLike_isDisposed,
  PauseableLike_resume,
  RunnableTypeClass,
  SchedulerLike_schedule,
  VirtualTimeSchedulerLike_run,
} from "../../types.js";
import ContainerTypeClassTests from "./ContainerTypeClassTests.js";

const RunnableTypeClassTests = <C extends Container>(m: RunnableTypeClass<C>) =>
  describe(
    "RunnableTypeClass",
    ...ContainerTypeClassTests(m, m.fromReadonlyArray, m.toReadonlyArray).tests,
    describe(
      "concat",
      test(
        "concats the input containers in order",
        pipeLazy(
          m.concat(
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
          ),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
    ),
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
      "concatWith",
      test(
        "concats two containers together",
        pipeLazy(
          [0, 1],
          m.fromReadonlyArray(),
          m.concatWith(pipe([2, 3, 4], m.fromReadonlyArray())),
          m.toReadonlyArray(),
          expectArrayEquals([0, 1, 2, 3, 4]),
        ),
      ),
    ),
    describe(
      "contains",
      describe(
        "strict equality comparator",
        test(
          "source is empty",
          pipeLazy(
            [],
            m.fromReadonlyArray(),
            m.contains(1),
            expectEquals(false),
          ),
        ),
        test(
          "source contains value",
          pipeLazy(
            [0, 1, 2],
            m.fromReadonlyArray(),
            m.contains(1),
            expectEquals(true),
          ),
        ),
        test(
          "source does not contain value",
          pipeLazy(
            [2, 3, 4],
            m.fromReadonlyArray(),
            m.contains(1),
            expectEquals(false),
          ),
        ),
      ),
      describe(
        "custom equality comparator",
        test(
          "source is empty",
          pipeLazy(
            [],
            m.fromReadonlyArray(),
            m.contains(1, { equality: (a, b) => a === b }),
            expectEquals(false),
          ),
        ),
        test(
          "source contains value",
          pipeLazy(
            [0, 1, 2],
            m.fromReadonlyArray(),
            m.contains(1, { equality: (a, b) => a === b }),
            expectEquals(true),
          ),
        ),
        test(
          "source does not contain value",
          pipeLazy(
            [2, 3, 4],
            m.fromReadonlyArray(),
            m.contains(1, { equality: (a, b) => a === b }),
            expectEquals(false),
          ),
        ),
      ),
    ),
    describe(
      "endWith",
      test(
        "appends the additional values to the end of the container",
        pipeLazy(
          [0, 1],
          m.fromReadonlyArray(),
          m.endWith(2, 3, 4),
          m.toReadonlyArray(),
          expectArrayEquals([0, 1, 2, 3, 4]),
        ),
      ),
    ),

    describe(
      "everySatisfy",
      test(
        "source is empty",
        pipeLazy(
          [],
          m.fromReadonlyArray(),
          m.everySatisfy(alwaysFalse),
          expectEquals(true),
        ),
      ),
      test(
        "source values pass predicate",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.everySatisfy(alwaysTrue),
          expectEquals(true),
        ),
      ),
      test(
        "source values fail predicate",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.everySatisfy(alwaysFalse),
          expectEquals(false),
        ),
      ),
    ),
    describe(
      "flatMapIterable",
      test(
        "maps the incoming value with the inline generator function",
        pipeLazy(
          [none, none],
          m.fromReadonlyArray(),
          m.flatMapIterable(function* (_) {
            yield 1;
            yield 2;
            yield 3;
          }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
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
          m.first(),
          expectEquals<Optional<number>>(1),
        ),
      ),
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
      "m.fromReadonlyArray",
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
      "last",
      test("empty source", () => {
        const result = pipe([], m.fromReadonlyArray(), m.last());
        pipe(result, expectIsNone);
      }),
      test("it returns the last value", () => {
        const result = pipe([1, 2, 3], m.fromReadonlyArray(), m.last());
        pipe(result, expectEquals<Optional<number>>(3));
      }),
    ),
    describe(
      "noneSatisfy",
      test(
        "no values satisfy the predicate",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.noneSatisfy(greaterThan(5)),
          expectTrue,
        ),
      ),
      test(
        "empty input",
        pipeLazy(
          [],
          m.fromReadonlyArray(),
          m.noneSatisfy(greaterThan(5)),
          expectTrue,
        ),
      ),
      test(
        "some satisfy",
        pipeLazy(
          [1, 2, 30, 4, 3],
          m.fromReadonlyArray(),
          m.noneSatisfy(greaterThan(5)),
          expectFalse,
        ),
      ),
    ),
    describe(
      "reduce",
      test(
        "summing all values",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.reduce<number, number>((acc, next) => acc + next, returns(0)),
          expectEquals(6),
        ),
      ),
    ),
    describe(
      "repeat",
      test(
        "when repeating a finite amount of times.",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.repeat(3),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
        ),
      ),
    ),
    describe(
      "someSatisfy",
      test(
        "some satisfies predicate",
        pipeLazy(
          [1, 2, 30, 4],
          m.fromReadonlyArray(),
          m.someSatisfy(greaterThan(5)),
          expectTrue,
        ),
      ),
    ),
    describe(
      "startWith",
      test(
        "appends the additional values to the start of the container",
        pipeLazy(
          [0, 1],
          m.fromReadonlyArray(),
          m.startWith(2, 3, 4),
          m.toReadonlyArray(),
          expectArrayEquals([2, 3, 4, 0, 1]),
        ),
      ),
    ),
    describe(
      "takeLast",
      test(
        "when count is less than the total number of elements",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeLast({ count: 3 }),
          m.toReadonlyArray(),
          expectArrayEquals([3, 4, 5]),
        ),
      ),
      test(
        "when count is greater than the total number of elements",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeLast({ count: 10 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 4, 5]),
        ),
      ),
      test(
        "with default count",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeLast(),
          m.toReadonlyArray(),
          expectArrayEquals([5]),
        ),
      ),
    ),
    describe(
      "zip",
      test(
        "when all inputs are the same length",
        pipeLazy(
          m.zip(
            pipe([1, 2, 3, 4, 5], m.fromReadonlyArray()),
            pipe([5, 4, 3, 2, 1], m.fromReadonlyArray()),
          ),
          m.toReadonlyArray(),
          expectArrayEquals<readonly [number, number]>(
            [
              [1, 5],
              [2, 4],
              [3, 3],
              [4, 2],
              [5, 1],
            ],
            arrayEquality(),
          ),
        ),
      ),
      test(
        "when inputs are different length",
        pipeLazy(
          m.zip(
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([5, 4, 3, 2, 1], m.fromReadonlyArray()),
            pipe([1, 2, 3, 4], m.fromReadonlyArray()),
          ),
          m.toReadonlyArray(),
          expectArrayEquals<readonly [number, number, number]>(
            [
              [1, 5, 1],
              [2, 4, 2],
              [3, 3, 3],
            ],
            arrayEquality(),
          ),
        ),
      ),
    ),
    describe(
      "zipWith",
      test(
        "when inputs are different lengths",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.zipWith(pipe([1, 2, 3, 4], m.fromReadonlyArray())),
          m.toReadonlyArray(),
          expectArrayEquals<readonly [number, number]>(
            [
              [1, 1],
              [2, 2],
              [3, 3],
            ],
            arrayEquality(),
          ),
        ),
      ),
    ),
  );

export default RunnableTypeClassTests;

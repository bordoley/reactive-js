import * as Disposable from "../../Disposable.js";
import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  expectTrue,
  test,
} from "../../__internal__/testing.js";
import {
  Function1,
  arrayEquality,
  lessThan,
  none,
  pipe,
  pipeLazy,
} from "../../functions.js";
import {
  Container,
  ContainerOf,
  DeferredContainerModule,
  ObservableLike_isDeferred,
} from "../../types.js";
import ContainerModuleTests from "./ContainerModuleTests.js";

const DeferredContainerModuleTests = <C extends Container>(
  m: DeferredContainerModule<C>,
  toReadonlyArray: <T>() => Function1<ContainerOf<C, T>, ReadonlyArray<T>>,
) => [
  ContainerModuleTests(
    m,
    () => Disposable.disposed,
    <T>() =>
      (arr: ReadonlyArray<T>) =>
        m.fromReadonlyArray<T>()(arr),
    <T>() =>
      (c: ContainerOf<C, T>) =>
        toReadonlyArray<T>()(c),
  ),
  describe(
    "DeferredContainerModule",
    describe(
      "concat",
      test(
        "concats the input containers in order",
        pipeLazy(
          m.concat(
            pipe([1, 2, 3], m.fromReadonlyArray()),
            pipe([4, 5, 6], m.fromReadonlyArray()),
          ),
          toReadonlyArray(),
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
          toReadonlyArray(),
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
          toReadonlyArray(),
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
          toReadonlyArray(),
          expectArrayEquals([0, 1, 2, 3, 4]),
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
          toReadonlyArray(),
          expectArrayEquals([0, 1, 2, 3, 4]),
        ),
      ),
    ),
    describe(
      "fromFactory",
      test(
        "it produces the factory result",
        pipeLazy(
          () => 1,
          m.fromFactory(),
          toReadonlyArray(),
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
          toReadonlyArray<never>(),
          expectArrayEquals([]),
        ),
      ),
      test(
        "when some",
        pipeLazy(
          1,
          m.fromOptional(),
          toReadonlyArray<number>(),
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
          toReadonlyArray(),
          expectArrayEquals([5, 4, 3]),
        );
      }),
      test("positive count with start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: 3, start: 4 }),
          toReadonlyArray(),
          expectArrayEquals([5, 6, 7]),
        );
      }),
      test("negative count exceeding bounds with start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: -100, start: 3 }),
          toReadonlyArray(),
          expectArrayEquals([4, 3, 2, 1]),
        );
      }),
      test("positive count exceeding bounds with start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: 100, start: 7 }),
          toReadonlyArray(),
          expectArrayEquals([8, 9]),
        );
      }),
      test("negative count without start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: -3 }),
          toReadonlyArray(),
          expectArrayEquals([9, 8, 7]),
        );
      }),
      test("positive count without start index", () => {
        pipe(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray({ count: 3 }),
          toReadonlyArray(),
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
          toReadonlyArray(),
          expectArrayEquals([none]),
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
          toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
        ),
      ),
      test(
        "when repeating with a predicate",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.repeat<number>(lessThan(1)),
          toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      test("when the repeat function throws", () => {
        const err = new Error();
        pipe(
          pipeLazy(
            [1, 1],
            m.fromReadonlyArray(),
            m.repeat(_ => {
              throw err;
            }),
            toReadonlyArray(),
          ),
          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "startWith",
      test(
        "appends the additional values to the start of the container",
        pipeLazy(
          [0, 1],
          m.fromReadonlyArray(),
          m.startWith(2, 3, 4),
          toReadonlyArray(),
          expectArrayEquals([2, 3, 4, 0, 1]),
        ),
      ),
    ),
    describe(
      "toObservable",
      test("returns a  deferred observable", () => {
        const obs = pipe([1, 2, 3], m.fromReadonlyArray(), m.toObservable());

        expectTrue(obs[ObservableLike_isDeferred]);
      }),
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
          toReadonlyArray(),
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
          toReadonlyArray(),
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
          toReadonlyArray(),
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
  ),
];

export default DeferredContainerModuleTests;

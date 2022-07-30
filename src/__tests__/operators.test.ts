import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../__internal__/testing";
import {
  Buffer,
  Concat,
  ConcatAll,
  ContainerLike,
  DistinctUntilChanged,
  FromArray,
  Keep,
  Map,
  Pairwise,
  Repeat,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToReadonlyArray,
  Zip,
  emptyReadonlyArray,
} from "../containers";
import {
  alwaysTrue,
  arrayEquality,
  increment,
  pipe,
  pipeLazy,
  returns,
  sum,
} from "../functions";

export const bufferTests = <C extends ContainerLike>(
  m: Buffer<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "buffer",
    test(
      "with multiple sub buffers",
      pipeLazy(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromArray(),
        m.buffer({ maxBufferSize: 3 }),
        m.toReadonlyArray(),
        expectArrayEquals<readonly number[]>(
          [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
          ],
          arrayEquality(),
        ),
      ),
    ),

    test(
      "last buffer is short",
      pipeLazy(
        [1, 2, 3, 4, 5, 6, 7, 8],
        m.fromArray(),
        m.buffer({ maxBufferSize: 3 }),
        m.toReadonlyArray(),
        expectArrayEquals<readonly number[]>(
          [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8],
          ],
          arrayEquality(),
        ),
      ),
    ),
  );

export const concatTests = <C extends ContainerLike>(
  m: Concat<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "concat",
    test(
      "concats the input containers in order",
      pipeLazy(
        m.concat(
          pipe([1, 2, 3], m.fromArray()),
          pipe([4, 5, 6], m.fromArray()),
        ),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
  );

export const concatAllTests = <C extends ContainerLike>(
  m: ConcatAll<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "concatAll",
    test(
      "concats the input containers in order",
      pipeLazy(
        [pipe([1, 2, 3], m.fromArray()), pipe([4, 5, 6], m.fromArray())],
        m.fromArray(),
        m.concatAll(),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
    test("when an inner enumerator throw", () => {
      // FIXME: Implement me
    }),
  );

export const distinctUntilChangedTests = <C extends ContainerLike>(
  m: DistinctUntilChanged<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "distinctUntilChanged",
    test(
      "when source has duplicates in order",
      pipeLazy(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        m.fromArray(),
        m.distinctUntilChanged(),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    test(
      "when source is empty",
      pipeLazy(
        [],
        m.fromArray(),
        m.distinctUntilChanged(),
        m.toReadonlyArray(),
        expectArrayEquals([]),
      ),
    ),
    test("when equality operator throws", () => {
      const err = new Error();
      const equality = <T>(_a: T, _b: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromArray(),
          m.distinctUntilChanged({ equality }),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const keepTests = <C extends ContainerLike>(
  m: Keep<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "keep",
    test(
      "keeps only values greater than 5",
      pipeLazy(
        [4, 8, 10, 7],
        m.fromArray(),
        m.keep(x => x > 5),
        m.toReadonlyArray(),
        expectArrayEquals([8, 10, 7]),
      ),
    ),
    test("when predicate throws", () => {
      const err = new Error();
      const predicate = <T>(_a: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy([1, 1], m.fromArray(), m.keep(predicate), m.toReadonlyArray()),
        expectToThrowError(err),
      );
    }),
  );

export const mapTests = <C extends ContainerLike>(
  m: Map<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "map",
    test(
      "maps every value",
      pipeLazy(
        [1, 2, 3],
        m.fromArray(),
        m.map(increment),
        m.toReadonlyArray(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test("when mapper throws", () => {
      const err = new Error();
      const mapper = <T>(_a: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy([1, 1], m.fromArray(), m.map(mapper), m.toReadonlyArray()),
        expectToThrowError(err),
      );
    }),
  );

export const pairwiseTests = <C extends ContainerLike>(
  m: Pairwise<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "pairwise",
    test(
      "when ",
      pipeLazy(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromArray(),
        m.pairwise<number>(),
        m.toReadonlyArray<readonly [number, number]>(),
        expectArrayEquals<readonly [number, number]>(
          [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 8],
            [8, 9],
          ],
          arrayEquality(),
        ),
      ),
    ),
  );

export const repeatTests = <C extends ContainerLike>(
  m: Repeat<C> & FromArray<C> & TakeFirst<C> & ToReadonlyArray<C>,
) =>
  describe(
    "repeat",
    test(
      "when always repeating",
      pipeLazy(
        [1, 2, 3],
        m.fromArray(),
        m.repeat(),
        m.takeFirst({ count: 6 }),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),

    test(
      "when repeating a finite amount of times.",
      pipeLazy(
        [1, 2, 3],
        m.fromArray(),
        m.repeat(3),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "when repeating with a predicate",
      pipeLazy(
        [1, 2, 3],
        m.fromArray(),
        m.repeat(x => x < 1),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
  );

export const scanTests = <C extends ContainerLike>(
  m: Scan<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "scan",
    test(
      "sums all the values in the array emitting intermediate values.",
      pipeLazy(
        [1, 1, 1],
        m.fromArray(),
        m.scan(sum, returns(0)),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test("throws when the scan function throws", () => {
      const err = new Error();
      const scanner = <T>(_acc: T, _next: T): T => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromArray(),
          m.scan(scanner, returns(0)),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
    test("throws when the initial value function throws", () => {
      const err = new Error();
      const initialValue = (): number => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromArray(),
          m.scan(sum, initialValue),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const skipFirstTests = <C extends ContainerLike>(
  m: SkipFirst<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "skipFirst",
    test(
      "when skipped source has additional elements",
      pipeLazy(
        [1, 2, 3],
        m.fromArray(),
        m.skipFirst({ count: 2 }),
        m.toReadonlyArray(),
        expectArrayEquals([3]),
      ),
    ),
    test(
      "when all elements are skipped",
      pipeLazy(
        [1, 2, 3],
        m.fromArray(),
        m.skipFirst({ count: 4 }),
        m.toReadonlyArray(),
        expectArrayEquals(emptyReadonlyArray()),
      ),
    ),
  );

export const takeFirstTests = <C extends ContainerLike>(
  m: TakeFirst<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "takeFirst",
    test(
      "when taking fewer than the total number of elements in the source",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromArray(),
        m.takeFirst({ count: 3 }),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test(
      "when taking more than all the items produced by the source",
      pipeLazy(
        [1, 2],
        m.fromArray(),
        m.takeFirst({ count: 3 }),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2]),
      ),
    ),
    test(
      "when source is empty",
      pipeLazy(
        [],
        m.fromArray(),
        m.takeFirst({ count: 3 }),
        m.toReadonlyArray(),
        expectArrayEquals([]),
      ),
    ),
    test(
      "with default count",
      pipeLazy(
        [1, 2, 3],
        m.fromArray(),
        m.takeFirst(),
        m.toReadonlyArray(),
        expectArrayEquals([1]),
      ),
    ),
  );

export const takeLastTests = <C extends ContainerLike>(
  m: TakeLast<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "takeLast",
    test(
      "when count is less than the total number of elements",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromArray(),
        m.takeLast({ count: 3 }),
        m.toReadonlyArray(),
        expectArrayEquals([3, 4, 5]),
      ),
    ),
    test(
      "when count is greater than the total number of elements",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromArray(),
        m.takeLast({ count: 10 }),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
    test(
      "with default count",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromArray(),
        m.takeLast(),
        m.toReadonlyArray(),
        expectArrayEquals([5]),
      ),
    ),
  );

export const takeWhileTests = <C extends ContainerLike>(
  m: FromArray<C> & TakeWhile<C> & ToReadonlyArray<C>,
) =>
  describe(
    "takeWhile",
    test("exclusive", () => {
      pipe(
        [1, 2, 3, 4, 5],
        m.fromArray(),
        m.takeWhile(x => x < 4),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        [1, 2, 3],
        m.fromArray(),
        m.takeWhile<number>(alwaysTrue),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        [],
        m.fromArray(),
        m.takeWhile<number>(alwaysTrue),
        m.toReadonlyArray(),
        expectArrayEquals(emptyReadonlyArray()),
      );
    }),
    test(
      "inclusive",
      pipeLazy(
        [1, 2, 3, 4, 5, 6],
        m.fromArray(),
        m.takeWhile(x => x < 4, { inclusive: true }),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    test("when predicate throws", () => {
      const err = new Error();
      const predicate = (_: unknown): boolean => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromArray(),
          m.takeWhile(predicate),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const throwIfEmptyTests = <C extends ContainerLike>(
  m: FromArray<C> & ThrowIfEmpty<C> & ToReadonlyArray<C>,
) =>
  describe(
    "throwIfEmpty",
    test("when source is empty", () => {
      const error = new Error();
      pipeLazy(
        pipeLazy(
          [],
          m.fromArray(),
          m.throwIfEmpty(() => error),
          m.toReadonlyArray(),
        ),
        expectToThrowError(error),
      );
    }),

    test(
      "when source is not empty",
      pipeLazy(
        [1],
        m.fromArray(),
        m.throwIfEmpty(() => undefined),
        m.toReadonlyArray(),
        expectArrayEquals([1]),
      ),
    ),
  );

export const zipTests = <C extends ContainerLike>(
  m: Zip<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "zip",
    test(
      "when all inputs are the same length",
      pipeLazy(
        m.zip(
          pipe([1, 2, 3, 4, 5], m.fromArray()),
          pipe([5, 4, 3, 2, 1], m.fromArray()),
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
          pipe([1, 2, 3], m.fromArray()),
          pipe([5, 4, 3, 2, 1], m.fromArray()),
          pipe([1, 2, 3, 4], m.fromArray()),
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
  );

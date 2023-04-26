import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrowError,
  test,
} from "../__internal__/testing.js";
import {
  Concat,
  ContainerLike,
  ForEach,
  FromReadonlyArray,
  Keep,
  Map,
  TakeFirst,
} from "../containers.js";
import {
  greaterThan,
  identity,
  increment,
  pipe,
  pipeLazy,
  returns,
} from "../functions.js";
import {
  CatchError,
  DecodeWithCharset,
  EncodeUtf8,
  ObservableLike,
  Retry,
  ScanLast,
  ScanMany,
  ThrowIfEmpty,
  Throws,
  ToEnumerable,
  ToRunnable,
} from "../rx.js";
import type * as RX from "../rx.js";
import * as Enumerable from "../rx/Enumerable.js";
import * as Runnable from "../rx/Runnable.js";

export const catchErrorTests = <C extends ContainerLike>(
  m: CatchError<C> & Throws<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "catchError",
    test("when source throws", () => {
      const e = {};
      pipe(
        m.throws<number>({ raise: returns(e) }),
        m.catchError(_ => pipe([1, 2, 3], m.fromReadonlyArray())),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
    }) /*
    test(
      "when source does not throw",
      pipeLazy(
        [4, 5, 6],
        m.fromReadonlyArray(),
        //m.catchError(_ => pipe([1, 2, 3], m.fromReadonlyArray())),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([4, 5, 6]),
      ),
    ),*/,
  );

export const decodeWithCharsetTests = <C extends ContainerLike>(
  m: DecodeWithCharset<C> &
    EncodeUtf8<C> &
    FromReadonlyArray<C> &
    ToRunnable<C>,
) =>
  describe(
    "decodeWithCharset",
    test("decoding ascii", () => {
      const str = "abcdefghijklmnsopqrstuvwxyz";

      pipe(
        [str],
        m.fromReadonlyArray(),
        m.encodeUtf8(),
        m.decodeWithCharset(),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        x => x.join(),
        expectEquals(str),
      );
    }),
    test("decoding multi-byte code points", () => {
      const str = String.fromCodePoint(8364);
      pipe(
        [str],
        m.fromReadonlyArray(),
        m.encodeUtf8(),
        m.decodeWithCharset(),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        x => x.join(),
        expectEquals(str),
      );
    }),
  );

export const forEachTests = <C extends ContainerLike>(
  m: ForEach<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "forEach",
    test("invokes the effect for each notified value", () => {
      const result: number[] = [];
      pipe(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.forEach(x => {
          result.push(x + 10);
        }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );

      pipe(result, expectArrayEquals([11, 12, 13]));
    }),

    test("when the effect function throws", () => {
      const err = new Error();
      pipe(
        pipeLazy(
          [1, 1],
          m.fromReadonlyArray(),
          m.forEach(_ => {
            throw err;
          }),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const fromReadonlyArrayTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "fromReadonlyArray",
    test("negative count with start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: -3, start: 4 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([5, 4, 3]),
      );
    }),
    test("positive count with start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: 3, start: 4 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([5, 6, 7]),
      );
    }),
    test("negative count exceeding bounds with start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: -100, start: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([4, 3, 2, 1]),
      );
    }),
    test("positive count exceeding bounds with start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: 100, start: 7 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([8, 9]),
      );
    }),
    test("negative count without start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: -3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([9, 8, 7]),
      );
    }),
    test("positive count without start index", () => {
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray({ count: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
    }),
  );

export const keepTests = <C extends ContainerLike>(
  m: Keep<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "keep",
    test(
      "keeps only values greater than 5",
      pipeLazy(
        [4, 8, 10, 7],
        m.fromReadonlyArray(),
        m.keep(greaterThan(5)),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([8, 10, 7]),
      ),
    ),
    test("when predicate throws", () => {
      const err = new Error();
      const predicate = <T>(_a: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromReadonlyArray(),
          m.keep(predicate),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const mapTests = <C extends ContainerLike>(
  m: Map<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "map",
    test(
      "maps every value",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.map(increment),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test("when selector throws", () => {
      const err = new Error();
      const selector = <T>(_a: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromReadonlyArray(),
          m.map(selector),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const retryTests = <C extends ContainerLike>(
  m: Concat<C> &
    Retry<C> &
    FromReadonlyArray<C> &
    Throws<C> &
    TakeFirst<C> &
    ToRunnable<C>,
) =>
  describe(
    "retry",
    test(
      "retrys the container on an exception",
      pipeLazy(
        m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), m.throws()),
        m.retry(),
        m.takeFirst({ count: 6 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  );

export const scanLastTests = <
  C extends ContainerLike,
  CInner extends ObservableLike,
>(
  m: ScanLast<C, CInner> & RX.FromReadonlyArray<C> & ToRunnable<C>,
  mInner: RX.FromReadonlyArray<CInner>,
) =>
  describe(
    "scanLast",
    test(
      "fast src, slow acc",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.scanLast<number, number>(
          (acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })),
          returns(0),
        ),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "slow src, fast acc",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray({ delay: 4 }),
        m.scanLast<number, number>(
          (acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })),
          returns(0),
        ),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "slow src, slow acc",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray({ delay: 4 }),
        m.scanLast<number, number>(
          (acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })),
          returns(0),
        ),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "fast src, fast acc",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.scanLast<number, number>(
          (acc, x) => pipe([x + acc], mInner.fromReadonlyArray()),
          returns(0),
        ),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),
  );

export const scanManyTests = <
  C extends ContainerLike,
  CInner extends ObservableLike,
>(
  m: ScanMany<C, CInner> & RX.FromReadonlyArray<C> & ToRunnable<C>,
  mInner: RX.Generate<CInner> & TakeFirst<CInner>,
) =>
  describe(
    "scanMany",
    test(
      "slow src, fast acc",
      pipeLazy(
        [1, 1, 1],
        m.fromReadonlyArray({ delay: 10 }),
        m.scanMany<number, number>(
          (acc, next) =>
            pipe(
              mInner.generate<number>(identity, returns(next + acc), {
                delay: 1,
              }),
              mInner.takeFirst({ count: 3 }),
            ),
          returns(0),
        ),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
      ),
    ),
    test(
      "fast src, slow acc",
      pipeLazy(
        [1, 1, 1],
        m.fromReadonlyArray({ delay: 1 }),
        m.scanMany<number, number>(
          (acc, next) =>
            pipe(
              mInner.generate<number>(identity, returns(next + acc), {
                delay: 10,
              }),
              mInner.takeFirst({ count: 3 }),
            ),
          returns(0),
        ),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
      ),
    ),
  );

export const throwIfEmptyTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ThrowIfEmpty<C> & ToRunnable<C>,
) =>
  describe(
    "throwIfEmpty",
    test("when source is empty", () => {
      const error = new Error();
      pipe(
        pipeLazy(
          [],
          m.fromReadonlyArray(),
          m.throwIfEmpty(() => error),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(error),
      );
    }),

    test("when factory throw", () => {
      const error = new Error();
      pipe(
        pipeLazy(
          [],
          m.fromReadonlyArray(),
          m.throwIfEmpty(() => {
            throw error;
          }),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(error),
      );
    }),

    test(
      "when source is not empty",
      pipeLazy(
        [1],
        m.fromReadonlyArray(),
        m.throwIfEmpty(() => undefined),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1]),
      ),
    ),
  );

export const toEnumerableTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToEnumerable<C>,
) =>
  describe(
    "toEnumerable",
    test(
      "with an enumerable observable",
      pipeLazy(
        [1, 2, 3, 4],
        m.fromReadonlyArray(),
        m.toEnumerable(),
        Enumerable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
  );

const toRunnableTest = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToRunnable<C>,
) =>
  test(
    "without delay",
    pipeLazy(
      [1, 2, 3, 4, 5],
      m.fromReadonlyArray(),
      m.toRunnable(),
      Runnable.toReadonlyArray(),
      expectArrayEquals([1, 2, 3, 4, 5]),
    ),
  );

export const toRunnableWithDelayTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> &
    ToRunnable<
      C,
      {
        readonly delay?: number;
        readonly delayStart?: boolean;
      }
    >,
) =>
  describe(
    "toRunnable",
    toRunnableTest(m),
    test(
      "with delay",
      pipeLazy(
        [9, 9, 9, 9],
        m.fromReadonlyArray(),
        m.toRunnable({ delay: 2 }),
        Runnable.withCurrentTime(t => t),
        Runnable.toReadonlyArray(),
        expectArrayEquals([0, 2, 4, 6]),
      ),
    ),
  );

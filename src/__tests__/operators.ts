import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrowError,
  test,
  testAsync,
} from "../__internal__/testing.js";
import {
  Buffer,
  CatchError,
  Concat,
  ConcatAll,
  ConcatMap,
  ConcatWith,
  ContainerLike,
  Contains,
  DecodeWithCharset,
  DistinctUntilChanged,
  EncodeUtf8,
  EndWith,
  EverySatisfy,
  FlatMapIterable,
  ForEach,
  FromOptional,
  FromReadonlyArray,
  Generate,
  IgnoreElements,
  Keep,
  Map,
  MapTo,
  Pairwise,
  Pick,
  Reduce,
  Repeat,
  Scan,
  SkipFirst,
  StartWith,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  Throws,
  Zip,
  ZipWith,
} from "../containers.js";
import * as ReadonlyArray from "../containers/ReadonlyArray.js";
import {
  Optional,
  alwaysFalse,
  alwaysTrue,
  arrayEquality,
  greaterThan,
  identity,
  increment,
  lessThan,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../functions.js";
import {
  ObservableLike,
  Retry,
  ScanLast,
  ScanMany,
  ToEnumerable,
  ToObservable,
  ToRunnable,
} from "../rx.js";
import * as Enumerable from "../rx/Enumerable.js";
import * as Observable from "../rx/Observable.js";
import * as Runnable from "../rx/Runnable.js";

export const bufferTests = <C extends ContainerLike>(
  m: Buffer<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "buffer",
    test(
      "with multiple sub buffers",
      pipeLazy(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray(),
        m.buffer({ count: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
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
        m.fromReadonlyArray(),
        m.buffer({ count: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
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
    }),
    test(
      "when source does not throw",
      pipeLazy(
        [4, 5, 6],
        m.fromReadonlyArray(),
        m.catchError(_ => pipe([1, 2, 3], m.fromReadonlyArray())),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([4, 5, 6]),
      ),
    ),
  );

export const concatTests = <C extends ContainerLike>(
  m: Concat<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "concat",
    test(
      "concats the input containers in order",
      pipeLazy(
        m.concat(
          pipe([1, 2, 3], m.fromReadonlyArray()),
          pipe([4, 5, 6], m.fromReadonlyArray()),
        ),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
  );

export const concatAllTests = <C extends ContainerLike>(
  m: ConcatAll<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
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
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
    test("when an inner enumerator throw", () => {
      // FIXME: Implement me
    }),
  );

export const concatMapTests = <C extends ContainerLike>(
  m: ConcatMap<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "concatMap",
    test(
      "maps each value to a container and flattens",
      pipeLazy(
        [0, 1],
        m.fromReadonlyArray(),
        m.concatMap(pipeLazy([1, 2, 3], m.fromReadonlyArray())),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  );

export const concatWithTests = <C extends ContainerLike>(
  m: ConcatWith<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "concatWith",
    test(
      "concats two containers together",
      pipeLazy(
        [0, 1],
        m.fromReadonlyArray(),
        m.concatWith(pipe([2, 3, 4], m.fromReadonlyArray())),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4]),
      ),
    ),
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

export const distinctUntilChangedTests = <C extends ContainerLike>(
  m: DistinctUntilChanged<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "distinctUntilChanged",
    test(
      "when source has duplicates in order",
      pipeLazy(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        m.fromReadonlyArray(),
        m.distinctUntilChanged(),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    test(
      "when source is empty",
      pipeLazy(
        [],
        m.fromReadonlyArray(),
        m.distinctUntilChanged(),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
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
          m.fromReadonlyArray(),
          m.distinctUntilChanged({ equality }),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const endWithTests = <C extends ContainerLike>(
  m: EndWith<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "endWith",
    test(
      "appends the additional values to the end of the container",
      pipeLazy(
        [0, 1],
        m.fromReadonlyArray(),
        m.endWith(2, 3, 4),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4]),
      ),
    ),
  );

export const everySatisfyTests = <C extends ContainerLike>(
  m: EverySatisfy<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "everySatisfy",
    test(
      "source is empty",
      pipeLazy(
        [],
        m.fromReadonlyArray(),
        m.everySatisfy(alwaysFalse),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([true]),
      ),
    ),
    test(
      "source values pass predicate",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.everySatisfy(alwaysTrue),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([true]),
      ),
    ),
    test(
      "source values fail predicate",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.everySatisfy(alwaysFalse),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([false]),
      ),
    ),
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

export const flatMapIterableTests = <C extends ContainerLike>(
  m: FlatMapIterable<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
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
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  );

export const ignoreElementsTests = <C extends ContainerLike>(
  m: IgnoreElements<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "ignoreElements",
    test(
      "ignores all elements",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.ignoreElements<number>(),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals(ReadonlyArray.empty()),
      ),
    ),
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
    test("when mapper throws", () => {
      const err = new Error();
      const mapper = <T>(_a: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromReadonlyArray(),
          m.map(mapper),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const mapToTests = <C extends ContainerLike>(
  m: MapTo<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "mapTo",
    test(
      "maps every value in the source to v",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.mapTo(2),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([2, 2, 2]),
      ),
    ),
  );

export const pairwiseTests = <C extends ContainerLike>(
  m: Pairwise<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "pairwise",
    test(
      "when there are more than one input value",
      pipeLazy(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray(),
        m.pairwise<number>(),
        m.toRunnable(),
        Runnable.toReadonlyArray<readonly [number, number]>(),
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
    test(
      "when the input only provides 1 value",
      pipeLazy(
        [0],
        m.fromReadonlyArray(),
        m.pairwise<number>(),
        m.toRunnable<readonly [number, number]>(),
        Runnable.toReadonlyArray(),
        expectArrayEquals<readonly [number, number]>([], arrayEquality()),
      ),
    ),
  );

export const pickTests = <C extends ContainerLike>(
  m: Pick<C> & FromOptional<C> & ToRunnable<C>,
) =>
  describe(
    "pick",
    test("with object and symbol keys", () => {
      const keyA = Symbol();
      const keyB = Symbol();

      const obj = {
        [keyA]: {
          [keyB]: "value",
        },
      };

      pipe(
        obj,
        m.fromOptional(),
        m.pick(keyA, keyB),
        m.toRunnable(),
        Runnable.first(),
        expectEquals<Optional<string>>("value"),
      );
    }),
    test("with object and string keys", () => {
      const obj = {
        keyA: {
          keyB: "value",
        },
      };

      pipe(
        obj,
        m.fromOptional(),
        m.pick("keyA", "keyB"),
        m.toRunnable(),
        Runnable.first(),
        expectEquals<Optional<string>>("value"),
      );
    }),
    test("with array", () => {
      const obj = [1, 2, 3, 4, 5, 6];

      pipe(
        obj,
        m.fromOptional(),
        m.pick(3),
        m.toRunnable(),
        Runnable.first(),
        expectEquals<Optional<number>>(4),
      );
    }),
  );

export const reduceTests = <C extends ContainerLike>(
  m: Reduce<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "reduce",
    test(
      "summing all values",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.reduce<number, number>((acc, next) => acc + next, returns(0)),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([6]),
      ),
    ),
  );

export const repeatTests = <C extends ContainerLike>(
  m: Repeat<C> & FromReadonlyArray<C> & TakeFirst<C> & ToRunnable<C>,
) =>
  describe(
    "repeat",
    test(
      "when always repeating",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.repeat(),
        m.takeFirst({ count: 6 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),

    test(
      "when repeating a finite amount of times.",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.repeat(3),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3]),
      ),
    ),
    test(
      "when repeating with a predicate",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.repeat(lessThan(1)),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
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
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const retryTests = <C extends ObservableLike>(
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

export const scanTests = <C extends ContainerLike>(
  m: Scan<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "scan",
    test(
      "sums all the values in the array emitting intermediate values.",
      pipeLazy(
        [1, 1, 1],
        m.fromReadonlyArray(),
        m.scan<number, number>((a, b) => a + b, returns(0)),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
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
          m.fromReadonlyArray(),
          m.scan(scanner, returns(0)),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
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
          m.fromReadonlyArray(),
          m.scan((a, b) => a + b, initialValue),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const scanLastTests = <
  C extends ContainerLike,
  CInner extends ObservableLike,
>(
  m: ScanLast<C, CInner> &
    FromReadonlyArray<
      C,
      {
        readonly start?: number;
        readonly count?: number;
        delay?: number;
      }
    > &
    ToRunnable<C>,
  mInner: FromReadonlyArray<
    CInner,
    {
      readonly start?: number;
      readonly count?: number;
      delay?: number;
    }
  >,
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
  m: ScanMany<C, CInner> &
    FromReadonlyArray<
      C,
      {
        readonly start?: number;
        readonly count?: number;
        delay?: number;
      }
    > &
    ToRunnable<C>,
  mInner: Generate<
    CInner,
    {
      delay?: number;
    }
  > &
    TakeFirst<CInner>,
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

export const skipFirstTests = <C extends ContainerLike>(
  m: SkipFirst<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "skipFirst",
    test(
      "when skipped source has additional elements",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.skipFirst({ count: 2 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([3]),
      ),
    ),
    test(
      "when all elements are skipped",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.skipFirst({ count: 4 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals(ReadonlyArray.empty()),
      ),
    ),
  );

export const containsTests = <C extends ContainerLike>(
  m: Contains<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "contains",
    test(
      "source is empty",
      pipeLazy(
        [],
        m.fromReadonlyArray(),
        m.contains(1),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([false]),
      ),
    ),
    test(
      "source contains value",
      pipeLazy(
        [0, 1, 2],
        m.fromReadonlyArray(),
        m.contains(1),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([true]),
      ),
    ),
    test(
      "source does not contain value",
      pipeLazy(
        [2, 3, 4],
        m.fromReadonlyArray(),
        m.contains(1),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([false]),
      ),
    ),
  );

export const startWithTests = <C extends ContainerLike>(
  m: StartWith<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "startWith",
    test(
      "appends the additional values to the start of the container",
      pipeLazy(
        [0, 1],
        m.fromReadonlyArray(),
        m.startWith(2, 3, 4),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([2, 3, 4, 0, 1]),
      ),
    ),
  );

export const takeFirstTests = <C extends ContainerLike>(
  m: TakeFirst<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "takeFirst",
    test(
      "when taking fewer than the total number of elements in the source",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromReadonlyArray(),
        m.takeFirst({ count: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test(
      "when taking more than all the items produced by the source",
      pipeLazy(
        [1, 2],
        m.fromReadonlyArray(),
        m.takeFirst({ count: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2]),
      ),
    ),
    test(
      "when source is empty",
      pipeLazy(
        [],
        m.fromReadonlyArray(),
        m.takeFirst({ count: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([]),
      ),
    ),
    test(
      "with default count",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.takeFirst(),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1]),
      ),
    ),
    test(
      "when count is 0",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.takeFirst({ count: 0 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
    ),
  );

export const takeLastTests = <C extends ContainerLike>(
  m: TakeLast<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "takeLast",
    test(
      "when count is less than the total number of elements",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromReadonlyArray(),
        m.takeLast({ count: 3 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([3, 4, 5]),
      ),
    ),
    test(
      "when count is greater than the total number of elements",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromReadonlyArray(),
        m.takeLast({ count: 10 }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
    test(
      "with default count",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromReadonlyArray(),
        m.takeLast(),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([5]),
      ),
    ),
  );

export const takeWhileTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & TakeWhile<C> & ToRunnable<C>,
) =>
  describe(
    "takeWhile",
    test("exclusive", () => {
      pipe(
        [1, 2, 3, 4, 5],
        m.fromReadonlyArray(),
        m.takeWhile(lessThan(4)),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.takeWhile<number>(alwaysTrue),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        [],
        m.fromReadonlyArray(),
        m.takeWhile<number>(alwaysTrue),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
        expectArrayEquals(ReadonlyArray.empty()),
      );
    }),
    test(
      "inclusive",
      pipeLazy(
        [1, 2, 3, 4, 5, 6],
        m.fromReadonlyArray(),
        m.takeWhile(lessThan(4), { inclusive: true }),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
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
          m.fromReadonlyArray(),
          m.takeWhile(predicate),
          m.toRunnable(),
          Runnable.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
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

export const toObservableTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToObservable<C>,
) =>
  testAsync("toObservable", async () => {
    const result = await pipe(
      [0, 1, 2, 3, 4],
      m.fromReadonlyArray(),
      m.toObservable<number>(),
      Observable.buffer(),
      Observable.lastAsync(),
    );

    pipe(result ?? [], expectArrayEquals([0, 1, 2, 3, 4]));
  });

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

export const toRunnableTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToRunnable<C>,
) => describe("toRunnable", toRunnableTest(m));

export const zipTests = <C extends ContainerLike>(
  m: Zip<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "zip",
    test(
      "when all inputs are the same length",
      pipeLazy(
        m.zip(
          pipe([1, 2, 3, 4, 5], m.fromReadonlyArray()),
          pipe([5, 4, 3, 2, 1], m.fromReadonlyArray()),
        ),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
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
        m.toRunnable(),
        Runnable.toReadonlyArray(),
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

export const zipWithTests = <C extends ContainerLike>(
  m: ZipWith<C> & FromReadonlyArray<C> & ToRunnable<C>,
) =>
  describe(
    "zipWith",
    test(
      "when inputs are different lengths",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.zipWith(pipe([1, 2, 3, 4], m.fromReadonlyArray())),
        m.toRunnable(),
        Runnable.toReadonlyArray(),
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
  );

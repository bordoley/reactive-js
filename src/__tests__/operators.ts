import {
  Buffer,
  CatchError,
  Concat,
  ConcatAll,
  ContainerLike,
  DecodeWithCharset,
  Defer,
  DistinctUntilChanged,
  EverySatisfy,
  ForEach,
  FromIterable,
  FromReadonlyArray,
  Keep,
  Map,
  Pairwise,
  Reduce,
  Repeat,
  Scan,
  SkipFirst,
  SomeSatisfy,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToReadonlyArray,
  Zip,
} from "../containers";
import Container from "../containers/Container";
import ReadonlyArray from "../containers/ReadonlyArray";
import {
  alwaysFalse,
  alwaysTrue,
  arrayEquality,
  increment,
  none,
  pipe,
  pipeLazy,
  returns,
  sum,
} from "../functions";
import { ToEnumerable } from "../ix";
import Enumerable from "../ix/Enumerable";
import {
  ObservableLike,
  Retry,
  ScanAsync,
  ToObservable,
  ToRunnableObservable,
} from "../rx";
import Observable from "../rx/Observable";
import RunnableObservable from "../rx/RunnableObservable";
import { __now } from "../scheduling/Continuation/effects";
import Scheduler from "../scheduling/Scheduler";
import Disposable from "../util/Disposable";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrowError,
  test,
  testAsync,
} from "./testing";

export const bufferTests = <C extends ContainerLike>(
  m: Buffer<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "buffer",
    test(
      "with multiple sub buffers",
      pipeLazy(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray(),
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
        m.fromReadonlyArray(),
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

export const catchErrorTests = <C extends ContainerLike>(
  m: CatchError<C> & Map<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "catchError",
    test("when source throws", () => {
      const e = {};
      pipe(
        Container.throws<C, number>(m, { raise: returns(e) }),
        m.catchError(_ => pipe([1, 2, 3], m.fromReadonlyArray())),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
    }),
    test(
      "when source does not throw",
      pipeLazy(
        [4, 5, 6],
        m.fromReadonlyArray(),
        m.catchError(_ => pipe([1, 2, 3], m.fromReadonlyArray())),
        m.toReadonlyArray(),
        expectArrayEquals([4, 5, 6]),
      ),
    ),
  );

export const concatTests = <C extends ContainerLike>(
  m: Concat<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
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
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
  );

export const concatAllTests = <C extends ContainerLike>(
  m: ConcatAll<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
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
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5, 6]),
      ),
    ),
    test("when an inner enumerator throw", () => {
      // FIXME: Implement me
    }),
  );

export const concatMapTests = <C extends ContainerLike>(
  m: ConcatAll<C> & FromReadonlyArray<C> & Map<C> & ToReadonlyArray<C>,
) =>
  describe(
    "concatMap",
    test(
      "maps each value to a container and flattens",
      pipeLazy(
        [0, 1],
        m.fromReadonlyArray(),
        Container.concatMap<C, number, number>(
          m,
          pipeLazy([1, 2, 3], m.fromReadonlyArray()),
        ),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  );

export const concatWithTests = <C extends ContainerLike>(
  m: Concat<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "concatWith",
    test(
      "concats two containers together",
      pipeLazy(
        [0, 1],
        m.fromReadonlyArray(),
        Container.concatWith<C, number>(
          m,
          pipe([2, 3, 4], m.fromReadonlyArray()),
        ),
        m.toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4]),
      ),
    ),
  );

export const decodeWithCharsetTests = <C extends ContainerLike>(
  m: DecodeWithCharset<C> &
    Defer<C> &
    FromReadonlyArray<C> &
    Map<C> &
    ToReadonlyArray<C>,
) =>
  describe(
    "decodeWithCharset",
    test("decoding ascii", () => {
      const str = "abcdefghijklmnsopqrstuvwxyz";

      pipe(
        [str],
        m.fromReadonlyArray(),
        Container.encodeUtf8(m),
        m.decodeWithCharset(),
        m.toReadonlyArray(),
        x => x.join(),
        expectEquals(str),
      );
    }),
    test("decoding multi-byte code points", () => {
      const str = String.fromCodePoint(8364);
      pipe(
        [str],
        m.fromReadonlyArray(),
        Container.encodeUtf8(m),
        m.decodeWithCharset(),
        m.toReadonlyArray(),
        x => x.join(),
        expectEquals(str),
      );
    }),
  );

export const distinctUntilChangedTests = <C extends ContainerLike>(
  m: DistinctUntilChanged<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "distinctUntilChanged",
    test(
      "when source has duplicates in order",
      pipeLazy(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        m.fromReadonlyArray(),
        m.distinctUntilChanged(),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    test(
      "when source is empty",
      pipeLazy(
        [],
        m.fromReadonlyArray(),
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
          m.fromReadonlyArray(),
          m.distinctUntilChanged({ equality }),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const endWithTests = <C extends ContainerLike>(
  m: Concat<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "endWith",
    test(
      "appends the additional values to the end of the container",
      pipeLazy(
        [0, 1],
        m.fromReadonlyArray(),
        Container.endWith<C, number>(m, 2, 3, 4),
        m.toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3, 4]),
      ),
    ),
  );

export const everySatisfyTests = <C extends ContainerLike>(
  m: EverySatisfy<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "everySatisfy",
    test(
      "source is empty",
      pipeLazy(
        [],
        m.fromReadonlyArray(),
        m.everySatisfy(alwaysFalse),
        m.toReadonlyArray(),
        expectArrayEquals([true]),
      ),
    ),
    test(
      "source values pass predicate",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.everySatisfy(alwaysTrue),
        m.toReadonlyArray(),
        expectArrayEquals([true]),
      ),
    ),
    test(
      "source values fail predicate",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.everySatisfy(alwaysFalse),
        m.toReadonlyArray(),
        expectArrayEquals([false]),
      ),
    ),
  );

export const forEachTests = <C extends ContainerLike>(
  m: ForEach<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
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
        m.toReadonlyArray(),
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
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const fromReadonlyArrayTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
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
  );

export const genMapTests = <C extends ContainerLike>(
  m: ConcatAll<C> &
    FromReadonlyArray<C> &
    FromIterable<C> &
    Map<C> &
    ToReadonlyArray<C>,
) =>
  describe(
    "genMap",
    test(
      "maps the incoming value with the inline generator function",
      pipeLazy(
        [none, none],
        m.fromReadonlyArray(),
        Container.genMap(m, function* (_) {
          yield 1;
          yield 2;
          yield 3;
        }),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  );

export const ignoreElementsTests = <C extends ContainerLike>(
  m: Keep<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "ignoreElements",
    test(
      "ignores all elements",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        Container.ignoreElements<C, number>(m),
        m.toReadonlyArray(),
        expectArrayEquals(ReadonlyArray.empty()),
      ),
    ),
  );

export const keepTests = <C extends ContainerLike>(
  m: Keep<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "keep",
    test(
      "keeps only values greater than 5",
      pipeLazy(
        [4, 8, 10, 7],
        m.fromReadonlyArray(),
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
        pipeLazy(
          [1, 1],
          m.fromReadonlyArray(),
          m.keep(predicate),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const mapTests = <C extends ContainerLike>(
  m: Map<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "map",
    test(
      "maps every value",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
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
        pipeLazy(
          [1, 1],
          m.fromReadonlyArray(),
          m.map(mapper),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const mapToTests = <C extends ContainerLike>(
  m: Map<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "mapTo",
    test(
      "maps every value in the source to v",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        Container.mapTo(m, 2),
        m.toReadonlyArray(),
        expectArrayEquals([2, 2, 2]),
      ),
    ),
  );

export const pairwiseTests = <C extends ContainerLike>(
  m: Pairwise<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "pairwise",
    test(
      "when there are more than one input value",
      pipeLazy(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        m.fromReadonlyArray(),
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
    test(
      "when the input only provides 1 value",
      pipeLazy(
        [0],
        m.fromReadonlyArray(),
        m.pairwise<number>(),
        m.toReadonlyArray<readonly [number, number]>(),
        expectArrayEquals<readonly [number, number]>([], arrayEquality()),
      ),
    ),
  );

export const reduceTests = <C extends ContainerLike>(
  m: Reduce<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "reduce",
    test(
      "summing all values",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.reduce<number, number>((acc, next) => acc + next, returns(0)),
        m.toReadonlyArray(),
        expectArrayEquals([6]),
      ),
    ),
  );

export const repeatTests = <C extends ContainerLike>(
  m: Repeat<C> & FromReadonlyArray<C> & TakeFirst<C> & ToReadonlyArray<C>,
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
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),

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
    test(
      "when repeating with a predicate",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.repeat(x => x < 1),
        m.toReadonlyArray(),
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
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const retryTests = <C extends ObservableLike>(
  m: Concat<C> &
    Retry<C> &
    FromReadonlyArray<C> &
    Map<C> &
    TakeFirst<C> &
    ToReadonlyArray<C>,
) =>
  describe(
    "retry",
    test(
      "retrys the container on an exception",
      pipeLazy(
        m.concat(pipe([1, 2, 3], m.fromReadonlyArray()), Container.throws(m)),
        m.retry(),
        m.takeFirst({ count: 6 }),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 1, 2, 3]),
      ),
    ),
  );

export const scanTests = <C extends ContainerLike>(
  m: Scan<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "scan",
    test(
      "sums all the values in the array emitting intermediate values.",
      pipeLazy(
        [1, 1, 1],
        m.fromReadonlyArray(),
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
          m.fromReadonlyArray(),
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
          m.fromReadonlyArray(),
          m.scan(sum, initialValue),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const scanAsyncTests = <
  C extends ContainerLike,
  CInner extends ObservableLike,
>(
  m: ScanAsync<C, CInner> &
    FromReadonlyArray<
      C,
      {
        readonly start?: number;
        readonly count?: number;
        delay?: number;
      }
    > &
    ToReadonlyArray<C>,
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
    "scanAsync",
    test(
      "fast lib, slow acc",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.scanAsync<number, number>(
          (acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })),
          returns(0),
        ),
        m.toReadonlyArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "slow lib, fast acc",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray({ delay: 4 }),
        m.scanAsync<number, number>(
          (acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })),
          returns(0),
        ),
        m.toReadonlyArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "slow lib, slow acc",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray({ delay: 4 }),
        m.scanAsync<number, number>(
          (acc, x) => pipe([x + acc], mInner.fromReadonlyArray({ delay: 4 })),
          returns(0),
        ),
        m.toReadonlyArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),

    test(
      "fast lib, fast acc",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.scanAsync<number, number>(
          (acc, x) => pipe([x + acc], mInner.fromReadonlyArray()),
          returns(0),
        ),
        m.toReadonlyArray(),
        expectArrayEquals([1, 3, 6]),
      ),
    ),
  );

export const skipFirstTests = <C extends ContainerLike>(
  m: SkipFirst<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "skipFirst",
    test(
      "when skipped source has additional elements",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.skipFirst({ count: 2 }),
        m.toReadonlyArray(),
        expectArrayEquals([3]),
      ),
    ),
    test(
      "when all elements are skipped",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.skipFirst({ count: 4 }),
        m.toReadonlyArray(),
        expectArrayEquals(ReadonlyArray.empty()),
      ),
    ),
  );

export const someSatisfyTests = <C extends ContainerLike>(
  m: SomeSatisfy<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "someSatisfy",
    test(
      "source is empty",
      pipeLazy(
        [],
        m.fromReadonlyArray(),
        Container.contains<C, number>(m, 1),
        m.toReadonlyArray(),
        expectArrayEquals([false]),
      ),
    ),
    test(
      "source contains value",
      pipeLazy(
        [0, 1, 2],
        m.fromReadonlyArray(),
        Container.contains(m, 1),
        m.toReadonlyArray(),
        expectArrayEquals([true]),
      ),
    ),
    test(
      "source does not contain value",
      pipeLazy(
        [2, 3, 4],
        m.fromReadonlyArray(),
        Container.contains(m, 1),
        m.toReadonlyArray(),
        expectArrayEquals([false]),
      ),
    ),
  );

export const startWithTests = <C extends ContainerLike>(
  m: Concat<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "startWith",
    test(
      "appends the additional values to the start of the container",
      pipeLazy(
        [0, 1],
        m.fromReadonlyArray(),
        Container.startWith(m, 2, 3, 4),
        m.toReadonlyArray(),
        expectArrayEquals([2, 3, 4, 0, 1]),
      ),
    ),
  );

export const takeFirstTests = <C extends ContainerLike>(
  m: TakeFirst<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "takeFirst",
    test(
      "when taking fewer than the total number of elements in the source",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromReadonlyArray(),
        m.takeFirst({ count: 3 }),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test(
      "when taking more than all the items produced by the source",
      pipeLazy(
        [1, 2],
        m.fromReadonlyArray(),
        m.takeFirst({ count: 3 }),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2]),
      ),
    ),
    test(
      "when source is empty",
      pipeLazy(
        [],
        m.fromReadonlyArray(),
        m.takeFirst({ count: 3 }),
        m.toReadonlyArray(),
        expectArrayEquals([]),
      ),
    ),
    test(
      "with default count",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.takeFirst(),
        m.toReadonlyArray(),
        expectArrayEquals([1]),
      ),
    ),
    test(
      "when count is 0",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.takeFirst({ count: 0 }),
        m.toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
    ),
  );

export const takeLastTests = <C extends ContainerLike>(
  m: TakeLast<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
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
  );

export const takeWhileTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & TakeWhile<C> & ToReadonlyArray<C>,
) =>
  describe(
    "takeWhile",
    test("exclusive", () => {
      pipe(
        [1, 2, 3, 4, 5],
        m.fromReadonlyArray(),
        m.takeWhile(x => x < 4),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        [1, 2, 3],
        m.fromReadonlyArray(),
        m.takeWhile<number>(alwaysTrue),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      );
      pipe(
        [],
        m.fromReadonlyArray(),
        m.takeWhile<number>(alwaysTrue),
        m.toReadonlyArray(),
        expectArrayEquals(ReadonlyArray.empty()),
      );
    }),
    test(
      "inclusive",
      pipeLazy(
        [1, 2, 3, 4, 5, 6],
        m.fromReadonlyArray(),
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
          m.fromReadonlyArray(),
          m.takeWhile(predicate),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const throwIfEmptyTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ThrowIfEmpty<C> & ToReadonlyArray<C>,
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
          m.toReadonlyArray(),
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
          m.toReadonlyArray(),
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
        m.toReadonlyArray(),
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
    const scheduler = Scheduler.createHostScheduler();

    // FIXME: This should be a generic test
    try {
      const result = await pipe(
        [0, 1, 2, 3, 4],
        m.fromReadonlyArray(),
        m.toObservable<number>(),
        Observable.buffer(),
        Observable.toPromise(scheduler),
      );

      pipe(result, expectArrayEquals([0, 1, 2, 3, 4]));
    } finally {
      pipe(scheduler, Disposable.dispose());
    }
  });

export const toRunnableObservableTests = <C extends ContainerLike>(
  m: FromReadonlyArray<C> & ToRunnableObservable<C>,
) =>
  describe(
    "toRunnableObservable",
    test(
      "without delay",
      pipeLazy(
        [1, 2, 3, 4, 5],
        m.fromReadonlyArray(),
        m.toRunnableObservable(),
        RunnableObservable.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4, 5]),
      ),
    ),
    test(
      "with delay",
      pipeLazy(
        [9, 9, 9, 9],
        m.fromReadonlyArray(),
        m.toRunnableObservable({ delay: 1 }),
        RunnableObservable.map(_ => __now()),
        RunnableObservable.toReadonlyArray(),
        expectArrayEquals([0, 1, 2, 3]),
      ),
    ),
  );

export const zipTests = <C extends ContainerLike>(
  m: Zip<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
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
  );

export const zipWithTests = <C extends ContainerLike>(
  m: Zip<C> & FromReadonlyArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "zipWith",
    test(
      "when inputs are different lengths",
      pipeLazy(
        [1, 2, 3],
        m.fromReadonlyArray(),
        Container.zipWith<C, number, number>(
          m,
          pipe([1, 2, 3, 4], m.fromReadonlyArray()),
        ),
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
  );

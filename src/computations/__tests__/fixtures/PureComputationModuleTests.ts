import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrowError,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  ComputationOf,
  PureComputationModule,
} from "../../../computations.js";
import * as Observable from "../../../concurrent/Observable.js";
import {
  Function1,
  Tuple2,
  alwaysTrue,
  arrayEquality,
  greaterThan,
  increment,
  lessThan,
  pipe,
  pipeLazy,
  returns,
} from "../../../functions.js";

const PureComputationModuleTests = <C extends Computation>(
  m: PureComputationModule<C>,
  fromReadonlyArray: <T>() => Function1<ReadonlyArray<T>, ComputationOf<C, T>>,
  toReadonlyArray: <T>() => Function1<ComputationOf<C, T>, ReadonlyArray<T>>,
) =>
  describe(
    "PureComputationModule",
    describe(
      "buffer",
      test(
        "with multiple sub buffers",
        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          fromReadonlyArray(),
          m.buffer({ count: 3 }),
          toReadonlyArray(),
          expectArrayEquals<readonly number[]>(
            [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9],
            ],
            { valuesEquality: arrayEquality() },
          ),
        ),
      ),
      test(
        "last buffer is short",
        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8],
          fromReadonlyArray(),
          m.buffer({ count: 3 }),
          toReadonlyArray(),
          expectArrayEquals<readonly number[]>(
            [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8],
            ],
            { valuesEquality: arrayEquality() },
          ),
        ),
      ),
    ),
    describe(
      "decodeWithCharset",
      test("decoding ascii from runnable", () => {
        const str = "abcdefghijklmnsopqrstuvwxyz";

        pipe(
          [str],
          Observable.fromReadonlyArray({ delay: 1 }),
          Observable.encodeUtf8(),
          Observable.toReadonlyArray(),
          fromReadonlyArray(),
          m.decodeWithCharset(),
          toReadonlyArray(),
          x => x.join(),
          expectEquals(str),
        );
      }),
      test("decoding ascii from enumerable", () => {
        const str = "abcdefghijklmnsopqrstuvwxyz";

        pipe(
          [str],
          Observable.fromReadonlyArray(),
          Observable.encodeUtf8(),
          Observable.toReadonlyArray(),
          fromReadonlyArray(),
          m.decodeWithCharset(),
          toReadonlyArray(),
          x => x.join(),
          expectEquals(str),
        );
      }),
      test("decoding multi-byte code points", () => {
        const str = String.fromCodePoint(8364);
        pipe(
          [str],
          Observable.fromReadonlyArray(),
          Observable.encodeUtf8(),
          Observable.toReadonlyArray(),
          fromReadonlyArray(),
          m.decodeWithCharset(),
          toReadonlyArray(),
          x => x.join(),
          expectEquals(str),
        );
      }),
    ),
    describe(
      "distinctUntilChanged",
      test(
        "when source has duplicates in order",
        pipeLazy(
          [1, 2, 2, 2, 2, 3, 3, 3, 4],
          fromReadonlyArray(),
          m.distinctUntilChanged(),
          toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 4]),
        ),
      ),
      test(
        "when source is empty",
        pipeLazy(
          [],
          fromReadonlyArray(),
          m.distinctUntilChanged(),
          toReadonlyArray(),
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
            fromReadonlyArray(),
            m.distinctUntilChanged({ equality }),
            toReadonlyArray(),
          ),
          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "keep",
      test(
        "keeps only values greater than 5",
        pipeLazy(
          [4, 8, 10, 7],
          fromReadonlyArray(),
          m.keep(greaterThan(5)),
          toReadonlyArray(),
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
            fromReadonlyArray(),
            m.keep(predicate),
            toReadonlyArray(),
          ),

          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "map",
      test(
        "maps every value",

        pipeLazy(
          [1, 2, 3],
          fromReadonlyArray(),
          m.map(increment),
          toReadonlyArray(),
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
            fromReadonlyArray(),
            m.map(selector),
            toReadonlyArray(),
          ),

          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "pairwise",
      test(
        "when there are more than one input value",
        pipeLazy(
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          fromReadonlyArray(),
          m.pairwise<number>(),
          toReadonlyArray<Tuple2<number, number>>(),
          expectArrayEquals<Tuple2<number, number>>(
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
            { valuesEquality: arrayEquality() },
          ),
        ),
      ),
      test(
        "when the input only provides 1 value",
        pipeLazy(
          [0],
          fromReadonlyArray(),
          m.pairwise<number>(),
          toReadonlyArray(),
          expectArrayEquals<Tuple2<number, number>>([], {
            valuesEquality: arrayEquality(),
          }),
        ),
      ),
    ),
    describe(
      "scan",
      test(
        "sums all the values in the array emitting intermediate values.",
        pipeLazy(
          [1, 1, 1],
          fromReadonlyArray(),
          m.scan<number, number>((a, b) => a + b, returns(0)),
          toReadonlyArray(),
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
            fromReadonlyArray(),
            m.scan(scanner, returns(0)),
            toReadonlyArray(),
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
            fromReadonlyArray(),
            m.scan((a, b) => a + b, initialValue),
            toReadonlyArray(),
          ),
          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "skipFirst",
      test(
        "with default count",
        pipeLazy(
          [1, 2, 3],
          fromReadonlyArray(),
          m.skipFirst(),
          toReadonlyArray(),
          expectArrayEquals([2, 3]),
        ),
      ),
    ),
    test(
      "when skipped source has additional elements",
      pipeLazy(
        [1, 2, 3],
        fromReadonlyArray(),
        m.skipFirst({ count: 2 }),
        toReadonlyArray(),
        expectArrayEquals([3]),
      ),
    ),
    test(
      "when all elements are skipped",
      pipeLazy(
        [1, 2, 3],
        fromReadonlyArray(),
        m.skipFirst({ count: 4 }),
        toReadonlyArray(),
        expectArrayEquals([] as number[]),
      ),
    ),
    describe(
      "takeFirst",
      test(
        "with default count",
        pipeLazy(
          [1, 2, 3, 4, 5],
          fromReadonlyArray(),
          m.takeFirst(),
          toReadonlyArray(),
          expectArrayEquals([1]),
        ),
      ),
      test(
        "when taking fewer than the total number of elements in the source",
        pipeLazy(
          [1, 2, 3, 4, 5],
          fromReadonlyArray(),
          m.takeFirst({ count: 3 }),
          toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      test(
        "when taking more than all the items produced by the source",
        pipeLazy(
          [1, 2],
          fromReadonlyArray(),
          m.takeFirst({ count: 3 }),
          toReadonlyArray(),
          expectArrayEquals([1, 2]),
        ),
      ),
      test(
        "when source is empty",
        pipeLazy(
          [],
          fromReadonlyArray(),
          m.takeFirst({ count: 3 }),
          toReadonlyArray(),
          expectArrayEquals([]),
        ),
      ),
      test(
        "with default count",
        pipeLazy(
          [1, 2, 3],
          fromReadonlyArray(),
          m.takeFirst(),
          toReadonlyArray(),
          expectArrayEquals([1]),
        ),
      ),
      test(
        "when count is 0",
        pipeLazy(
          [1, 2, 3],
          fromReadonlyArray(),
          m.takeFirst({ count: 0 }),
          toReadonlyArray(),
          expectArrayEquals([] as number[]),
        ),
      ),
    ),
    describe(
      "takeWhile",
      test("exclusive", () => {
        pipe(
          [1, 2, 3, 4, 5],
          fromReadonlyArray(),
          m.takeWhile(lessThan(4)),
          toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        );

        pipe(
          [1, 2, 3],
          fromReadonlyArray(),
          m.takeWhile<number>(alwaysTrue),
          toReadonlyArray(),
          expectArrayEquals([1, 2, 3]),
        );

        pipe(
          [],
          fromReadonlyArray(),
          m.takeWhile<number>(alwaysTrue),
          toReadonlyArray(),
          expectArrayEquals([] as number[]),
        );
      }),
      test(
        "inclusive",
        pipeLazy(
          [1, 2, 3, 4, 5, 6],
          fromReadonlyArray(),
          m.takeWhile(lessThan(4), { inclusive: true }),
          toReadonlyArray(),
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
            fromReadonlyArray(),
            m.takeWhile(predicate),
            toReadonlyArray(),
          ),
          expectToThrowError(err),
        );
      }),
    ),
  );

export default PureComputationModuleTests;

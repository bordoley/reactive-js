import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrow,
  expectToThrowError,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  DeferredComputationModule,
  PureStatefulComputationModule,
  SynchronousComputationModule,
} from "../../../computations.js";
import * as Observable from "../../../concurrent/Observable.js";
import {
  Tuple2,
  alwaysTrue,
  arrayEquality,
  increment,
  none,
  pipe,
  pipeLazy,
  raise,
  returns,
  tuple,
} from "../../../functions.js";

const PureStatefulComputationModuleTests = <C extends Computation>(
  m: PureStatefulComputationModule<C> &
    DeferredComputationModule<C> &
    SynchronousComputationModule<C>,
) =>
  describe(
    "PureStatefulComputationModule",
    describe(
      "buffer",
      test(
        "with multiple sub buffers",
        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray(),
          m.buffer({ count: 3 }),
          m.toReadonlyArray(),
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
          m.fromReadonlyArray(),
          m.buffer({ count: 3 }),
          m.toReadonlyArray(),
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
      test(
        "buffers all values when no count is provided",
        pipeLazy(
          [1, 2, 3, 4, 5, 6, 7, 8],
          m.fromReadonlyArray(),
          m.buffer(),
          m.toReadonlyArray(),
          expectArrayEquals<readonly number[]>([[1, 2, 3, 4, 5, 6, 7, 8]], {
            valuesEquality: arrayEquality(),
          }),
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
          m.fromReadonlyArray(),
          m.decodeWithCharset(),
          m.toReadonlyArray(),
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
          m.fromReadonlyArray(),
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
          Observable.fromReadonlyArray(),
          Observable.encodeUtf8(),
          Observable.toReadonlyArray(),
          m.fromReadonlyArray(),
          m.decodeWithCharset(),
          m.toReadonlyArray(),
          x => x.join(),
          expectEquals(str),
        );
      }),
      test("multi-byte decoding divided between multiple buffers", () => {
        pipe(
          [new Uint8Array([226, 153]), new Uint8Array([165])],
          m.fromReadonlyArray(),
          m.decodeWithCharset(),
          m.toReadonlyArray(),
          x => x.join(),
          expectEquals("♥"),
        );
      }),
      test("multi-byte decoding with missing tail", () => {
        pipe(
          [new Uint8Array([226])],
          m.fromReadonlyArray(),
          m.decodeWithCharset(),
          m.toReadonlyArray(),
          x => x.join(),
          expectEquals("�"),
        );
      }),
    ),
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
      test(
        "with custom equality functions",
        pipeLazy(
          [1, 2, 2, 2, 2, 3, 3, 3, 4],
          m.fromReadonlyArray(),
          m.distinctUntilChanged({
            equality: () => true,
          }),
          m.toReadonlyArray(),
          expectArrayEquals([1]),
        ),
      ),
    ),
    describe(
      "pairwise",
      test(
        "when there are more than one input value",
        pipeLazy(
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          m.fromReadonlyArray(),
          m.pairwise<number>(),
          m.toReadonlyArray(),
          expectArrayEquals(
            [
              tuple(0, 1),
              tuple(1, 2),
              tuple(2, 3),
              tuple(3, 4),
              tuple(4, 5),
              tuple(5, 6),
              tuple(6, 7),
              tuple(7, 8),
              tuple(8, 9),
            ],
            { valuesEquality: arrayEquality() },
          ),
        ),
      ),
      test(
        "when the input only provides 1 value",
        pipeLazy(
          [0],
          m.fromReadonlyArray(),
          m.pairwise<number>(),
          m.toReadonlyArray(),
          expectArrayEquals<Tuple2<number, number>>([], {
            valuesEquality: arrayEquality(),
          }),
        ),
      ),
    ),
    describe(
      "retry",
      test(
        "retrys the container on an exception",
        pipeLazy(
          m.concat(m.generate(increment, returns(0), { count: 3 }), m.throws()),
          m.retry(alwaysTrue),
          m.takeFirst<number>({ count: 6 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
      test(
        "retrys with the default predicate",
        pipeLazy(
          m.concat(m.generate(increment, returns(0), { count: 3 }), m.throws()),
          m.retry(),
          m.takeFirst<number>({ count: 6 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
      test(
        "when source and the retry predicate throw",
        pipeLazy(
          pipeLazy(m.throws(), m.retry(raise), m.toReadonlyArray()),
          expectToThrow,
        ),
      ),

      test(
        "retrys only twice",
        pipeLazy(
          m.concat(m.generate(increment, returns(0), { count: 3 }), m.throws()),
          m.retry((count, _) => count < 2),
          m.takeFirst<number>({ count: 10 }),
          m.toReadonlyArray(),
          expectArrayEquals([1, 2, 3, 1, 2, 3]),
        ),
      ),
    ),
    describe(
      "scan",
      test(
        "sums all the values in the array emitting intermediate values.",
        pipeLazy(
          [1, 1, 1],
          m.fromReadonlyArray(),
          m.scan<number, number>((a, b) => a + b, returns(0)),
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
            m.scan((a, b) => a + b, initialValue),
            m.toReadonlyArray(),
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
          m.fromReadonlyArray(),
          m.skipFirst(),
          m.toReadonlyArray(),
          expectArrayEquals([2, 3]),
        ),
      ),
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
          expectArrayEquals([] as number[]),
        ),
      ),
    ),
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
          m.throwIfEmpty(returns(none)),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1]),
        ),
      ),
    ),
  );

export default PureStatefulComputationModuleTests;

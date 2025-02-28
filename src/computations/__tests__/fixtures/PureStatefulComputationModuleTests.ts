import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToHaveBeenCalledTimes,
  expectToThrowError,
  mockFn,
  test,
} from "../../../__internal__/testing.js";
import {
  Computation,
  ComputationWithSideEffectsLike,
  ComputationWithSideEffectsModule,
  DeferredComputationModule,
  PureStatefulComputationModule,
  SynchronousComputationLike,
  SynchronousComputationModule,
} from "../../../computations.js";
import * as Observable from "../../../concurrent/Observable.js";
import {
  Tuple2,
  arrayEquality,
  pipe,
  pipeLazy,
  tuple,
} from "../../../functions.js";

const PureStatefulComputationModuleTests = <
  Type extends SynchronousComputationLike,
  TComputation extends Computation<Type>,
  TypeWithSideEffects extends ComputationWithSideEffectsLike & Type,
  TComputationWithSideEffects extends Computation<TypeWithSideEffects> &
    TComputation,
>(
  m: PureStatefulComputationModule<Type, TComputation> &
    DeferredComputationModule<Type, TComputation> &
    SynchronousComputationModule<Type, TComputation> &
    ComputationWithSideEffectsModule<
      Type,
      TComputation,
      TypeWithSideEffects,
      TComputationWithSideEffects
    >,
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
          m.empty<number>(),
          m.distinctUntilChanged(),
          m.toReadonlyArray(),
          expectArrayEquals<number>([]),
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
      "ignoreElements",
      test(
        "ignores all elements",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.ignoreElements<number>(),
          m.toReadonlyArray(),
          expectArrayEquals([] as number[]),
        ),
      ),
      test("invokes all side-effects", () => {
        const f = mockFn();

        pipe(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.forEach<number>(f),
          x => x,
          m.ignoreElements<number>(),
          m.toReadonlyArray(),
          expectArrayEquals([] as number[]),
        );

        pipe(f, expectToHaveBeenCalledTimes(3));
      }),
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
      "takeLast",
      test(
        "with default count",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeLast(),
          m.toReadonlyArray<number>(),
          expectArrayEquals([5]),
        ),
      ),
      test(
        "when count is 0",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          // Some implementations special case this
          m.takeLast({ count: 0 }),
          m.toReadonlyArray<number>(),
          expectArrayEquals([] as number[]),
        ),
      ),
      test(
        "when count is less than the total number of elements",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeLast({ count: 3 }),
          m.toReadonlyArray<number>(),
          expectArrayEquals([3, 4, 5]),
        ),
      ),
      test(
        "when count is greater than the total number of elements",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeLast({ count: 10 }),
          m.toReadonlyArray<number>(),
          expectArrayEquals([1, 2, 3, 4, 5]),
        ),
      ),
      test(
        "with default count",
        pipeLazy(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeLast(),
          m.toReadonlyArray<number>(),
          expectArrayEquals([5]),
        ),
      ),
    ),
  );

export default PureStatefulComputationModuleTests;

import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectFalse,
  expectIsNone,
  expectToThrowError,
  expectTrue,
  test,
} from "../../__internal__/testing.js";
import {
  Optional,
  alwaysFalse,
  alwaysTrue,
  arrayEquality,
  greaterThan,
  increment,
  lessThan,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import { Container, EnumeratorContainerTypeClass } from "../../types.js";

const EnumeratorContainerTypeClassTests = <C extends Container>(
  m: EnumeratorContainerTypeClass<C>,
) =>
  describe(
    "EnumeratorContainerTypeClass",
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
    ),
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
    ),

    describe(
      "keep",
      test(
        "keeps only values greater than 5",
        pipeLazy(
          [4, 8, 10, 7],
          m.fromReadonlyArray(),
          m.keep(greaterThan(5)),
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
            m.toReadonlyArray(),
          ),
          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "mapTo",
      test(
        "maps every value in the source to v",
        pipeLazy(
          [1, 2, 3],
          m.fromReadonlyArray(),
          m.mapTo(2),
          m.toReadonlyArray(),
          expectArrayEquals([2, 2, 2]),
        ),
      ),
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
          m.toReadonlyArray(),
          expectArrayEquals<readonly [number, number]>([], arrayEquality()),
        ),
      ),
    ),
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
          m.first(),
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
          m.first(),
          expectEquals<Optional<string>>("value"),
        );
      }),
      test("with array", () => {
        const obj = [1, 2, 3, 4, 5, 6];

        pipe(
          obj,
          m.fromOptional(),
          m.pick(3),
          m.first(),
          expectEquals<Optional<number>>(4),
        );
      }),
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
      "takeWhile",
      test("exclusive", () => {
        pipe(
          [1, 2, 3, 4, 5],
          m.fromReadonlyArray(),
          m.takeWhile(lessThan(4)),
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
          expectArrayEquals([] as number[]),
        );
      }),
      test(
        "inclusive",
        pipeLazy(
          [1, 2, 3, 4, 5, 6],
          m.fromReadonlyArray(),
          m.takeWhile(lessThan(4), { inclusive: true }),
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

export default EnumeratorContainerTypeClassTests;

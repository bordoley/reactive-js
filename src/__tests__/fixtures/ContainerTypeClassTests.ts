import * as Disposable from "../../Disposable.js";
import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../../__internal__/testing.js";
import {
  Function1,
  alwaysTrue,
  arrayEquality,
  greaterThan,
  increment,
  lessThan,
  pipe,
  returns,
} from "../../functions.js";
import {
  Container,
  ContainerOf,
  ContainerTypeClass,
  DisposableLike,
} from "../../types.js";

const ContainerTypeClassTests = <
  C extends Container,
  TCtx extends DisposableLike,
>(
  m: ContainerTypeClass<C>,
  createCtx: () => TCtx,
  fromReadonlyArray: <T>(
    ctx: TCtx,
  ) => Function1<ReadonlyArray<T>, ContainerOf<C, T>>,
  toReadonlyArray: <T>(
    ctx: TCtx,
  ) => Function1<ContainerOf<C, T>, ReadonlyArray<T>>,
) =>
  describe(
    "ContainerTypeClass",
    describe(
      "buffer",
      test(
        "with multiple sub buffers",
        Disposable.usingLazy(createCtx)(ctx =>
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            fromReadonlyArray(ctx),
            m.buffer({ count: 3 }),
            toReadonlyArray(ctx),
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
      ),

      test(
        "last buffer is short",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8],
            fromReadonlyArray(ctx),
            m.buffer({ count: 3 }),
            toReadonlyArray(ctx),
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
    ),

    describe(
      "distinctUntilChanged",
      test(
        "when source has duplicates in order",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 2, 2, 2, 3, 3, 3, 4],
            fromReadonlyArray(ctx),
            m.distinctUntilChanged(),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 3, 4]),
          ),
        ),
      ),
      test(
        "when source is empty",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [],
            fromReadonlyArray(ctx),
            m.distinctUntilChanged(),
            toReadonlyArray(ctx),
            expectArrayEquals([]),
          ),
        ),
      ),
      test("when equality operator throws", () => {
        const err = new Error();
        const equality = <T>(_a: T, _b: T): boolean => {
          throw err;
        };

        pipe(
          Disposable.usingLazy(createCtx)((ctx: TCtx) =>
            pipe(
              [1, 1],
              fromReadonlyArray(ctx),
              m.distinctUntilChanged({ equality }),
              toReadonlyArray(ctx),
            ),
          ),
          expectToThrowError(err),
        );
      }),
    ),

    describe(
      "forEach",
      test("invokes the effect for each notified value", () => {
        const result: number[] = [];
        Disposable.using(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3],
            fromReadonlyArray(ctx),
            m.forEach(x => {
              result.push(x + 10);
            }),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 3]),
          ),
        );

        pipe(result, expectArrayEquals([11, 12, 13]));
      }),

      test("when the effect function throws", () => {
        const err = new Error();
        pipe(
          Disposable.usingLazy(createCtx)((ctx: TCtx) =>
            pipe(
              [1, 1],
              fromReadonlyArray(ctx),
              m.forEach(_ => {
                throw err;
              }),
              toReadonlyArray(ctx),
            ),
          ),
          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "ignoreElements",
      test(
        "ignores all elements",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3],
            fromReadonlyArray(ctx),
            m.ignoreElements<number>(),
            toReadonlyArray(ctx),
            expectArrayEquals([] as number[]),
          ),
        ),
      ),
    ),
    describe(
      "keep",
      test(
        "keeps only values greater than 5",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [4, 8, 10, 7],
            fromReadonlyArray(ctx),
            m.keep(greaterThan(5)),
            toReadonlyArray(ctx),
            expectArrayEquals([8, 10, 7]),
          ),
        ),
      ),
      test("when predicate throws", () => {
        const err = new Error();
        const predicate = <T>(_a: T): boolean => {
          throw err;
        };

        pipe(
          Disposable.usingLazy(createCtx)((ctx: TCtx) =>
            pipe(
              [1, 1],
              fromReadonlyArray(ctx),
              m.keep(predicate),
              toReadonlyArray(ctx),
            ),
          ),
          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "map",
      test(
        "maps every value",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3],
            fromReadonlyArray(ctx),
            m.map(increment),
            toReadonlyArray(ctx),
            expectArrayEquals([2, 3, 4]),
          ),
        ),
      ),
      test("when selector throws", () => {
        const err = new Error();
        const selector = <T>(_a: T): boolean => {
          throw err;
        };

        pipe(
          Disposable.usingLazy(createCtx)((ctx: TCtx) =>
            pipe(
              [1, 1],
              fromReadonlyArray(ctx),
              m.map(selector),
              toReadonlyArray(ctx),
            ),
          ),
          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "mapTo",
      test(
        "maps every value in the source to v",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3],
            fromReadonlyArray(ctx),
            m.mapTo(2),
            toReadonlyArray(ctx),
            expectArrayEquals([2, 2, 2]),
          ),
        ),
      ),
    ),
    describe(
      "pairwise",
      test(
        "when there are more than one input value",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            fromReadonlyArray(ctx),
            m.pairwise<number>(),
            toReadonlyArray<readonly [number, number]>(ctx),
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
      ),
      test(
        "when the input only provides 1 value",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [0],
            fromReadonlyArray(ctx),
            m.pairwise<number>(),
            toReadonlyArray(ctx),
            expectArrayEquals<readonly [number, number]>([], arrayEquality()),
          ),
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

        Disposable.using(createCtx)((ctx: TCtx) =>
          pipe(
            [obj],
            fromReadonlyArray(ctx),
            m.pick(keyA, keyB),
            toReadonlyArray<string>(ctx),
            expectArrayEquals<string>(["value"]),
          ),
        );
      }),
      test("with object and string keys", () => {
        const obj = {
          keyA: {
            keyB: "value",
          },
        };
        Disposable.using(createCtx)((ctx: TCtx) =>
          pipe(
            [obj],
            fromReadonlyArray(ctx),
            m.pick("keyA", "keyB"),
            toReadonlyArray<string>(ctx),
            expectArrayEquals<string>(["value"]),
          ),
        );
      }),
      test("with array", () => {
        const obj: readonly [number, number, number, number, number, number] = [
          1, 2, 3, 4, 5, 6,
        ];

        Disposable.using(createCtx)((ctx: TCtx) =>
          pipe(
            [obj],
            fromReadonlyArray<
              readonly [number, number, number, number, number, number]
            >(ctx),
            m.pick(3),
            toReadonlyArray<number>(ctx),
            expectArrayEquals<number>([4]),
          ),
        );
      }),
    ),
    describe(
      "scan",
      test(
        "sums all the values in the array emitting intermediate values.",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 1, 1],
            fromReadonlyArray(ctx),
            m.scan<number, number>((a, b) => a + b, returns(0)),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 3]),
          ),
        ),
      ),
      test("throws when the scan function throws", () => {
        const err = new Error();
        const scanner = <T>(_acc: T, _next: T): T => {
          throw err;
        };

        pipe(
          Disposable.usingLazy(createCtx)((ctx: TCtx) =>
            pipe(
              [1, 1],
              fromReadonlyArray(ctx),
              m.scan(scanner, returns(0)),
              toReadonlyArray(ctx),
            ),
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
          Disposable.usingLazy(createCtx)((ctx: TCtx) =>
            pipe(
              [1, 1],
              fromReadonlyArray(ctx),
              m.scan((a, b) => a + b, initialValue),
              toReadonlyArray(ctx),
            ),
          ),
          expectToThrowError(err),
        );
      }),
    ),
    describe(
      "skipFirst",
      test(
        "when skipped source has additional elements",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3],
            fromReadonlyArray(ctx),
            m.skipFirst({ count: 2 }),
            toReadonlyArray(ctx),
            expectArrayEquals([3]),
          ),
        ),
      ),
      test(
        "when all elements are skipped",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3],
            fromReadonlyArray(ctx),
            m.skipFirst({ count: 4 }),
            toReadonlyArray(ctx),
            expectArrayEquals([] as number[]),
          ),
        ),
      ),
    ),
    describe(
      "takeFirst",
      test(
        "when taking fewer than the total number of elements in the source",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3, 4, 5],
            fromReadonlyArray(ctx),
            m.takeFirst({ count: 3 }),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 3]),
          ),
        ),
      ),
      test(
        "when taking more than all the items produced by the source",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2],
            fromReadonlyArray(ctx),
            m.takeFirst({ count: 3 }),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2]),
          ),
        ),
      ),
      test(
        "when source is empty",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [],
            fromReadonlyArray(ctx),
            m.takeFirst({ count: 3 }),
            toReadonlyArray(ctx),
            expectArrayEquals([]),
          ),
        ),
      ),
      test(
        "with default count",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3],
            fromReadonlyArray(ctx),
            m.takeFirst(),
            toReadonlyArray(ctx),
            expectArrayEquals([1]),
          ),
        ),
      ),
      test(
        "when count is 0",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3],
            fromReadonlyArray(ctx),
            m.takeFirst({ count: 0 }),
            toReadonlyArray(ctx),
            expectArrayEquals([] as number[]),
          ),
        ),
      ),
    ),
    describe(
      "takeLast",
      test(
        "when count is less than the total number of elements",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3, 4, 5],
            fromReadonlyArray(ctx),
            m.takeLast({ count: 3 }),
            toReadonlyArray(ctx),
            expectArrayEquals([3, 4, 5]),
          ),
        ),
      ),
      test(
        "when count is greater than the total number of elements",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3, 4, 5],
            fromReadonlyArray(ctx),
            m.takeLast({ count: 10 }),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 3, 4, 5]),
          ),
        ),
      ),
      test(
        "with default count",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3, 4, 5],
            fromReadonlyArray(ctx),
            m.takeLast(),
            toReadonlyArray(ctx),
            expectArrayEquals([5]),
          ),
        ),
      ),
    ),
    describe(
      "takeWhile",
      test("exclusive", () => {
        Disposable.using(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3, 4, 5],
            fromReadonlyArray(ctx),
            m.takeWhile(lessThan(4)),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 3]),
          ),
        );

        Disposable.using(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3],
            fromReadonlyArray(ctx),
            m.takeWhile<number>(alwaysTrue),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 3]),
          ),
        );

        Disposable.using(createCtx)((ctx: TCtx) =>
          pipe(
            [],
            fromReadonlyArray(ctx),
            m.takeWhile<number>(alwaysTrue),
            toReadonlyArray(ctx),
            expectArrayEquals([] as number[]),
          ),
        );
      }),
      test(
        "inclusive",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 3, 4, 5, 6],
            fromReadonlyArray(ctx),
            m.takeWhile(lessThan(4), { inclusive: true }),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 3, 4]),
          ),
        ),
      ),
      test("when predicate throws", () => {
        const err = new Error();
        const predicate = (_: unknown): boolean => {
          throw err;
        };

        pipe(
          Disposable.usingLazy(createCtx)((ctx: TCtx) =>
            pipe(
              [1, 1],
              fromReadonlyArray(ctx),
              m.takeWhile(predicate),
              toReadonlyArray(ctx),
            ),
          ),
          expectToThrowError(err),
        );
      }),
    ),
  );

export default ContainerTypeClassTests;

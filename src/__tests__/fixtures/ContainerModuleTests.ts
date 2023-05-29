import * as Disposable from "../../Disposable.js";
import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../../__internal__/testing.js";
import {
  Function1,
  greaterThan,
  increment,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import {
  Container,
  ContainerModule,
  ContainerOf,
  DisposableLike,
} from "../../types.js";

const ContainerModuleTests = <C extends Container, TCtx extends DisposableLike>(
  m: ContainerModule<C>,
  createCtx: () => TCtx,
  fromReadonlyArray: <T>(
    ctx: TCtx,
  ) => Function1<ReadonlyArray<T>, ContainerOf<C, T, number>>,
  toReadonlyArray: <T>(
    ctx: TCtx,
  ) => Function1<ContainerOf<C, T, number>, ReadonlyArray<T>>,
) =>
  describe(
    "ContainerModule",
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
      "keepType",
      test(
        "only keeps non-none values",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            [1, none, 3],
            fromReadonlyArray(ctx),
            m.keepType(isSome),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 3]),
          ),
        ),
      ),
    ),
    describe(
      "keepWithKey",
      test(
        "filters out entries by key",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            ["b", "d", "v"],
            fromReadonlyArray(ctx),
            m.keepWithKey((_, key) => key === 1),
            toReadonlyArray(ctx),
            expectArrayEquals(["d"]),
          ),
        ),
      ),
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
            fromReadonlyArray<number>(ctx),
            m.mapTo(2),
            toReadonlyArray(ctx),
            expectArrayEquals([2, 2, 2]),
          ),
        ),
      ),
    ),

    describe(
      "mapWithKey",
      test(
        "mapping every value to its key",
        Disposable.usingLazy(createCtx)((ctx: TCtx) =>
          pipe(
            ["b", "d", "f"],
            fromReadonlyArray(ctx),
            m.mapWithKey<string, number, number>((_, key) => key),
            x => x,
            toReadonlyArray(ctx),
            expectArrayEquals([0, 1, 2]),
          ),
        ),
      ),
    ),
  );

export default ContainerModuleTests;

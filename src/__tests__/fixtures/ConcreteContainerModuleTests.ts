import * as Disposable from "../../Disposable.js";
import {
  describe,
  expectArrayEquals,
  test,
} from "../../__internal__/testing.js";
import { Function1, none, pipe } from "../../functions.js";
import {
  ConcreteContainerModule,
  Container,
  ContainerOf,
  DisposableLike,
} from "../../types.js";
import ContainerModuleTests from "./ContainerModuleTests.js";

const ConcreteContainerModuleTests = <
  C extends Container,
  TCtx extends DisposableLike,
>(
  m: ConcreteContainerModule<C>,
  createCtx: () => TCtx,
  toReadonlyArray: <T>(
    ctx: TCtx,
  ) => Function1<ContainerOf<C, T>, ReadonlyArray<T>>,
) => [
  ContainerModuleTests(
    m,
    createCtx,
    <T>() => m.fromReadonlyArray<T>(),
    toReadonlyArray,
  ),
  describe(
    "ConcreteContainerModule",
    describe(
      "empty",
      test(
        "returns an empty enumerator",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            m.empty<number>(),
            toReadonlyArray(ctx),
            expectArrayEquals<number>([]),
          );
        }),
      ),
    ),
    describe(
      "fromFactory",
      test(
        "it produces the factory result",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            () => 1,
            m.fromFactory(),
            toReadonlyArray(ctx),
            expectArrayEquals([1]),
          );
        }),
      ),
    ),
    describe(
      "fromOptional",
      test(
        "when none",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            none,
            m.fromOptional(),
            toReadonlyArray<never>(ctx),
            expectArrayEquals([]),
          );
        }),
      ),
      test(
        "when some",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            1,
            m.fromOptional(),
            toReadonlyArray<number>(ctx),
            expectArrayEquals([1]),
          );
        }),
      ),
    ),
    describe(
      "fromReadonlyArray",
      test(
        "negative count with start index",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            m.fromReadonlyArray({ count: -3, start: 4 }),
            toReadonlyArray(ctx),
            expectArrayEquals([5, 4, 3]),
          );
        }),
      ),
      test(
        "positive count with start index",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            m.fromReadonlyArray({ count: 3, start: 4 }),
            toReadonlyArray(ctx),
            expectArrayEquals([5, 6, 7]),
          );
        }),
      ),
      test(
        "negative count exceeding bounds with start index",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            m.fromReadonlyArray({ count: -100, start: 3 }),
            toReadonlyArray(ctx),
            expectArrayEquals([4, 3, 2, 1]),
          );
        }),
      ),
      test(
        "positive count exceeding bounds with start index",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            m.fromReadonlyArray({ count: 100, start: 7 }),
            toReadonlyArray(ctx),
            expectArrayEquals([8, 9]),
          );
        }),
      ),
      test(
        "negative count without start index",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            m.fromReadonlyArray({ count: -3 }),
            toReadonlyArray(ctx),
            expectArrayEquals([9, 8, 7]),
          );
        }),
      ),
      test(
        "positive count without start index",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            m.fromReadonlyArray({ count: 3 }),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 3]),
          );
        }),
      ),
    ),
    describe(
      "fromValue",
      test(
        "it produces the value",
        Disposable.usingLazy(createCtx)(ctx => {
          pipe(
            none,
            m.fromValue(),
            toReadonlyArray(ctx),
            expectArrayEquals([none]),
          );
        }),
      ),
    ),
  ),
];

export default ConcreteContainerModuleTests;

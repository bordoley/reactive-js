import * as Disposable from "../../Disposable.js";
import * as EventSource from "../../EventSource.js";
import * as Scheduler from "../../Scheduler.js";
import * as Streamable from "../../Streamable.js";
import {
  describe,
  expectArrayEquals,
  expectToThrow,
  expectToThrowError,
  expectTrue,
  test,
} from "../../__internal__/testing.js";
import { Function1, pipe } from "../../functions.js";
import {
  Container,
  ContainerModule,
  ContainerOf,
  DispatcherLikeEvent_completed,
  DisposableLike,
  EffectsContainerModule,
  StreamableLike_stream,
} from "../../types.js";

const EffectsContainerModuleTests = <
  C extends Container,
  TCtx extends DisposableLike,
>(
  m: EffectsContainerModule<C> & ContainerModule<C>,
  createCtx: () => TCtx,
  fromReadonlyArray: <T>(
    ctx: TCtx,
  ) => Function1<ReadonlyArray<T>, ContainerOf<C, T>>,
  toReadonlyArray: <T>(
    ctx: TCtx,
  ) => Function1<ContainerOf<C, T>, ReadonlyArray<T>>,
) =>
  describe(
    "ContainerModule",
    describe(
      "dispatchTo",
      test("when backpressure exception is thrown", () => {
        const vts = Scheduler.createVirtualTimeScheduler();
        const stream = Streamable.identity()[StreamableLike_stream](vts, {
          backpressureStrategy: "throw",
          capacity: 1,
        });

        expectToThrow(
          Disposable.usingLazy(createCtx)((ctx: TCtx) =>
            pipe(
              [1, 2, 2, 2, 2, 3, 3, 3, 4],
              fromReadonlyArray(ctx),
              m.dispatchTo<number>(stream),
              toReadonlyArray(ctx),
            ),
          ),
        );
      }),
      test("when completed successfully", () => {
        const vts = Scheduler.createVirtualTimeScheduler();
        const stream = Streamable.identity()[StreamableLike_stream](vts, {
          backpressureStrategy: "overflow",
          capacity: 1,
        });

        let completed = false;

        pipe(
          stream,
          EventSource.addEventHandler(ev => {
            if (ev === DispatcherLikeEvent_completed) {
              completed = true;
            }
          }),
        );

        Disposable.using(createCtx)((ctx: TCtx) =>
          pipe(
            [1, 2, 2, 2, 2, 3, 3, 3, 4],
            fromReadonlyArray(ctx),
            m.dispatchTo<number>(stream),
            toReadonlyArray(ctx),
            expectArrayEquals([1, 2, 2, 2, 2, 3, 3, 3, 4]),
          ),
        );

        expectTrue(completed);
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
  );

export default EffectsContainerModuleTests;

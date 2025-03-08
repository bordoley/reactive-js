import {
  expectFalse,
  expectIsNone,
  expectIsSome,
  expectTrue,
} from "../../../../__internal__/testing.js";
import { ComputationLike } from "../../../../computations.js";
import { pipe } from "../../../../functions.js";
import {
  DisposableContainerLike_add,
  DisposableLike_dispose,
} from "../../../../utils.js";
import * as Computation from "../../../Computation.js";

const computationToTypeString = (x: ComputationLike) =>
  Computation.isPureSynchronous(x)
    ? "PureSynchronous"
    : Computation.isSynchronousWithSideEffects(x)
      ? "SynchronousWithSideEffects"
      : Computation.isPureDeferred(x)
        ? "PureDeferred"
        : Computation.isDeferredWithSideEffects(x)
          ? "DeferredWithSideEffects"
          : Computation.isMulticasted(x)
            ? "Multicasted"
            : "illegal state";

export const isPureSynchronous = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(
    x,
    Computation.isPureSynchronous<ComputationLike>,
    expectTrue(
      `expected PureSynchronous computation received ${computationToTypeString(x)}`,
    ),
  );
  return x;
};

export const isNotPureSynchronous = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(
    x,
    Computation.isPureSynchronous<ComputationLike>,
    expectFalse(
      `expected computation to not be PureSynchronousComputation received ${computationToTypeString(x)}`,
    ),
  );
  return x;
};

export const isSynchronousWithSideEffects = <
  TComputation extends ComputationLike,
>(
  x: TComputation,
) => {
  pipe(
    x,
    Computation.isSynchronousWithSideEffects<ComputationLike>,
    expectTrue(
      `expected SynchronousWithSideEffects computation received ${computationToTypeString(x)}`,
    ),
  );
  return x;
};

export const isNotSynchronousWithSideEffects = <
  TComputation extends ComputationLike,
>(
  x: TComputation,
) => {
  pipe(
    x,
    Computation.isSynchronousWithSideEffects<ComputationLike>,
    expectFalse(
      `expected computation not to be SynchronousWithSideEffects received ${computationToTypeString(x)}`,
    ),
  );
  return x;
};

export const isNotSynchronous = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(
    x,
    Computation.isSynchronous<ComputationLike>,
    expectFalse(
      `expected computation not to be Synchronous received ${computationToTypeString(x)}`,
    ),
  );
  return x;
};

export const isPureDeferred = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(
    x,
    Computation.isPureDeferred<ComputationLike>,
    expectTrue(
      `expected PureDeferred computation received ${computationToTypeString(x)}`,
    ),
  );
  return x;
};

export const isDeferredWithSideEffects = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(
    x,
    Computation.isDeferredWithSideEffects<ComputationLike>,
    expectTrue(
      `expected DeferredWithSideEffects computation received ${computationToTypeString(x)}`,
    ),
  );
  return x;
};

export const isMulticasted = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(
    x,
    Computation.isMulticasted<ComputationLike>,
    expectTrue(
      `expected Multicast computation received ${computationToTypeString(x)}`,
    ),
  );
  expectIsSome((x as any)[DisposableContainerLike_add]);
  return x;
};

export const isMulticastedAndNotDisposable = <
  TComputation extends ComputationLike,
>(
  x: TComputation,
) => {
  isMulticasted(x);

  expectIsNone((x as any)[DisposableLike_dispose]);
  return x;
};

export const isMulticastedAndDisposable = <
  TComputation extends ComputationLike,
>(
  x: TComputation,
) => {
  isMulticasted(x);

  expectIsSome((x as any)[DisposableLike_dispose]);
  return x;
};

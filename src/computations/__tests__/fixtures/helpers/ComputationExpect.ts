import { expectFalse, expectTrue } from "../../../../__internal__/testing.js";
import { ComputationLike } from "../../../../computations.js";
import { pipe } from "../../../../functions.js";
import * as Computation from "../../../Computation.js";

export const isPureSynchronous = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(x, Computation.isPureSynchronous<ComputationLike>, expectTrue);
  return x;
};

export const isNotPureSynchronous = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(x, Computation.isPureSynchronous<ComputationLike>, expectFalse);
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
    expectTrue,
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
    expectFalse,
  );
  return x;
};

export const isNotSynchronous = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(x, Computation.isSynchronous<ComputationLike>, expectFalse);
  return x;
};

export const isPureDeferred = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(x, Computation.isPureDeferred<ComputationLike>, expectTrue);
  return x;
};

export const isDeferredWithSideEffects = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(x, Computation.isDeferredWithSideEffects<ComputationLike>, expectTrue);
  return x;
};

export const isMulticasted = <TComputation extends ComputationLike>(
  x: TComputation,
) => {
  pipe(x, Computation.isMulticasted<ComputationLike>, expectTrue);
  return x;
};

import { expectTrue } from "../../../__internal__/testing.js";
import { ComputationLike } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Computation from "../../Computation.js";

export const isPureSynchronous = (x: ComputationLike) =>
  pipe(x, Computation.isPureSynchronous<ComputationLike>, expectTrue);

export const isSynchronousWithSideEffects = (x: ComputationLike) =>
  pipe(
    x,
    Computation.isSynchronousWithSideEffects<ComputationLike>,
    expectTrue,
  );

export const isPureDeferred = (x: ComputationLike) => {
  pipe(x, Computation.isPureDeferred<ComputationLike>, expectTrue);
  return x;
};

export const isDeferredWithSideEffects = (x: ComputationLike) => {
  pipe(x, Computation.isDeferredWithSideEffects<ComputationLike>, expectTrue);
  return x;
};

export const isMulticasted = (x: ComputationLike) => {
  pipe(x, Computation.isMulticasted<ComputationLike>, expectTrue);
  return x;
};

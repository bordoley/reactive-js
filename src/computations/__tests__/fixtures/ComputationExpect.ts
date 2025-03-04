import { expectTrue } from "../../../__internal__/testing.js";
import { ComputationLike } from "../../../computations.js";
import { compose } from "../../../functions.js";
import * as Computation from "../../Computation.js";

export const isPureSynchronous = compose(
  Computation.isPureSynchronous<ComputationLike>,
  expectTrue,
);

export const isSynchronousWithSideEffects = compose(
  Computation.isSynchronousWithSideEffects<ComputationLike>,
  expectTrue,
);

export const isPureDeferred = compose(
  Computation.isPureDeferred<ComputationLike>,
  expectTrue,
);

export const isDeferredWithSideEffects = compose(
  Computation.isDeferredWithSideEffects<ComputationLike>,
  expectTrue,
);

export const isMulticasted = compose(
  Computation.isMulticasted<ComputationLike>,
  expectTrue,
);

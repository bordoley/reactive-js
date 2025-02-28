/// <reference types="./computations.d.ts" />

import { increment, pickUnsafe, returns, } from "./functions.js";
export const Computation_T = Symbol("Computation_T");
export const Computation_type = Symbol("Computation_type");
export const ComputationLike_isPure = Symbol("ComputationLike_isPure");
export const ComputationLike_isDeferred = Symbol("ComputationLike_isDeferred");
export const ComputationLike_isSynchronous = Symbol("ComputationLike_isSynchronous");
export const SinkLike_next = Symbol("SinkLike_next");
export const SinkLike_complete = Symbol("SinkLike_complete");
export const SinkLike_isComplete = Symbol("SinkLike_isComplete");
export const DeferableLike_eval = Symbol("DeferableLike_eval");
export const keepType = ((keep) => (predicate) => keep(predicate));
export const mapTo = (map) => (v) => map(returns(v));
export const pick = ((map) => (...keys) => map(pickUnsafe(...keys)));
export const sequence = (generate) => (start) => generate(increment, returns(start - 1));

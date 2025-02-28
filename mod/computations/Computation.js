/// <reference types="./Computation.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../computations.js";
import { increment, pickUnsafe, returns } from "../functions.js";
export const isDeferred = (computation) => computation[ComputationLike_isDeferred] ?? true;
export const isMulticasted = (computation) => !(computation[ComputationLike_isDeferred] ?? true) &&
    (computation[ComputationLike_isPure] ?? true) &&
    !(computation[ComputationLike_isSynchronous] ?? true);
export const isPure = (computation) => computation[ComputationLike_isPure] ?? true;
export const isSynchronous = (computation) => (computation[ComputationLike_isSynchronous] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true);
export const keepType = ((keep) => (predicate) => keep(predicate));
export const mapTo = (map) => (v) => map(returns(v));
export const pick = ((map) => (...keys) => map(pickUnsafe(...keys)));
export const sequence = (generate) => (start) => generate(increment, returns(start - 1));

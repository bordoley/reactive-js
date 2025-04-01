/// <reference types="./Computation.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ComputationModuleLike_computationType, } from "../computations.js";
import { raise as Functions_raise, error, identityLazy, memoize, pipe, } from "../functions.js";
import Computation_areAllPure from "./Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "./Computation/__private__/Computation.areAllSynchronous.js";
import Computation_concatWith from "./Computation/__private__/Computation.concatWith.js";
import Computation_empty from "./Computation/__private__/Computation.empty.js";
import Computation_endWith from "./Computation/__private__/Computation.endWith.js";
import Computation_fromReadonlyArray from "./Computation/__private__/Computation.fromReadonlyArray.js";
import Computation_isDeferred from "./Computation/__private__/Computation.isDeferred.js";
import Computation_isPure from "./Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "./Computation/__private__/Computation.isSynchronous.js";
import Computation_startWith from "./Computation/__private__/Computation.startWith.js";
export const areAllPure = Computation_areAllPure;
export const areAllSynchronous = Computation_areAllSynchronous;
export const concatWith = Computation_concatWith;
export const empty = Computation_empty;
export const endWith = Computation_endWith;
export const fromReadonlyArray = Computation_fromReadonlyArray;
export const isDeferred = Computation_isDeferred;
export const isPure = Computation_isPure;
export const isSynchronous = Computation_isSynchronous;
export const makeModule = identityLazy;
export const mergeWith = /*@__PURE__*/ (() => memoize((m) => (...tail) => (fst) => m.merge(fst, ...tail)))();
export const raise = /*@__PURE__*/ memoize(m => (options) => m.genPure(function* RaiseComputation() {
    const { raise: factory = Functions_raise } = options ?? {};
    pipe(factory(), error, Functions_raise);
}));
export const startWith = Computation_startWith;

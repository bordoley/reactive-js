/// <reference types="./Computation.d.ts" />

import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../computations.js";
import { bindMethod, memoize, returns } from "../functions.js";
export const areAllPure = (computations) => computations.every(isPure);
export const areAllSynchronous = (computations) => computations.every(isSynchronous);
export const empty = /*@__PURE__*/ memoize(m => returns(m.genPure(bindMethod([], Symbol.iterator))));
export const fromReadonlyArray = 
/*@__PURE__*/ memoize(m => (options) => (array) => m.genPure(function* ComputationFromReadonlyArray() {
    let [start, count] = parseArrayBounds(array, options);
    while (count !== 0) {
        yield array[start];
        count > 0 ? (start++, count--) : (start--, count++);
    }
}, options));
export const isPure = (computation) => computation[ComputationLike_isPure] ?? true;
export const isSynchronous = (computation) => computation[ComputationLike_isSynchronous] ?? true;
export const mergeWith = /*@__PURE__*/ memoize(m => (...tail) => (fst) => m.merge(fst, ...tail));

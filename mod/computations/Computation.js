/// <reference types="./Computation.d.ts" />

import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../computations.js";
import { raise as Functions_raise, bindMethod, error, memoize, pipe, returns, } from "../functions.js";
export const areAllPure = (computations) => computations.every(isPure);
export const areAllSynchronous = (computations) => computations.every(isSynchronous);
export const concatWith = /*@__PURE__*/ memoize(m => (...tail) => (fst) => m.concat(fst, ...tail));
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
export const raise = /*@__PURE__*/ memoize(m => (options) => m.genPure(function* RaiseComputation() {
    const { raise: factory = Functions_raise } = options ?? {};
    pipe(factory(), error, Functions_raise);
}));

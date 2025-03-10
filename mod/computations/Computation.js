/// <reference types="./Computation.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../computations.js";
import { alwaysFalse, bindMethod, debug as breakPoint, compose, log as consoleLog, newInstance, pickUnsafe, pipe, returns, } from "../functions.js";
import { increment } from "../math.js";
import { EventListenerLike_notify } from "../utils.js";
const memoizeF = (makeFunction) => {
    const cache = newInstance(WeakMap);
    return (m) => cache.get(m) ??
        (() => {
            const f = makeFunction(m);
            cache.set(m, f);
            return f;
        })();
};
export const areAllDeferred = (computations) => computations.every(isDeferred);
export const areAllMulticasted = (computations) => computations.every(isMulticasted);
export const areAllPure = (computations) => computations.every(isPure);
export const areAllSynchronous = (computations) => computations.every(isSynchronous);
export const concatMap = /*@__PURE__*/ memoizeF(m => flatMap(m, "concatAll"));
export const concatMapIterable = 
/*@__PURE__*/ memoizeF(m => flatMapIterable(m, "concatAll"));
export const concatMany = /*@__PURE__*/ memoizeF(m => (computations) => m.concat(...computations));
export const concatWith = /*@__PURE__*/ memoizeF(m => (...tail) => (fst) => m.concat(fst, ...tail));
export const debug = /*@__PURE__*/ memoizeF(m => () => m.forEach(breakPoint));
export const endWith = /*@__PURE__*/ memoizeF(m => (...values) => concatWith(m)(m.fromReadonlyArray()(values)));
export const flatMap = ((m, flatten) => (selector, options) => compose((x) => x, m.map(selector), m[flatten](options)));
export const flatMapIterable = ((m, flatten) => (selector, options) => {
    const mapper = compose(selector, m.fromIterable());
    return flatMap(m, flatten)(mapper, options);
});
export const hasSideEffects = (computation) => !(computation[ComputationLike_isPure] ?? true);
export const ignoreElements = 
/*@__PURE__*/ memoizeF(m => () => m.keep(alwaysFalse));
export const isDeferred = (computation) => computation[ComputationLike_isDeferred] ?? true;
export const isDeferredWithSideEffects = (computation) => (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);
export const isMulticasted = (computation) => !(computation[ComputationLike_isDeferred] ?? true) &&
    (computation[ComputationLike_isPure] ?? true) &&
    !(computation[ComputationLike_isSynchronous] ?? true);
export const isPure = (computation) => computation[ComputationLike_isPure] ?? true;
export const isPureDeferred = (computation) => (computation[ComputationLike_isPure] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true);
export const isPureSynchronous = (computation) => (computation[ComputationLike_isPure] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true) &&
    (computation[ComputationLike_isSynchronous] ?? true);
export const isSynchronous = (computation) => (computation[ComputationLike_isSynchronous] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true);
export const isSynchronousWithSideEffects = (computation) => (computation[ComputationLike_isSynchronous] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);
export const keepType = /*@__PURE__*/ memoizeF(m => (predicate) => m.keep(predicate));
export const log = /*@__PURE__*/ memoizeF(m => () => m.forEach(consoleLog));
export const mapTo = /*@__PURE__*/ memoizeF(m => (v) => m.map(returns(v)));
export const mergeMany = /*@__PURE__*/ memoizeF(m => (computations) => m.merge(...computations));
export const mergeWith = /*@__PURE__*/ memoizeF(m => (...tail) => (fst) => m.merge(fst, ...tail));
export const notify = /*@__PURE__*/ memoizeF(m => (eventListener) => m.forEach(bindMethod(eventListener, EventListenerLike_notify)));
export const pick = /*@__PURE__*/ memoizeF(m => (...keys) => m.map(pickUnsafe(...keys)));
export const sequence = /*@__PURE__*/ memoizeF(m => (start) => m.generate(increment, returns(start - 1)));
export const startWith = /*@__PURE__*/ memoizeF(m => (...values) => (computation) => pipe(m.fromReadonlyArray()(values), concatWith(m)(computation)));

/// <reference types="./Computation.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, DeferredComputationWithSideEffects, } from "../computations.js";
import { alwaysFalse, bindMethod, debug as breakPoint, compose, log as consoleLog, memoize, pickUnsafe, pipe, returns, } from "../functions.js";
import { increment } from "../math.js";
import { EventListenerLike_notify } from "../utils.js";
export const areAllDeferred = (computations) => computations.every(isDeferred);
export const areAllMulticasted = (computations) => computations.every(isMulticasted);
export const areAllPure = (computations) => computations.every(isPure);
export const areAllSynchronous = (computations) => computations.every(isSynchronous);
export const concatMap = /*@__PURE__*/ memoize(m => (selector, options) => flatMap(m)("concatAll", selector, options));
export const concatMapIterable = 
/*@__PURE__*/
(() => memoize((m) => (selector, options) => flatMapIterable(m)("concatAll", selector, options)))();
export const concatMany = /*@__PURE__*/ memoize(m => (computations) => m.concat(...computations));
export const concatWith = /*@__PURE__*/ memoize(m => (...tail) => (fst) => m.concat(fst, ...tail));
export const debug = /*@__PURE__*/ memoize(m => returns(m.forEach(breakPoint)));
export const endWith = /*@__PURE__*/ memoize(m => (...values) => concatWith(m)(m.fromReadonlyArray()(values)));
export const flatMap = /*@__PURE__*/ (() => memoize((m) => (flatten, selector, options) => compose((x) => x, m.map(selector), m[flatten](options))))();
export const flatMapAsync = /*@__PURE__*/ (() => memoize((m) => (key, f) => {
    const mapper = (a) => pipe((options) => f(a, options), m.fromAsyncFactory());
    return flatMap(m)(key, mapper, {
        innerType: DeferredComputationWithSideEffects,
    });
}))();
export const flatMapIterable = /*@__PURE__*/ (() => memoize((m) => (key, selector, options) => {
    const mapper = compose(selector, m.fromIterable());
    return flatMap(m)(key, mapper, options);
}))();
export const hasSideEffects = (computation) => !(computation[ComputationLike_isPure] ?? true);
export const ignoreElements = 
/*@__PURE__*/ memoize(m => returns(m.keep(alwaysFalse)));
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
export const keepType = /*@__PURE__*/ memoize(m => (predicate) => m.keep(predicate));
export const log = /*@__PURE__*/ memoize(m => returns(m.forEach(consoleLog)));
export const mapTo = /*@__PURE__*/ memoize(m => (v) => m.map(returns(v)));
export const mergeMany = /*@__PURE__*/ memoize(m => (computations) => m.merge(...computations));
export const mergeWith = /*@__PURE__*/ memoize(m => (...tail) => (fst) => m.merge(fst, ...tail));
export const notify = /*@__PURE__*/ memoize(m => (eventListener) => m.forEach(bindMethod(eventListener, EventListenerLike_notify)));
export const pick = /*@__PURE__*/ memoize(m => (...keys) => m.map(pickUnsafe(...keys)));
export const sequence = /*@__PURE__*/ memoize(m => (start) => m.generate(increment, returns(start - 1)));
export const startWith = /*@__PURE__*/ memoize(m => (...values) => (computation) => pipe(m.fromReadonlyArray()(values), concatWith(m)(computation)));

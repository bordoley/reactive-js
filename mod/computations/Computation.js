/// <reference types="./Computation.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../computations.js";
import { alwaysFalse, bindMethod, debug as breakPoint, compose, log as consoleLog, increment, pickUnsafe, pipe, returns, } from "../functions.js";
import { EventListenerLike_notify } from "../utils.js";
export const areAllDeferred = (computations) => computations.every(isDeferred);
export const areAllMulticasted = (computations) => computations.every(isMulticasted);
export const areAllPure = (computations) => computations.every(isPure);
export const areAllSynchronous = (computations) => computations.every(isSynchronous);
export const concatMap = (m) => flatMap(m, "concatAll");
export const concatMapIterable = (m) => flatMapIterable(m, "concatAll");
export const concatMany = ((m) => (computations) => m.concat(...computations));
export const concatWith = (m) => ((...tail) => (fst) => m.concat(fst, ...tail));
export const debug = (m) => () => m.forEach(breakPoint);
export const endWith = ((m) => (...values) => concatWith(m)(m.fromReadonlyArray()(values)));
export const flatMap = ((m, flatten) => (selector, options) => compose((x) => x, m.map(selector), m[flatten](options)));
export const flatMapIterable = ((m, flatten) => (selector, options) => {
    const mapper = compose(selector, m.fromIterable());
    return flatMap(m, flatten)(mapper, options);
});
export const hasSideEffects = (computation) => !(computation[ComputationLike_isPure] ?? true);
export const ignoreElements = (m) => () => m.keep(alwaysFalse);
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
export const keepType = ((m) => (predicate) => m.keep(predicate));
export const log = (m) => () => m.forEach(consoleLog);
export const mapTo = (m) => (v) => m.map(returns(v));
export const mergeMany = ((m) => (computations) => m.merge(...computations));
export const mergeWith = (m) => ((...tail) => (fst) => m.merge(fst, ...tail));
export const notify = (m) => (eventListener) => m.forEach(bindMethod(eventListener, EventListenerLike_notify));
export const pick = (m) => (...keys) => m.map(pickUnsafe(...keys));
export const sequence = (m) => (start) => m.generate(increment, returns(start - 1));
export const startWith = ((m) => (...values) => (computation) => pipe(m.fromReadonlyArray()(values), concatWith(m)(computation)));

/// <reference types="./Computation.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isInteractive, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../computations.js";
import { alwaysFalse, compose, increment, pickUnsafe, returns, } from "../functions.js";
export const areAllDeferred = (computations) => computations.every(isDeferred);
export const areAllInteractive = (computations) => computations.every(isInteractive);
export const areAllMulticasted = (computations) => computations.every(isMulticasted);
export const areAllPure = (computations) => computations.every(isPure);
export const areAllSynchronous = (computations) => computations.every(isSynchronous);
export const concat = (m) => (...computations) => m.concatMany(computations);
export const concatMap = (m) => (selector) => compose(m.map(selector), m.concatAll());
export const concatMapIterable = (m) => (selector) => {
    const mapper = compose(selector, m.fromIterable());
    return concatMap(m)(mapper /* FIXME: pass in options here */);
};
export const concatWith = (m) => (...tail) => (fst) => m.concatMany([fst, ...tail]);
export const endWith = (m) => (...values) => (computation) => m.concatMany([computation, m.fromReadonlyArray()(values)]);
export const hasSideEffects = (computation) => !(computation[ComputationLike_isPure] ?? true);
export const ignoreElements = (m) => () => m.keep(alwaysFalse);
export const isDeferred = (computation) => computation[ComputationLike_isDeferred] ?? true;
export const isDeferredWithSideEffects = (computation) => (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);
export const isInteractive = (computation) => computation[ComputationLike_isInteractive] ?? true;
export const isMulticasted = (computation) => !(computation[ComputationLike_isDeferred] ?? true) &&
    (computation[ComputationLike_isPure] ?? true) &&
    !(computation[ComputationLike_isSynchronous] ?? true);
export const isPure = (computation) => computation[ComputationLike_isPure] ?? true;
export const isPureDeferred = (computation) => (computation[ComputationLike_isPure] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true);
export const isPureSynchronous = (computation) => (computation[ComputationLike_isPure] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true) &&
    (computation[ComputationLike_isSynchronous] ?? true);
export const isReactive = (computation) => !(computation[ComputationLike_isInteractive] ?? true);
export const isSynchronous = (computation) => (computation[ComputationLike_isSynchronous] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true);
export const isSynchronousReactive = (computation) => (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isInteractive] ?? true) &&
    (computation[ComputationLike_isSynchronous] ?? true);
export const isSynchronousWithSideEffects = (computation) => (computation[ComputationLike_isSynchronous] ?? true) &&
    (computation[ComputationLike_isDeferred] ?? true) &&
    !(computation[ComputationLike_isPure] ?? true);
export const keepType = ((m) => (predicate) => m.keep(predicate));
export const mapTo = (m) => (v) => m.map(returns(v));
export const merge = (m) => (...computations) => m.mergeMany(computations);
export const mergeWith = (m) => (...tail) => (fst) => m.mergeMany([fst, ...tail]);
export const pick = ((m) => (...keys) => m.map(pickUnsafe(...keys)));
export const sequence = (m) => (start) => m.generate(increment, returns(start - 1));
export const startWith = (m) => (...values) => (computation) => m.concatMany([m.fromReadonlyArray()(values), computation]);

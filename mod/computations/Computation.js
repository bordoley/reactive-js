/// <reference types="./Computation.d.ts" />

import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, ComputationModuleLike_computationType, RunnableLike_eval, SourceLike_subscribe, } from "../computations.js";
import { raise as Functions_raise, bindMethod, error, identity, invoke, memoize, pipe, returns, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Consumer from "../utils/__internal__/Consumer.js";
import { CollectionEnumeratorLike_peek, } from "../utils.js";
import Computation_areAllPure from "./Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "./Computation/__private__/Computation.areAllSynchronous.js";
import Computation_empty from "./Computation/__private__/Computation.empty.js";
import Computation_isPure from "./Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "./Computation/__private__/Computation.isSynchronous.js";
import * as DeferredSource from "./__internal__/DeferredSource.js";
export const areAllPure = Computation_areAllPure;
export const areAllSynchronous = Computation_areAllSynchronous;
export const concatWith = /*@__PURE__*/ memoize(m => (...tail) => (fst) => m.concat(fst, ...tail));
export const empty = Computation_empty;
export const fromReadonlyArray = 
/*@__PURE__*/ memoize(m => (options) => (array) => m.genPure(function* ComputationFromReadonlyArray() {
    let [start, count] = parseArrayBounds(array, options);
    while (count !== 0) {
        yield array[start];
        count > 0 ? (start++, count--) : (start--, count++);
    }
}, options));
export const isPure = Computation_isPure;
export const isSynchronous = Computation_isSynchronous;
export const last = /*@__PURE__*/ memoize(m => (options) => (src) => {
    const producer = pipe(src, m.toRunnable(options));
    const consumer = Consumer.takeLast(1);
    producer[RunnableLike_eval](consumer);
    Disposable.raiseIfDisposedWithError(consumer);
    return consumer[CollectionEnumeratorLike_peek];
});
export const lastAsync = /*@__PURE__*/ memoize(m => (options) => async (src) => {
    const producer = pipe(src, m.toProducer(options));
    const consumer = Consumer.takeLast(1);
    producer[SourceLike_subscribe](consumer);
    await DisposableContainer.toPromise(consumer);
    return consumer[CollectionEnumeratorLike_peek];
});
export const makeModule = returns(identity);
export const mergeWith = /*@__PURE__*/ memoize(m => (...tail) => (fst) => m.merge(fst, ...tail));
export const raise = /*@__PURE__*/ memoize(m => (options) => m.genPure(function* RaiseComputation() {
    const { raise: factory = Functions_raise } = options ?? {};
    pipe(factory(), error, Functions_raise);
}));
export const subscribe = /*@__PURE__*/ memoize(m => (options) => (src) => {
    const consumer = Consumer.takeLast(0);
    pipe(src, m.toProducer(options), invoke(SourceLike_subscribe, consumer));
    return consumer;
});
export const toObservable = /*@__PURE__*/ memoize(m => (options) => (src) => {
    const producer = pipe(src, m.toProducer(options));
    return DeferredSource.create(bindMethod(producer, SourceLike_subscribe), {
        [ComputationLike_isPure]: producer[ComputationLike_isPure],
        [ComputationLike_isSynchronous]: false,
    });
});
export const toReadonlyArray = 
/*@__PURE__*/ memoize(m => (options) => (src) => {
    const producer = pipe(src, m.toRunnable(options));
    const consumer = Consumer.create();
    producer[RunnableLike_eval](consumer);
    Disposable.raiseIfDisposedWithError(consumer);
    return Array.from(consumer);
});
export const toReadonlyArrayAsync = 
/*@__PURE__*/ memoize(m => (options) => async (src) => {
    const producer = pipe(src, m.toProducer(options));
    const consumer = Consumer.create();
    producer[SourceLike_subscribe](consumer);
    await DisposableContainer.toPromise(consumer);
    return Array.from(consumer);
});

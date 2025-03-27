/// <reference types="./Computation.d.ts" />

import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, RunnableLike_eval, SourceLike_subscribe, } from "../computations.js";
import { raise as Functions_raise, bindMethod, error, memoize, pipe, returns, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import * as Consumer from "../utils/__internal__/Consumer.js";
import Iterable_first from "./Iterable/__private__/Iterable.first.js";
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
export const last = /*@__PURE__*/ memoize(m => (options) => (src) => {
    const producer = pipe(src, m.toRunnable(options));
    const consumer = Consumer.takeLast(1);
    producer[RunnableLike_eval](consumer);
    Disposable.raiseIfDisposedWithError(consumer);
    return pipe(consumer, Iterable_first());
});
export const lastAsync = /*@__PURE__*/ memoize(m => (options) => async (src) => {
    const producer = pipe(src, m.toProducer(options));
    const consumer = Consumer.takeLast(1);
    producer[SourceLike_subscribe](consumer);
    await DisposableContainer.toPromise(consumer);
    return pipe(consumer, Iterable_first());
});
export const mergeWith = /*@__PURE__*/ memoize(m => (...tail) => (fst) => m.merge(fst, ...tail));
export const raise = /*@__PURE__*/ memoize(m => (options) => m.genPure(function* RaiseComputation() {
    const { raise: factory = Functions_raise } = options ?? {};
    pipe(factory(), error, Functions_raise);
}));
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

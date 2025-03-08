/// <reference types="./AsyncIterable.d.ts" />

import { Array_push } from "../__internal__/constants.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, } from "../computations.js";
import { newInstance, returns, } from "../functions.js";
class FromReadonlyArrayAsyncIterable {
    s;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(s) {
        this.s = s;
    }
    async *[Symbol.asyncIterator]() {
        for (const v of this.s) {
            yield v;
        }
    }
}
export const fromReadonlyArray = 
/*@__PURE__*/
returns(arr => newInstance(FromReadonlyArrayAsyncIterable, arr));
class KeepAsyncIterable {
    d;
    p;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(d, p) {
        this.d = d;
        this.p = p;
        this[ComputationLike_isPure] = d[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const delegate = this.d;
        const predicate = this.p;
        for await (const v of delegate) {
            if (predicate(v)) {
                yield v;
            }
        }
    }
}
export const keep = ((predicate) => (iterable) => newInstance(KeepAsyncIterable, iterable, predicate));
class MapAsyncIterable {
    d;
    m;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(d, m) {
        this.d = d;
        this.m = m;
    }
    async *[Symbol.asyncIterator]() {
        const delegate = this.d;
        const mapper = this.m;
        for await (const v of delegate) {
            yield mapper(v);
        }
    }
}
export const map = ((mapper) => (iter) => newInstance(MapAsyncIterable, iter, mapper));
class AsyncIterableOf {
    d;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(d) {
        this.d = d;
    }
    [Symbol.asyncIterator]() {
        return this.d[Symbol.asyncIterator]();
    }
}
export const of = /*@__PURE__*/ returns(iter => newInstance(AsyncIterableOf, iter));
export const toReadonlyArrayAsync = 
/*@__PURE__*/
returns(async (iter) => {
    const result = [];
    for await (const v of iter) {
        result[Array_push](v);
    }
    return result;
});

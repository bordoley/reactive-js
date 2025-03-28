/// <reference types="./AsyncIterable.d.ts" />

import { Array_map, Iterator_done, Iterator_next, Iterator_value, } from "../__internal__/constants.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../computations.js";
import { alwaysTrue, bindMethod, error, invoke, isFunction, isNone, isSome, newInstance, none, pick, pipe, raiseError, returns, strictEquality, tuple, } from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import * as Disposable from "../utils/Disposable.js";
import * as Iterator from "../utils/__internal__/Iterator.js";
import { EnumeratorLike_current, EnumeratorLike_moveNext } from "../utils.js";
import * as ComputationM from "./Computation.js";
import { Observable_genAsync, Observable_genPureAsync, } from "./Observable/__private__/Observable.genAsync.js";
import { Producer_genAsync, Producer_genPureAsync, } from "./Producer/__private__/Producer.genAsync.js";
class CatchErrorAsyncIterable {
    s;
    onError;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s, onError, isPure) {
        this.s = s;
        this.onError = onError;
        this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
    }
    async *[Symbol.asyncIterator]() {
        try {
            yield* this.s;
        }
        catch (e) {
            const err = error(e);
            let action = none;
            try {
                action = this.onError(err);
            }
            catch (e) {
                throw error([error(e), err]);
            }
            isSome(action) && (yield* action);
        }
    }
}
export const catchError = ((onError, options) => (iter) => newInstance(CatchErrorAsyncIterable, iter, onError, options?.innerType?.[ComputationLike_isPure] ?? true));
class ConcatAllAsyncIterable {
    s;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isPure];
    constructor(s, isPure) {
        this.s = s;
        this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
    }
    async *[Symbol.asyncIterator]() {
        for await (const iter of this.s) {
            yield* iter;
        }
    }
}
export const concatAll = ((options) => (iterable) => newInstance(ConcatAllAsyncIterable, iterable, options?.innerType?.[ComputationLike_isPure] ?? true));
class ConcatAsyncIterable {
    s;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = ComputationM.areAllPure(s);
    }
    async *[Symbol.asyncIterator]() {
        for (const iter of this.s) {
            yield* iter;
        }
    }
}
export const concat = ((...iterables) => newInstance(ConcatAsyncIterable, iterables));
class DistinctUntilChangedAsyncIterable {
    s;
    eq;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isPure];
    constructor(s, eq) {
        this.s = s;
        this.eq = eq;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const equals = this.eq;
        let hasPrev = false;
        let prev = none;
        for await (const v of this.s) {
            if (!hasPrev) {
                hasPrev = true;
                prev = v;
                yield v;
            }
            else if (!equals(v, prev)) {
                prev = v;
                yield v;
            }
        }
    }
}
export const distinctUntilChanged = ((options) => (iterable) => newInstance(DistinctUntilChangedAsyncIterable, iterable, options?.equality ?? strictEquality));
class FromAsyncFactoryIterable {
    f;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(f) {
        this.f = f;
    }
    async *[Symbol.asyncIterator]() {
        const result = await this.f();
        yield result;
    }
}
export const fromAsyncFactory = returns(factory => newInstance(FromAsyncFactoryIterable, factory));
class EncodeUtf8AsyncIterable {
    s;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const textEncoder = newInstance(TextEncoder);
        for await (const chunk of this.s) {
            yield textEncoder.encode(chunk);
        }
    }
}
export const encodeUtf8 = (() => (iterable) => newInstance(EncodeUtf8AsyncIterable, iterable));
class ForEachAsyncIterable {
    d;
    ef;
    [ComputationLike_isPure] = false;
    [ComputationLike_isSynchronous] = false;
    constructor(d, ef) {
        this.d = d;
        this.ef = ef;
    }
    async *[Symbol.asyncIterator]() {
        const delegate = this.d;
        const effect = this.ef;
        for await (const v of delegate) {
            effect(v);
            yield v;
        }
    }
}
export const forEach = ((effect) => (iter) => newInstance(ForEachAsyncIterable, iter, effect));
class GenAsyncIterable {
    f;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure] = false;
    constructor(f) {
        this.f = f;
    }
    async *[Symbol.asyncIterator]() {
        const enumerator = pipe(this.f(), Iterator.toEnumerator());
        while (enumerator[EnumeratorLike_moveNext]()) {
            yield Promise.resolve(enumerator[EnumeratorLike_current]);
        }
        Disposable.raiseIfDisposedWithError(enumerator);
    }
}
export const gen = ((factory) => newInstance((GenAsyncIterable), factory));
class GenAsyncAsyncIterable {
    f;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure] = false;
    constructor(f) {
        this.f = f;
    }
    [Symbol.asyncIterator]() {
        return this.f();
    }
}
export const genAsync = ((factory) => newInstance(GenAsyncAsyncIterable, factory));
class GenPureAsyncIterable {
    f;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure] = true;
    constructor(f) {
        this.f = f;
    }
    async *[Symbol.asyncIterator]() {
        const enumerator = pipe(this.f(), Iterator.toEnumerator());
        while (enumerator[EnumeratorLike_moveNext]()) {
            yield Promise.resolve(enumerator[EnumeratorLike_current]);
        }
        Disposable.raiseIfDisposedWithError(enumerator);
    }
}
export const genPure = ((factory) => newInstance((GenPureAsyncIterable), factory));
class GenPureAsyncAsyncIterable {
    f;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure] = true;
    constructor(f) {
        this.f = f;
    }
    [Symbol.asyncIterator]() {
        return this.f();
    }
}
export const genPureAsync = ((factory) => newInstance(GenPureAsyncAsyncIterable, factory));
class KeepAsyncIterable {
    d;
    p;
    [ComputationLike_isPure];
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
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(d, m) {
        this.d = d;
        this.m = m;
        this[ComputationLike_isPure] = d[ComputationLike_isPure];
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
class PairwiseAsyncIterable {
    s;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        let hasPrev = false;
        let prev = none;
        for await (const v of this.s) {
            if (!hasPrev) {
                hasPrev = true;
                prev = v;
            }
            else {
                const result = tuple(prev, v);
                prev = v;
                yield result;
            }
        }
    }
}
export const pairwise = (() => (iterable) => newInstance((PairwiseAsyncIterable), iterable));
class ScanAsyncIterable {
    s;
    r;
    iv;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s, r, iv) {
        this.s = s;
        this.r = r;
        this.iv = iv;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const reducer = this.r;
        let acc = this.iv();
        for await (const v of this.s) {
            acc = reducer(acc, v);
            yield acc;
        }
    }
}
class RepeatAsyncIterable {
    i;
    p;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(i, p) {
        this.i = i;
        this.p = p;
        this[ComputationLike_isPure] = i[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const iterable = this.i;
        const predicate = this.p;
        let cnt = 0;
        while (true) {
            yield* iterable;
            cnt++;
            if (!predicate(cnt)) {
                break;
            }
        }
    }
}
export const repeat = ((predicate) => {
    const repeatPredicate = isFunction(predicate)
        ? predicate
        : isNone(predicate)
            ? alwaysTrue
            : (count) => count < predicate;
    return (src) => newInstance(RepeatAsyncIterable, src, repeatPredicate);
});
class RetryAsyncIterable {
    i;
    p;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(i, p) {
        this.i = i;
        this.p = p;
        this[ComputationLike_isPure] = i[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const iterable = this.i;
        const predicate = this.p;
        let cnt = 0;
        while (true) {
            try {
                yield* iterable;
            }
            catch (e) {
                cnt++;
                if (!predicate(cnt, error(e))) {
                    break;
                }
            }
        }
    }
}
export const retry = ((shouldRetry) => (deferable) => newInstance(RetryAsyncIterable, deferable, shouldRetry ?? alwaysTrue));
export const scan = ((scanner, initialValue) => (iter) => newInstance(ScanAsyncIterable, iter, scanner, initialValue));
class SkipFirstAsyncIterable {
    s;
    c;
    [ComputationLike_isSynchronous] = false;
    [ComputationLike_isPure];
    constructor(s, c) {
        this.s = s;
        this.c = c;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const skipCount = this.c;
        let count = 0;
        for await (const v of this.s) {
            if (count >= skipCount) {
                yield v;
            }
            count++;
        }
    }
}
export const skipFirst = ((options) => (iterable) => newInstance(SkipFirstAsyncIterable, iterable, clampPositiveInteger(options?.count ?? 1)));
class TakeFirstAsyncIterable {
    s;
    c;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s, c) {
        this.s = s;
        this.c = c;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const takeCount = this.c;
        let count = 0;
        for await (const v of this.s) {
            if (count < takeCount) {
                yield v;
            }
            else {
                break;
            }
            count++;
        }
    }
}
export const takeFirst = ((options) => (iterable) => newInstance(TakeFirstAsyncIterable, iterable, clampPositiveInteger(options?.count ?? 1)));
class TakeWhileAsyncIterable {
    s;
    p;
    i;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(s, p, i) {
        this.s = s;
        this.p = p;
        this.i = i;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        const predicate = this.p;
        const inclusive = this.i;
        for await (const next of this.s) {
            const satisfiesPredicate = predicate(next);
            if (satisfiesPredicate || inclusive) {
                yield next;
            }
            if (!satisfiesPredicate) {
                break;
            }
        }
    }
}
export const takeWhile = ((predicate, options) => (iterable) => newInstance(TakeWhileAsyncIterable, iterable, predicate, options?.inclusive ?? false));
class ThrowIfEmptyAsyncIterable {
    i;
    f;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(i, f) {
        this.i = i;
        this.f = f;
        this[ComputationLike_isPure] = i[ComputationLike_isPure];
    }
    async *[Symbol.asyncIterator]() {
        let isEmpty = true;
        for await (const v of this.i) {
            isEmpty = false;
            yield v;
        }
        if (isEmpty) {
            raiseError(error(this.f()));
        }
    }
}
export const throwIfEmpty = ((factory) => (iter) => newInstance(ThrowIfEmptyAsyncIterable, iter, factory));
export const toObservable = 
//  @__PURE__
returns((iter) => ComputationM.isPure(iter)
    ? Observable_genPureAsync(bindMethod(iter, Symbol.asyncIterator))
    : Observable_genAsync(bindMethod(iter, Symbol.asyncIterator)));
export const toProducer = 
//   @__PURE__
returns((iter) => ComputationM.isPure(iter)
    ? Producer_genPureAsync(bindMethod(iter, Symbol.asyncIterator))
    : Producer_genAsync(bindMethod(iter, Symbol.asyncIterator)));
class ZipAsyncIterable {
    iters;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous] = false;
    constructor(iters) {
        this.iters = iters;
        this[ComputationLike_isPure] = ComputationM.areAllPure(iters);
    }
    async *[Symbol.asyncIterator]() {
        const iterators = this.iters[Array_map](invoke(Symbol.asyncIterator));
        while (true) {
            const next = await Promise.all(iterators[Array_map](invoke(Iterator_next)));
            if (next.some(x => x[Iterator_done] ?? false)) {
                break;
            }
            yield next[Array_map](pick(Iterator_value));
        }
    }
}
export const zip = ((...iters) => newInstance(ZipAsyncIterable, iters));

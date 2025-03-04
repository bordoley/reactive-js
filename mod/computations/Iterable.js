/// <reference types="./Iterable.d.ts" />

import { clampPositiveInteger } from "../__internal__/math.js";
import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import { ComputationLike_isPure, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../computations.js";
import { alwaysTrue, error, identity, invoke, isFunction, isNone, isSome, newInstance, none, raise as raiseError, returns, tuple, } from "../functions.js";
import * as ComputationM from "./Computation.js";
import Runnable_fromIterable from "./Runnable/__private__/Runnable.fromIterable.js";
class CatchErrorIterable {
    s;
    onError;
    [ComputationLike_isPure];
    constructor(s, onError, isPure) {
        this.s = s;
        this.onError = onError;
        this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
    }
    *[Symbol.iterator]() {
        try {
            for (const v of this.s) {
                yield v;
            }
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
            if (isSome(action)) {
                for (const v of action) {
                    yield v;
                }
            }
        }
    }
}
export const catchError = ((onError, options) => (iter) => newInstance(CatchErrorIterable, iter, onError, options?.innerType?.[ComputationLike_isPure] ?? true));
class ConcatAllIterable {
    s;
    [ComputationLike_isPure];
    constructor(s, isPure) {
        this.s = s;
        this[ComputationLike_isPure] = ComputationM.isPure(s) && isPure;
    }
    *[Symbol.iterator]() {
        for (const iter of this.s) {
            for (const v of iter) {
                yield v;
            }
        }
    }
}
export const concatAll = ((options) => (iterable) => newInstance(ConcatAllIterable, iterable, options?.innerType?.[ComputationLike_isPure] ?? true));
export const concat = ((...iterables) => newInstance(ConcatAllIterable, iterables, ComputationM.areAllPure(iterables)));
export const empty = /*@__PURE__*/ returns([]);
class EncodeUtf8Iterable {
    s;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const textEncoder = newInstance(TextEncoder);
        for (const chunk of this.s) {
            yield textEncoder.encode(chunk);
        }
    }
}
export const encodeUtf8 = (() => (iterable) => newInstance(EncodeUtf8Iterable, iterable));
class ForEachIterable {
    d;
    ef;
    [ComputationLike_isPure] = false;
    constructor(d, ef) {
        this.d = d;
        this.ef = ef;
    }
    *[Symbol.iterator]() {
        const delegate = this.d;
        const effect = this.ef;
        for (const v of delegate) {
            effect(v);
            yield v;
        }
    }
}
export const forEach = (effect) => (iterable) => newInstance(ForEachIterable, iterable, effect);
export const fromIterable = /*@__PURE__*/ returns(identity);
export const fromValue = /*@__PURE__*/ returns(tuple);
class FromReadonlyArrayIterable {
    arr;
    count;
    start;
    [ComputationLike_isPure];
    constructor(arr, count, start) {
        this.arr = arr;
        this.count = count;
        this.start = start;
    }
    *[Symbol.iterator]() {
        let { arr, start, count } = this;
        while (count !== 0) {
            const next = arr[start];
            yield next;
            count > 0 ? (start++, count--) : (start--, count++);
        }
    }
}
export const fromReadonlyArray = (options) => (arr) => {
    let [start, count] = parseArrayBounds(arr, options);
    return start === 0 && count >= arr.length
        ? arr
        : newInstance(FromReadonlyArrayIterable, arr, count, start);
};
class GeneratorIterable {
    generator;
    initialValue;
    count;
    [ComputationLike_isPure];
    constructor(generator, initialValue, count) {
        this.generator = generator;
        this.initialValue = initialValue;
        this.count = count;
    }
    *[Symbol.iterator]() {
        const { count, generator } = this;
        let acc = this.initialValue();
        for (let cnt = 0; count === none || cnt < count; cnt++) {
            acc = generator(acc);
            yield acc;
        }
    }
}
export const generate = (generator, initialValue, options) => newInstance(GeneratorIterable, generator, initialValue, options?.count);
class KeepIterable {
    d;
    p;
    [ComputationLike_isPure];
    constructor(d, p) {
        this.d = d;
        this.p = p;
        this[ComputationLike_isPure] = d[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const delegate = this.d;
        const predicate = this.p;
        for (const v of delegate) {
            if (predicate(v)) {
                yield v;
            }
        }
    }
}
export const keep = ((predicate) => (iterable) => newInstance(KeepIterable, iterable, predicate));
export const last = () => (iter) => {
    let result = none;
    for (const v of iter) {
        result = v;
    }
    return result;
};
class MapIterable {
    d;
    m;
    [ComputationLike_isPure];
    constructor(d, m) {
        this.d = d;
        this.m = m;
        this[ComputationLike_isPure] = d[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const delegate = this.d;
        const mapper = this.m;
        for (const v of delegate) {
            yield mapper(v);
        }
    }
}
export const map = ((mapper) => (iterable) => newInstance(MapIterable, iterable, mapper));
class RaiseIterable {
    r;
    constructor(r) {
        this.r = r;
    }
    *[Symbol.iterator]() {
        raiseError(error(this.r()));
    }
}
export const raise = (options) => {
    const { raise: factory = raise } = options ?? {};
    return newInstance((RaiseIterable), factory);
};
export const reduce = (reducer, initialValue) => (iterable) => {
    let acc = initialValue();
    for (let v of iterable) {
        acc = reducer(acc, v);
    }
    return acc;
};
class RepeatIterable {
    i;
    p;
    [ComputationLike_isPure];
    constructor(i, p) {
        this.i = i;
        this.p = p;
        this[ComputationLike_isPure] = i[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const iterable = this.i;
        const predicate = this.p;
        let cnt = 0;
        while (true) {
            for (const v of iterable) {
                yield v;
            }
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
    return (src) => newInstance(RepeatIterable, src, repeatPredicate);
});
class RetryIterable {
    i;
    p;
    [ComputationLike_isPure];
    constructor(i, p) {
        this.i = i;
        this.p = p;
        this[ComputationLike_isPure] = i[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const iterable = this.i;
        const predicate = this.p;
        let cnt = 0;
        while (true) {
            try {
                for (const v of iterable) {
                    yield v;
                }
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
export const retry = ((shouldRetry) => (deferable) => newInstance(RetryIterable, deferable, shouldRetry ?? alwaysTrue));
class ScanIterable {
    s;
    r;
    iv;
    [ComputationLike_isPure];
    constructor(s, r, iv) {
        this.s = s;
        this.r = r;
        this.iv = iv;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const reducer = this.r;
        let acc = this.iv();
        for (const v of this.s) {
            acc = reducer(acc, v);
            yield acc;
        }
    }
}
export const scan = ((scanner, initialValue) => (iter) => newInstance(ScanIterable, iter, scanner, initialValue));
class TakeFirstIterable {
    s;
    c;
    [ComputationLike_isPure];
    constructor(s, c) {
        this.s = s;
        this.c = c;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const takeCount = this.c;
        let count = 0;
        for (const v of this.s) {
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
export const takeFirst = ((options) => (iterable) => newInstance(TakeFirstIterable, iterable, clampPositiveInteger(options?.count ?? 1)));
class TakeWhileIterable {
    s;
    p;
    i;
    [ComputationLike_isPure];
    constructor(s, p, i) {
        this.s = s;
        this.p = p;
        this.i = i;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const predicate = this.p;
        const inclusive = this.i;
        for (const next of this.s) {
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
export const takeWhile = ((predicate, options) => (iterable) => newInstance(TakeWhileIterable, iterable, predicate, options?.inclusive ?? false));
class ThrowIfEmptyIterable {
    i;
    f;
    [ComputationLike_isPure];
    constructor(i, f) {
        this.i = i;
        this.f = f;
        this[ComputationLike_isPure] = i[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        let isEmpty = true;
        for (const v of this.i) {
            isEmpty = false;
            yield v;
        }
        if (isEmpty) {
            raiseError(error(this.f()));
        }
    }
}
export const throwIfEmpty = ((factory) => (iter) => newInstance(ThrowIfEmptyIterable, iter, factory));
export const toRunnable = Runnable_fromIterable;
export const toReadonlyArray = () => (iterable) => Array.from(iterable);
class ZipIterable {
    iters;
    [ComputationLike_isPure];
    constructor(iters) {
        this.iters = iters;
        this[ComputationLike_isPure] = ComputationM.areAllPure(iters);
    }
    *[Symbol.iterator]() {
        const iterators = this.iters.map(invoke(Symbol.iterator));
        while (true) {
            const next = iterators.map(x => x.next());
            if (next.some(x => x.done ?? false)) {
                break;
            }
            yield next.map(x => x.value);
        }
    }
}
export const zip = ((...iters) => newInstance(ZipIterable, iters));

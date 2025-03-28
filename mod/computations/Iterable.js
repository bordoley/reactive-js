/// <reference types="./Iterable.d.ts" />

import { Array_map, Iterator_done, Iterator_next, Iterator_value, } from "../__internal__/constants.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, Computation_baseOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, RunnableLike_eval, } from "../computations.js";
import { alwaysTrue, bindMethod, error, invoke, isFunction, isNone, isSome, newInstance, none, pick, raise as raiseError, returns, strictEquality, tuple, } from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../utils.js";
import * as ComputationM from "./Computation.js";
import { Producer_gen, Producer_genPure, } from "./Producer/__private__/Producer.gen.js";
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
            yield* iter;
        }
    }
}
export const concatAll = ((options) => (iterable) => newInstance(ConcatAllIterable, iterable, options?.innerType?.[ComputationLike_isPure] ?? true));
export const concat = ((...iterables) => newInstance(ConcatAllIterable, iterables, ComputationM.areAllPure(iterables)));
class DistinctUntilChangedIterable {
    s;
    eq;
    [ComputationLike_isPure];
    constructor(s, eq) {
        this.s = s;
        this.eq = eq;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const equals = this.eq;
        let hasPrev = false;
        let prev = none;
        for (const v of this.s) {
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
export const distinctUntilChanged = ((options) => (iterable) => newInstance(DistinctUntilChangedIterable, iterable, options?.equality ?? strictEquality));
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
export const forEach = ((effect) => (iterable) => newInstance(ForEachIterable, iterable, effect));
class GenIterable {
    f;
    [ComputationLike_isSynchronous] = true;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure] = false;
    constructor(f) {
        this.f = f;
    }
    [Symbol.iterator]() {
        return this.f();
    }
}
export const gen = ((factory) => newInstance((GenIterable), factory));
class GenPureIterable {
    f;
    [ComputationLike_isSynchronous] = true;
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure] = true;
    constructor(f) {
        this.f = f;
    }
    [Symbol.iterator]() {
        return this.f();
    }
}
export const genPure = ((factory) => newInstance((GenPureIterable), factory));
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
class PairwiseIterable {
    s;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        let hasPrev = false;
        let prev = none;
        for (const v of this.s) {
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
export const pairwise = (() => (iterable) => newInstance((PairwiseIterable), iterable));
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
class SkipFirstIterable {
    s;
    c;
    [ComputationLike_isPure];
    constructor(s, c) {
        this.s = s;
        this.c = c;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    *[Symbol.iterator]() {
        const skipCount = this.c;
        let count = 0;
        for (const v of this.s) {
            if (count >= skipCount) {
                yield v;
            }
            count++;
        }
    }
}
export const skipFirst = ((options) => (iterable) => newInstance(SkipFirstIterable, iterable, clampPositiveInteger(options?.count ?? 1)));
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
//export const toObservable: Signature["toObservable"] = Iterable_toObservable;
export const toProducer = /*@__PURE__*/ returns((iterable) => ComputationM.isPure(iterable)
    ? Producer_genPure(bindMethod(iterable, Symbol.iterator))
    : Producer_gen(bindMethod(iterable, Symbol.iterator)));
class IterableToRunnable {
    s;
    [ComputationLike_isDeferred] = false;
    [ComputationLike_isPure];
    constructor(s) {
        this.s = s;
        this[ComputationLike_isPure] = s[ComputationLike_isPure];
    }
    [RunnableLike_eval](sink) {
        for (const v of this.s) {
            if (sink[SinkLike_isCompleted]) {
                break;
            }
            sink[EventListenerLike_notify](v);
        }
        sink[SinkLike_complete]();
    }
}
export const toRunnable = /*@__PURE__*/ returns((iterable) => newInstance(IterableToRunnable, iterable));
class ZipIterable {
    iters;
    [ComputationLike_isPure];
    constructor(iters) {
        this.iters = iters;
        this[ComputationLike_isPure] = ComputationM.areAllPure(iters);
    }
    *[Symbol.iterator]() {
        const iterators = this.iters[Array_map](invoke(Symbol.iterator));
        while (true) {
            const next = iterators[Array_map](invoke(Iterator_next));
            if (next.some(x => x[Iterator_done] ?? false)) {
                break;
            }
            yield next[Array_map](pick(Iterator_value));
        }
    }
}
export const zip = ((...iters) => newInstance(ZipIterable, iters));

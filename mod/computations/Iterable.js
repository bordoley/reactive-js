/// <reference types="./Iterable.d.ts" />

import { clampPositiveInteger } from "../__internal__/math.js";
import { mixInstanceFactory, props } from "../__internal__/mixins.js";
import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import { ComputationLike_isPure, Computation_type, } from "../computations.js";
import { alwaysTrue, error, identity, invoke, isFunction, isNone, isSome, newInstance, none, raise as raiseError, returns, tuple, } from "../functions.js";
import Runnable_fromIterable from "./Runnable/__private__/Runnable.fromIterable.js";
class CatchErrorIterable {
    s;
    onError;
    constructor(s, onError) {
        this.s = s;
        this.onError = onError;
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
export const catchError = (onError) => (iter) => newInstance(CatchErrorIterable, iter, onError);
class ConcatAllIterable {
    s;
    constructor(s) {
        this.s = s;
    }
    *[Symbol.iterator]() {
        for (const iter of this.s) {
            for (const v of iter) {
                yield v;
            }
        }
    }
}
export const concatAll = /*@__PURE__*/ (() => returns((iterable) => newInstance(ConcatAllIterable, iterable)))();
export const concatMany = concatAll();
export const empty = /*@__PURE__*/ returns([]);
export const forEach = /*@__PURE__*/ (() => {
    const ForEachIterable_effect = Symbol("ForEachIterable_effect");
    const ForEachIterable_delegate = Symbol("ForEachIterable_delegate");
    const createForEachIterable = mixInstanceFactory(function KeepIterable(instance, delegate, effect) {
        instance[ForEachIterable_delegate] = delegate;
        instance[ForEachIterable_effect] = effect;
        return instance;
    }, props({
        [ForEachIterable_delegate]: none,
        [ForEachIterable_effect]: none,
    }), {
        [ComputationLike_isPure]: false,
        *[Symbol.iterator]() {
            const delegate = this[ForEachIterable_delegate];
            const effect = this[ForEachIterable_effect];
            for (const v of delegate) {
                effect(v);
                yield v;
            }
        },
    });
    return (effect) => (iterable) => createForEachIterable(iterable, effect);
})();
export const fromIterable = /*@__PURE__*/ returns(identity);
export const fromValue = /*@__PURE__*/ returns(tuple);
class FromReadonlyArrayIterable {
    arr;
    count;
    start;
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
export const keep = /*@__PURE__*/ (() => {
    const KeepIterable_predicate = Symbol("KeepIterable_predicate");
    const KeepIterable_delegate = Symbol("KeepIterable_delegate");
    const createKeepIterable = mixInstanceFactory(function KeepIterable(instance, delegate, predicate) {
        instance[KeepIterable_delegate] = delegate;
        instance[KeepIterable_predicate] = predicate;
        return instance;
    }, props({
        [KeepIterable_delegate]: none,
        [KeepIterable_predicate]: none,
    }), {
        *[Symbol.iterator]() {
            const delegate = this[KeepIterable_delegate];
            const predicate = this[KeepIterable_predicate];
            for (const v of delegate) {
                if (predicate(v)) {
                    yield v;
                }
            }
        },
    });
    return (predicate) => (iterable) => createKeepIterable(iterable, predicate);
})();
export const last = () => (iter) => {
    let result = none;
    for (const v of iter) {
        result = v;
    }
    return result;
};
export const map = /*@__PURE__*/ (() => {
    const MapIterable_mapper = Symbol("MapIterable_mapper");
    const MapIterable_delegate = Symbol("MapIterable_delegate");
    const createMapIterable = mixInstanceFactory(function MapIterable(instance, delegate, mapper) {
        instance[MapIterable_delegate] = delegate;
        instance[MapIterable_mapper] = mapper;
        return instance;
    }, props({
        [MapIterable_delegate]: none,
        [MapIterable_mapper]: none,
    }), {
        *[Symbol.iterator]() {
            const delegate = this[MapIterable_delegate];
            const mapper = this[MapIterable_mapper];
            for (const v of delegate) {
                yield mapper(v);
            }
        },
    });
    return (mapper) => (iterable) => createMapIterable(iterable, mapper);
})();
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
class RepeateIterable {
    i;
    p;
    constructor(i, p) {
        this.i = i;
        this.p = p;
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
export const repeat = (predicate) => {
    const repeatPredicate = isFunction(predicate)
        ? predicate
        : isNone(predicate)
            ? alwaysTrue
            : (count) => count < predicate;
    return (src) => newInstance(RepeateIterable, src, repeatPredicate);
};
class RetryIterable {
    i;
    p;
    constructor(i, p) {
        this.i = i;
        this.p = p;
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
export const retry = (shouldRetry) => (deferable) => newInstance(RetryIterable, deferable, shouldRetry ?? alwaysTrue);
class ScanIterable {
    s;
    r;
    iv;
    constructor(s, r, iv) {
        this.s = s;
        this.r = r;
        this.iv = iv;
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
export const scan = (scanner, initialValue) => (iter) => newInstance(ScanIterable, iter, scanner, initialValue);
class TakeFirstIterable {
    s;
    c;
    constructor(s, c) {
        this.s = s;
        this.c = c;
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
export const takeFirst = (options) => (iterable) => newInstance(TakeFirstIterable, iterable, clampPositiveInteger(options?.count ?? 1));
class TakeWhileIterable {
    s;
    p;
    i;
    constructor(s, p, i) {
        this.s = s;
        this.p = p;
        this.i = i;
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
class ThrowIfEmptyIterable {
    i;
    f;
    constructor(i, f) {
        this.i = i;
        this.f = f;
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
export const throwIfEmpty = (factory) => (iter) => newInstance(ThrowIfEmptyIterable, iter, factory);
export const takeWhile = (predicate, options) => (iterable) => newInstance(TakeWhileIterable, iterable, predicate, options?.inclusive ?? false);
export const toRunnable = Runnable_fromIterable;
export const toReadonlyArray = () => (iterable) => Array.from(iterable);
class ZipIterable {
    iters;
    constructor(iters) {
        this.iters = iters;
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

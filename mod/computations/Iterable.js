/// <reference types="./Iterable.d.ts" />

import { clampPositiveInteger } from "../__internal__/math.js";
import { mixInstanceFactory, props } from "../__internal__/mixins.js";
import parseArrayBounds from "../__internal__/parseArrayBounds.js";
import { Computation_type, } from "../computations.js";
import { alwaysTrue, error, identity, isFunction, isNone, newInstance, none, pipe, raise, returns, tuple, } from "../functions.js";
export const concat = (...iterables) => concatMany(iterables);
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
export const concatAll = /*@PURE*/ (() => returns((iterable) => newInstance(ConcatAllIterable, iterable)))();
export const concatMap = (selector) => (obs) => pipe(obs, map(selector), concatAll());
export const concatMany = concatAll();
export const concatWith = (...tail) => (fst) => concatMany([fst, ...tail]);
export const endWith = (...values) => (iterable) => pipe(iterable, concatWith(pipe(values, fromReadonlyArray())));
export const forEach = /*@PURE*/ (() => {
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
export const fromIterable = /*@PURE*/ returns(identity);
export const fromValue = /*@PURE*/ returns(tuple);
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
export const keep = /*@PURE*/ (() => {
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
export const map = /*@PURE*/ (() => {
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
export const startWith = (...values) => (iter) => pipe(values, fromReadonlyArray(), concatWith(iter));
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
export const takeWhile = (predicate, options) => (iterable) => newInstance(TakeWhileIterable, iterable, predicate, options?.inclusive ?? false);
class ThrowsIterable {
    r;
    constructor(r) {
        this.r = r;
    }
    *[Symbol.iterator]() {
        raise(error(this.r()));
    }
}
export const throws = (options) => {
    const { raise: factory = raise } = options ?? {};
    return newInstance((ThrowsIterable), factory);
};
export const toReadonlyArray = () => (iterable) => Array.from(iterable);

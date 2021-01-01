/// <reference types="./enumerable.d.ts" />
import { none, isNone, isSome } from './option.mjs';
import { pipe, returns, compose, strictEquality, alwaysTrue } from './functions.mjs';
import { everySatisfy, map as map$1 } from './readonlyArray.mjs';
import { createRunnable } from './runnable.mjs';

const enumerate = (enumerable) => enumerable.enumerate();
const current = (enumerator) => enumerator.current;
const hasCurrent = (enumerator) => enumerator.hasCurrent;
const move = (enumerator) => enumerator.move();

class ArrayEnumerator {
    constructor(array, index, endIndex) {
        this.array = array;
        this.index = index;
        this.endIndex = endIndex;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        const array = this.array;
        let hasCurrent = false;
        this.index++;
        const index = this.index;
        if (index < this.endIndex) {
            hasCurrent = true;
            this.hasCurrent = true;
            this.current = array[index];
        }
        else {
            this.hasCurrent = false;
        }
        return hasCurrent;
    }
}
class ArrayEnumerable {
    constructor(values, startIndex, endIndex) {
        this.values = values;
        this.startIndex = startIndex;
        this.endIndex = endIndex;
    }
    enumerate() {
        return new ArrayEnumerator(this.values, this.startIndex, this.endIndex);
    }
}
/**
 * Returns an EnumerableLike view over the `values` array.
 *
 * @param values
 */
const fromArray = (options = {}) => (values) => {
    var _a, _b;
    const valuesLength = values.length;
    const startIndex = Math.min((_a = options.startIndex) !== null && _a !== void 0 ? _a : 0, valuesLength);
    const endIndex = Math.max(Math.min((_b = options.endIndex) !== null && _b !== void 0 ? _b : values.length, valuesLength), 0);
    return new ArrayEnumerable(values, startIndex - 1, endIndex);
};
const _empty = fromArray()([]);
/**
 * Returns an empty EnumerableLike.
 */
const empty = () => _empty;

class ComputeEnumerable {
    constructor(f) {
        this.f = f;
    }
    enumerate() {
        return pipe([this.f()], fromArray(), enumerate);
    }
}
const _compute = (f) => new ComputeEnumerable(f);
/**
 * Creates an EnumerableLike that emits the computed value.
 *
 * @param valueFactory
 */
const compute = () => _compute;

class LiftedEnumerableLike {
    constructor(src, operators) {
        this.src = src;
        this.operators = operators;
    }
    enumerate() {
        const src = enumerate(this.src);
        return pipe(src, ...this.operators);
    }
}
/**
 * Returns an EnumerableOperator that applies `operator` to
 * the EnumeratorLike returned by the source when enumerated.
 *
 * @param operator
 */
const lift = (operator) => enumerable => {
    const src = enumerable instanceof LiftedEnumerableLike ? enumerable.src : enumerable;
    const allFunctions = enumerable instanceof LiftedEnumerableLike
        ? [...enumerable.operators, operator]
        : [operator];
    return new LiftedEnumerableLike(src, allFunctions);
};

class MapEnumerator {
    constructor(delegate, mapper) {
        this.delegate = delegate;
        this.mapper = mapper;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        this.current = none;
        const hasCurrent = this.delegate.move();
        this.hasCurrent = hasCurrent;
        if (hasCurrent) {
            this.current = this.mapper(this.delegate.current);
        }
        return hasCurrent;
    }
}
/**
 * Returns an `EnumerableLike` that applies the `mapper` function to each
 * value emitted by the source.
 *
 * @param mapper The map function to apply each value. Must be a pure function.
 */
const map = (mapper) => {
    const operator = (enumerator) => new MapEnumerator(enumerator, mapper);
    return lift(operator);
};
const mapTo = (v) => map(returns(v));

class ConcatAllEnumerator {
    constructor(delegate) {
        this.delegate = delegate;
        this.current = none;
        this.hasCurrent = false;
        this.enumerator = none;
    }
    move() {
        this.current = none;
        this.hasCurrent = false;
        const delegate = this.delegate;
        if (isNone(this.enumerator) && delegate.move()) {
            this.enumerator = enumerate(delegate.current);
        }
        while (isSome(this.enumerator)) {
            const enumerator = this.enumerator;
            if (enumerator.move()) {
                this.current = enumerator.current;
                this.hasCurrent = true;
                break;
            }
            else if (delegate.move()) {
                this.enumerator = enumerate(delegate.current);
            }
            else {
                this.enumerator = none;
            }
        }
        return this.hasCurrent;
    }
}
const operator = (enumerator) => new ConcatAllEnumerator(enumerator);
const _concatAll = lift(operator);
/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
const concatAll = () => _concatAll;
/**
 * Maps each item yielded by the sourc using a mapping function, then flattens the result.
 *
 * @param mapper
 */
const concatMap = (mapper) => compose(map(mapper), concatAll());

function concat(...enumerables) {
    return pipe(enumerables, fromArray(), concatAll());
}
const concatWith = (snd) => first => concat(first, snd);

class DistinctUntilChangedEnumerator {
    constructor(delegate, equality) {
        this.delegate = delegate;
        this.equality = equality;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        const prevCurrent = this.current;
        const hadCurrent = this.hasCurrent;
        while (this.delegate.move()) {
            if (!hadCurrent || !this.equality(prevCurrent, this.delegate.current)) {
                break;
            }
        }
        return this.hasCurrent;
    }
}
/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
const distinctUntilChanged = (options = {}) => {
    const { equality = strictEquality } = options;
    const operator = (enumerator) => new DistinctUntilChangedEnumerator(enumerator, equality);
    return lift(operator);
};

function endWith(...values) {
    return pipe(values, fromArray(), concatWith);
}

class IteratorEnumerator {
    constructor(iterator) {
        this.iterator = iterator;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        this.hasCurrent = false;
        this.current = none;
        const next = this.iterator.next();
        if (!next.done) {
            this.hasCurrent = true;
            this.current = next.value;
        }
        return this.hasCurrent;
    }
}
class IteratorEnumerable {
    constructor(f) {
        this.f = f;
    }
    enumerate() {
        const iterator = this.f();
        const enumerator = new IteratorEnumerator(iterator);
        return enumerator;
    }
}
const _fromIterator = (f) => new IteratorEnumerable(f);
/**
 * Returns a single use EnumerableLike over the javascript Iterator
 * returned by the function `f`.
 *
 * @param f
 */
const fromIterator = () => _fromIterator;
const _fromIterable = (iterable) => _fromIterator(() => iterable[Symbol.iterator]());
/**
 * Converts a javascript Iterable to an EnumerableLike.
 *
 * @param iterable
 */
const fromIterable = () => _fromIterable;

class GenerateEnumerator {
    constructor(f, acc) {
        this.f = f;
        this.hasCurrent = false;
        this.current = acc;
    }
    move() {
        this.hasCurrent = true;
        this.current = this.f(this.current);
        return true;
    }
}
class GenerateEnumerable {
    constructor(f, acc) {
        this.f = f;
        this.acc = acc;
    }
    enumerate() {
        return new GenerateEnumerator(this.f, this.acc());
    }
}
/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
const generate = (generator, initialValue) => new GenerateEnumerable(generator, initialValue);

class KeepTypeEnumerator {
    constructor(delegate, predicate) {
        this.delegate = delegate;
        this.predicate = predicate;
        this.hasCurrent = false;
        this.current = none;
    }
    move() {
        const delegate = this.delegate;
        const predicate = this.predicate;
        let hasCurrent = false;
        while ((hasCurrent = delegate.move()) && !predicate(delegate.current)) { }
        this.hasCurrent = hasCurrent;
        this.current = delegate.current;
        return hasCurrent;
    }
}
/**
 * Returns an `EnumerableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
const keepType = (predicate) => {
    const operator = (enumerator) => new KeepTypeEnumerator(enumerator, predicate);
    return lift(operator);
};
/**
 * Returns an `EnumerableLike` that only emits items produced by the
 * source that satisfy the specified predicate.
 *
 * @param predicate The predicate function.
 */
const keep = (predicate) => keepType(predicate);

const _fromValue = (value) => pipe([value], fromArray());
/**
 * Creates an EnumerableLike that yields `value`.
 *
 * @param value The value to emit.
 */
const fromValue = () => _fromValue;

class RepeatEnumerator {
    constructor(src, shouldRepeat) {
        this.src = src;
        this.shouldRepeat = shouldRepeat;
        this.count = 0;
        this.enumerator = enumerate(src);
    }
    get current() {
        return this.enumerator.current;
    }
    get hasCurrent() {
        return this.enumerator.hasCurrent;
    }
    move() {
        if (!this.enumerator.move()) {
            this.count++;
            if (this.shouldRepeat(this.count)) {
                this.enumerator = enumerate(this.src);
                this.enumerator.move();
            }
        }
        return this.hasCurrent;
    }
}
class RepeatEnumerable {
    constructor(src, shouldRepeat) {
        this.src = src;
        this.shouldRepeat = shouldRepeat;
    }
    enumerate() {
        return new RepeatEnumerator(this.src, this.shouldRepeat);
    }
}
function repeat(predicate) {
    const repeatPredicate = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return enumerable => new RepeatEnumerable(enumerable, repeatPredicate);
}

class ScanEnumerator {
    constructor(delegate, reducer, current) {
        this.delegate = delegate;
        this.reducer = reducer;
        this.current = current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        const delegate = this.delegate;
        if (delegate.move()) {
            this.current = this.reducer(this.current, this.delegate.current);
        }
        return this.hasCurrent;
    }
}
/**
 * Returns an EnumerableLike which yields values emitted by the source as long
 * as each value satisfies the given predicate.
 *
 * @param predicate The predicate function.
 */
const scan = (reducer, initialValue) => {
    const operator = (observer) => new ScanEnumerator(observer, reducer, initialValue());
    return lift(operator);
};

class SkipFirstEnumerator {
    constructor(delegate, skipCount) {
        this.delegate = delegate;
        this.skipCount = skipCount;
        this.count = 0;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        const skipCount = this.skipCount;
        for (let count = this.count; count < skipCount; count++) {
            if (!this.delegate.move()) {
                break;
            }
        }
        this.count = skipCount;
        return this.delegate.move();
    }
}
/**
 * Returns an EnumerableLike that skips the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
const skipFirst = (options = {}) => {
    const { count = 1 } = options;
    const operator = (enumerator) => new SkipFirstEnumerator(enumerator, count);
    return lift(operator);
};

function startWith(...values) {
    return obs => concat(fromArray()(values), obs);
}

class TakeFirstEnumerator {
    constructor(delegate, maxCount) {
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.count = 0;
        this.hasCurrent = false;
    }
    get current() {
        return this.delegate.current;
    }
    move() {
        this.hasCurrent = false;
        if (this.count < this.maxCount && this.delegate.move()) {
            this.count++;
            this.hasCurrent = this.delegate.hasCurrent;
        }
        return this.hasCurrent;
    }
}
/**
 * Returns an EnumerableLike that only yields the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
const takeFirst = (options = {}) => {
    const { count = 1 } = options;
    const operator = (enumerator) => new TakeFirstEnumerator(enumerator, count);
    return lift(operator);
};

class TakeLastEnumerator {
    constructor(delegate, maxCount) {
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.enumerator = none;
    }
    get current() {
        var _a;
        return (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.current;
    }
    get hasCurrent() {
        var _a, _b;
        return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.hasCurrent) !== null && _b !== void 0 ? _b : false;
    }
    move() {
        const delegate = this.delegate;
        if (isNone(this.enumerator)) {
            const last = [];
            while (delegate.move()) {
                last.push(delegate.current);
                if (last.length > this.maxCount) {
                    last.shift();
                }
            }
            this.enumerator = pipe(last, fromArray(), enumerate);
        }
        this.enumerator.move();
        return this.hasCurrent;
    }
}
/**
 * Returns an EnumerableLike that only yields the last `count` items yielded by the source.
 *
 * @param count The maximum number of values to emit.
 */
const takeLast = (options = {}) => {
    const { count = 1 } = options;
    const operator = (enumerator) => new TakeLastEnumerator(enumerator, count);
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};

class TakeWhileEnumerator {
    constructor(delegate, predicate, inclusive) {
        this.delegate = delegate;
        this.predicate = predicate;
        this.inclusive = inclusive;
        this.state = 0;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return this.state < 2 && this.delegate.hasCurrent;
    }
    move() {
        const delegate = this.delegate;
        const state = this.state;
        if (state === 0 && delegate.move()) {
            const satisfiesPredicate = this.predicate(delegate.current);
            if (!satisfiesPredicate && this.inclusive) {
                this.state++;
            }
            else if (!satisfiesPredicate) {
                this.state = 2;
            }
        }
        else if (state < 2 && this.inclusive) {
            this.state++;
        }
        return this.hasCurrent;
    }
}
/**
 * Returns an EnumerableLike which yields values emitted by the source as long
 * as each value satisfies the given predicate.
 *
 * @param predicate The predicate function.
 */
const takeWhile = (predicate, options = {}) => {
    const { inclusive = false } = options;
    const operator = (observer) => new TakeWhileEnumerator(observer, predicate, inclusive);
    return lift(operator);
};

const enumeratorToRunnable = (f) => {
    const run = (sink) => {
        const enumerator = f();
        while (enumerator.move()) {
            sink.notify(enumerator.current);
        }
        sink.done();
    };
    return createRunnable(run);
};
const _toRunnable = (enumerable) => enumeratorToRunnable(() => enumerable.enumerate());
const toRunnable = () => _toRunnable;

class EnumerableIterable {
    constructor(enumerable) {
        this.enumerable = enumerable;
    }
    *[Symbol.iterator]() {
        const enumerator = enumerate(this.enumerable);
        while (enumerator.move()) {
            yield enumerator.current;
        }
    }
}
const _toIterable = (source) => new EnumerableIterable(source);
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
const toIterable = () => _toIterable;

const moveAll = (enumerators) => {
    for (const enumerator of enumerators) {
        enumerator.move();
    }
};
const allHaveCurrent = (enumerators) => pipe(enumerators, everySatisfy(hasCurrent));
class ZipEnumerator {
    constructor(enumerators) {
        this.enumerators = enumerators;
        this.current = [];
        this.hasCurrent = false;
    }
    move() {
        this.hasCurrent = false;
        const enumerators = this.enumerators;
        moveAll(enumerators);
        const hasCurrent = allHaveCurrent(enumerators);
        this.hasCurrent = hasCurrent;
        this.current = hasCurrent ? pipe(enumerators, map$1(current)) : [];
        return hasCurrent;
    }
}
function zipEnumerators(enumerators) {
    return new ZipEnumerator(enumerators);
}
class ZipEnumerable {
    constructor(enumerables) {
        this.enumerables = enumerables;
    }
    enumerate() {
        return pipe(this.enumerables, map$1(enumerate), zipEnumerators);
    }
}
/**
 * Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
 * in order, of each of its inputs.
 */
function zip(...enumerables) {
    return new ZipEnumerable(enumerables);
}
const zipWith = (snd) => fst => zip(fst, snd);

export { compute, concat, concatAll, concatMap, concatWith, current, distinctUntilChanged, empty, endWith, enumerate, fromArray, fromIterable, fromIterator, fromValue, generate, hasCurrent, keep, keepType, lift, map, mapTo, move, repeat, scan, skipFirst, startWith, takeFirst, takeLast, takeWhile, toIterable, toRunnable, zip, zipEnumerators, zipWith };

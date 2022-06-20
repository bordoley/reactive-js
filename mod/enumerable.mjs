/// <reference types="./enumerable.d.ts" />
import { pipe, strictEquality, alwaysTrue, identity } from './functions.mjs';
import { AbstractDisposable, addDisposableDisposeParentOnChildError, addTeardown, bindDisposables } from './disposable.mjs';
import { none, isNone, isSome } from './option.mjs';
import { AbstractContainer, empty } from './container.mjs';
import { createRunnable } from './runnable.mjs';
import { everySatisfy, map as map$1 } from './readonlyArray.mjs';

const enumerate = (enumerable) => enumerable.enumerate();
const current = (enumerator) => enumerator.current;
const hasCurrent = (enumerator) => enumerator.hasCurrent;
const move = (enumerator) => enumerator.move();
class AbstractDelegatingEnumerator {
    constructor(delegate) {
        this.delegate = delegate;
    }
    get error() {
        return this.delegate.error;
    }
    get isDisposed() {
        return this.delegate.isDisposed;
    }
    add(disposable) {
        this.delegate.add(disposable);
    }
    dispose(error) {
        this.delegate.dispose(error);
    }
}

class LiftedEnumerableLike extends AbstractContainer {
    constructor(src, operators) {
        super();
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

class ConcatAllEnumerator extends AbstractDisposable {
    constructor(delegate) {
        super();
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
            const enumerator = enumerate(delegate.current);
            addDisposableDisposeParentOnChildError(this, enumerator);
            this.enumerator = enumerator;
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
        if (!this.hasCurrent) {
            this.dispose();
        }
        return this.hasCurrent;
    }
}
const operator = (delegate) => {
    const enumerator = new ConcatAllEnumerator(delegate);
    addDisposableDisposeParentOnChildError(enumerator, delegate);
    addTeardown(enumerator, () => {
        enumerator.enumerator = none;
    });
    return enumerator;
};
const _concatAll = lift(operator);
/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
const concatAll = () => _concatAll;

class ArrayEnumerator extends AbstractDisposable {
    constructor(array, index, endIndex) {
        super();
        this.array = array;
        this.index = index;
        this.endIndex = endIndex;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        const array = this.array;
        let hasCurrent = false;
        if (!this.isDisposed) {
            this.index++;
            const index = this.index;
            if (index < this.endIndex) {
                hasCurrent = true;
                this.hasCurrent = true;
                this.current = array[index];
            }
            else {
                this.hasCurrent = false;
                this.dispose();
            }
        }
        return hasCurrent;
    }
}
class ArrayEnumerable extends AbstractContainer {
    constructor(values, startIndex, endIndex) {
        super();
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
const fromArrayT = {
    fromArray,
};

function concat(...enumerables) {
    return pipe(enumerables, fromArray(), concatAll());
}

class DistinctUntilChangedEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, equality) {
        super(delegate);
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

class IteratorEnumerator extends AbstractDisposable {
    constructor(iterator) {
        super();
        this.iterator = iterator;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        this.hasCurrent = false;
        this.current = none;
        if (!this.isDisposed) {
            const next = this.iterator.next();
            if (!next.done) {
                this.hasCurrent = true;
                this.current = next.value;
            }
            else {
                this.dispose();
            }
        }
        return this.hasCurrent;
    }
}
class IteratorEnumerable extends AbstractContainer {
    constructor(f) {
        super();
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

class GenerateEnumerator extends AbstractDisposable {
    constructor(f, acc) {
        super();
        this.f = f;
        this.hasCurrent = false;
        this.current = acc;
    }
    move() {
        if (this.isDisposed) {
            this.hasCurrent = false;
        }
        else {
            try {
                this.current = this.f(this.current);
                this.hasCurrent = true;
            }
            catch (cause) {
                this.dispose({ cause });
            }
        }
        return this.hasCurrent;
    }
}
class GenerateEnumerable extends AbstractContainer {
    constructor(f, acc) {
        super();
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

class KeepEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        const delegate = this.delegate;
        const predicate = this.predicate;
        try {
            while (delegate.move() && !predicate(delegate.current)) { }
        }
        catch (cause) {
            this.dispose({ cause });
        }
        return this.hasCurrent;
    }
}
/**
 * Returns an `EnumerableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
const keep = (predicate) => {
    const operator = (enumerator) => new KeepEnumerator(enumerator, predicate);
    return lift(operator);
};
const keepT = {
    keep,
};

class MapEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
        this.current = none;
        this.hasCurrent = false;
    }
    move() {
        this.current = none;
        this.hasCurrent = false;
        try {
            if (this.delegate.move()) {
                this.current = this.mapper(this.delegate.current);
                this.hasCurrent = true;
            }
        }
        catch (cause) {
            this.hasCurrent = false;
        }
        return this.hasCurrent;
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

function enumerateSrc(self) {
    self.enumerator = enumerate(self.src);
    addDisposableDisposeParentOnChildError(self, self.enumerator);
}
class RepeatEnumerator extends AbstractDisposable {
    constructor(src, shouldRepeat) {
        super();
        this.src = src;
        this.shouldRepeat = shouldRepeat;
        this.enumerator = undefined;
        this.count = 0;
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
            let doRepeat = false;
            try {
                doRepeat = this.shouldRepeat(this.count);
            }
            catch (cause) {
                this.dispose({ cause });
            }
            if (doRepeat) {
                enumerateSrc(this);
                this.enumerator.move();
            }
        }
        return this.hasCurrent;
    }
}
class RepeatEnumerable extends AbstractContainer {
    constructor(src, shouldRepeat) {
        super();
        this.src = src;
        this.shouldRepeat = shouldRepeat;
    }
    enumerate() {
        const enumerator = new RepeatEnumerator(this.src, this.shouldRepeat);
        enumerateSrc(enumerator);
        return enumerator;
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

class ScanEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, reducer, current) {
        super(delegate);
        this.reducer = reducer;
        this.current = current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        const delegate = this.delegate;
        if (delegate.move()) {
            try {
                this.current = this.reducer(this.current, this.delegate.current);
            }
            catch (cause) {
                this.dispose({ cause });
            }
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

class SkipFirstEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, skipCount) {
        super(delegate);
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

class TakeFirstEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, maxCount) {
        super(delegate);
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
        else {
            this.dispose();
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

class TakeLastEnumerator extends AbstractDisposable {
    constructor(delegate, maxCount) {
        super();
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
            bindDisposables(this, this.enumerator);
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
    const operator = (delegate) => {
        const enumerator = new TakeLastEnumerator(delegate, count);
        addDisposableDisposeParentOnChildError(enumerator, delegate);
        return enumerator;
    };
    return enumerable => count > 0
        ? pipe(enumerable, lift(operator))
        : // FIXME: why do we need the annotations?
            empty(fromArrayT);
};

class TakeWhileEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
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
            try {
                const satisfiesPredicate = this.predicate(delegate.current);
                if (!satisfiesPredicate && this.inclusive) {
                    this.state++;
                }
                else if (!satisfiesPredicate) {
                    this.state = 2;
                }
            }
            catch (cause) {
                this.dispose({ cause });
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
        addDisposableDisposeParentOnChildError(enumerator, sink);
        while (enumerator.move()) {
            sink.notify(enumerator.current);
        }
        enumerator.dispose();
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
class ZipEnumerator extends AbstractDisposable {
    constructor(enumerators) {
        super();
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
        if (!hasCurrent) {
            this.dispose();
        }
        return hasCurrent;
    }
}
const zipEnumerators = (enumerators) => {
    const enumerator = new ZipEnumerator(enumerators);
    for (const delegate of enumerators) {
        addDisposableDisposeParentOnChildError(enumerator, delegate);
    }
    return enumerator;
};
class ZipEnumerable extends AbstractContainer {
    constructor(enumerables) {
        super();
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

const toEnumerable = () => identity;
const type = undefined;

export { concat, concatAll, current, distinctUntilChanged, enumerate, fromArray, fromArrayT, fromIterable, fromIterator, generate, hasCurrent, keep, keepT, map, move, repeat, scan, skipFirst, takeFirst, takeLast, takeWhile, toEnumerable, toIterable, toRunnable, type, zip, zipEnumerators };

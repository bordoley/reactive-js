/// <reference types="./enumerable.d.ts" />
import { AbstractDisposableContainer, empty } from './container.mjs';
import { addTeardown, createSerialDisposable, bindDisposables, addDisposableDisposeParentOnChildError, dispose } from './disposable.mjs';
import { raise, pipe, alwaysTrue, identity } from './functions.mjs';
import { none, isNone, isSome } from './option.mjs';
import { AbstractLiftable, createDistinctUntilChangedLiftedOperator, createKeepLiftedOperator, createMapLiftedOperator, createOnNotifyLiftedOperator, createPairwiseLiftedOperator, createScanLiftedOperator, createSkipFirstLiftedOperator, createTakeFirstLiftdOperator, createTakeWhileLiftedOperator, createThrowIfEmptyLiftedOperator } from './liftable.mjs';
import { createRunnable } from './runnable.mjs';
import { everySatisfy, map as map$1 } from './readonlyArray.mjs';

class Enumerator extends AbstractDisposableContainer {
}
class EnumeratorBase extends Enumerator {
    constructor() {
        super();
        this._current = none;
        this._hasCurrent = false;
        addTeardown(this, () => {
            this.reset();
        });
    }
    get current() {
        return this.hasCurrent ? this._current : raise();
    }
    set current(v) {
        if (!this.isDisposed) {
            this._current = v;
            this._hasCurrent = true;
        }
    }
    get hasCurrent() {
        return this._hasCurrent;
    }
    reset() {
        this._current = none;
        this._hasCurrent = false;
    }
    move() {
        return false;
    }
}
class DelegatingEnumeratorBase extends Enumerator {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    get current() {
        return this.delegate.current;
    }
    get hasCurrent() {
        return this.delegate.hasCurrent;
    }
    move() {
        return this.delegate.move();
    }
}
const enumerate = (enumerable) => enumerable.enumerate();
const current = (enumerator) => enumerator.current;
const hasCurrent = (enumerator) => enumerator.hasCurrent;
const move = (enumerator) => enumerator.move();

class LiftedEnumerableLike extends AbstractLiftable {
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
const liftT = {
    variance: "covariant",
    lift,
};

class ConcatAllEnumerator extends EnumeratorBase {
    constructor(delegate, enumerator) {
        super();
        this.delegate = delegate;
        this.enumerator = enumerator;
    }
    move() {
        this.reset();
        const { delegate, enumerator } = this;
        if (enumerator.inner.isDisposed && delegate.move()) {
            enumerator.inner = enumerate(delegate.current);
        }
        while (enumerator.inner instanceof Enumerator &&
            !enumerator.inner.isDisposed) {
            if (enumerator.inner.move()) {
                this.current = enumerator.inner.current;
                break;
            }
            else if (delegate.move()) {
                enumerator.inner = enumerate(delegate.current);
            }
            else {
                this.dispose();
            }
        }
        return this.hasCurrent;
    }
}
const operator = (delegate) => {
    const inner = createSerialDisposable();
    const enumerator = new ConcatAllEnumerator(delegate, inner);
    bindDisposables(enumerator, inner);
    addDisposableDisposeParentOnChildError(enumerator, delegate);
    return enumerator;
};
/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
const concatAll = () => lift(operator);

class ArrayEnumerator extends EnumeratorBase {
    constructor(array, index, endIndex) {
        super();
        this.array = array;
        this.index = index;
        this.endIndex = endIndex;
    }
    move() {
        this.reset();
        const { array } = this;
        if (!this.isDisposed) {
            this.index++;
            const { index, endIndex } = this;
            if (index < endIndex) {
                this.current = array[index];
            }
            else {
                this.dispose();
            }
        }
        return this.hasCurrent;
    }
}
class ArrayEnumerable extends AbstractLiftable {
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

class IteratorEnumerator extends Enumerator {
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
class IteratorEnumerable extends AbstractLiftable {
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

class GenerateEnumerator extends EnumeratorBase {
    constructor(f, acc) {
        super();
        this.f = f;
        this.current = acc;
    }
    move() {
        if (!this.isDisposed) {
            try {
                this.current = this.f(this.current);
            }
            catch (cause) {
                this.dispose({ cause });
            }
        }
        return this.hasCurrent;
    }
}
class GenerateEnumerable extends AbstractLiftable {
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

class RepeatEnumerator extends Enumerator {
    constructor(src, shouldRepeat) {
        super();
        this.src = src;
        this.shouldRepeat = shouldRepeat;
        this.count = 0;
    }
    get current() {
        var _a, _b;
        return this.hasCurrent ? (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.current) !== null && _b !== void 0 ? _b : raise() : raise();
    }
    get hasCurrent() {
        var _a, _b;
        return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.hasCurrent) !== null && _b !== void 0 ? _b : false;
    }
    move() {
        if (isNone(this.enumerator)) {
            this.enumerator = enumerate(this.src);
            addDisposableDisposeParentOnChildError(this, this.enumerator);
        }
        while (!this.enumerator.move()) {
            this.count++;
            try {
                if (this.shouldRepeat(this.count)) {
                    this.enumerator = enumerate(this.src);
                    addDisposableDisposeParentOnChildError(this, this.enumerator);
                }
                else {
                    break;
                }
            }
            catch (cause) {
                this.dispose({ cause });
                break;
            }
        }
        return this.hasCurrent;
    }
}
class RepeatEnumerable extends AbstractLiftable {
    constructor(src, shouldRepeat) {
        super();
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

class TakeLastEnumerator extends Enumerator {
    constructor(delegate, maxCount) {
        super();
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.enumerator = none;
    }
    get current() {
        var _a;
        return this.hasCurrent ? (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.current : raise();
    }
    get hasCurrent() {
        var _a, _b;
        return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.hasCurrent) !== null && _b !== void 0 ? _b : false;
    }
    move() {
        const { delegate } = this;
        if (!this.isDisposed && isNone(this.enumerator)) {
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
        if (isSome(this.enumerator)) {
            this.enumerator.move();
        }
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
class ZipEnumerator extends EnumeratorBase {
    constructor(enumerators) {
        super();
        this.enumerators = enumerators;
    }
    move() {
        this.reset();
        if (!this.isDisposed) {
            const { enumerators } = this;
            moveAll(enumerators);
            if (allHaveCurrent(enumerators)) {
                this.current = pipe(enumerators, map$1(current));
            }
            else {
                this.dispose();
            }
        }
        return this.hasCurrent;
    }
}
const zipEnumerators = (enumerators) => {
    const enumerator = new ZipEnumerator(enumerators);
    for (const delegate of enumerators) {
        addDisposableDisposeParentOnChildError(enumerator, delegate);
    }
    return enumerator;
};
class ZipEnumerable extends AbstractLiftable {
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
function concat(...enumerables) {
    return pipe(enumerables, fromArray(), concatAll());
}
const concatT = {
    concat,
};
const distinctUntilChanged = createDistinctUntilChangedLiftedOperator(liftT, class DistinctUntilChangedEnumerator extends DelegatingEnumeratorBase {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
    }
    move() {
        const hadCurrent = this.hasCurrent;
        const prevCurrent = hadCurrent ? this.current : none;
        try {
            while (this.delegate.move()) {
                if (!hadCurrent ||
                    !this.equality(prevCurrent, this.delegate.current)) {
                    break;
                }
            }
        }
        catch (cause) {
            pipe(this, dispose({ cause }));
        }
        return this.hasCurrent;
    }
});
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const keep = createKeepLiftedOperator(liftT, class KeepEnumerator extends DelegatingEnumeratorBase {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
    move() {
        const { delegate, predicate } = this;
        try {
            while (delegate.move() && !predicate(delegate.current)) { }
        }
        catch (cause) {
            pipe(this, dispose({ cause }));
        }
        return this.hasCurrent;
    }
});
const keepT = {
    keep,
};
const map = createMapLiftedOperator(liftT, class MapEnumerator extends EnumeratorBase {
    constructor(delegate, mapper) {
        super();
        this.delegate = delegate;
        this.mapper = mapper;
    }
    move() {
        this.reset();
        if (this.delegate.move()) {
            try {
                this.current = this.mapper(this.delegate.current);
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        }
        return this.hasCurrent;
    }
});
const mapT = {
    map,
};
const onNotify = createOnNotifyLiftedOperator(liftT, class OnNotifyEnumerator extends DelegatingEnumeratorBase {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
    }
    move() {
        const { delegate } = this;
        if (delegate.move()) {
            try {
                this.onNotify(this.current);
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        }
        return this.hasCurrent;
    }
});
const pairwise = createPairwiseLiftedOperator(liftT, class PairwiseEnumerator extends EnumeratorBase {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    move() {
        const prev = (this.hasCurrent ? this.current : [])[1];
        this.reset();
        const { delegate } = this;
        if (delegate.move()) {
            const { current } = delegate;
            this.current = [prev, current];
        }
        return this.hasCurrent;
    }
});
const pairwiseT = {
    pairwise,
};
const scan = createScanLiftedOperator(liftT, class ScanEnumerator extends EnumeratorBase {
    constructor(delegate, reducer, current) {
        super();
        this.delegate = delegate;
        this.reducer = reducer;
        this.current = current;
    }
    move() {
        const acc = this.hasCurrent ? this.current : none;
        this.reset();
        const { delegate, reducer } = this;
        if (isSome(acc) && delegate.move()) {
            try {
                this.current = reducer(acc, delegate.current);
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        }
        return this.hasCurrent;
    }
});
const scanT = {
    scan,
};
const skipFirst = createSkipFirstLiftedOperator(liftT, class SkipFirstEnumerator extends DelegatingEnumeratorBase {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
    move() {
        const { delegate, skipCount } = this;
        for (let { count } = this; count < skipCount; count++) {
            if (!delegate.move()) {
                break;
            }
        }
        this.count = skipCount;
        return delegate.move();
    }
});
const skipFirstT = {
    skipFirst,
};
const takeFirst = createTakeFirstLiftdOperator({ ...fromArrayT, ...liftT }, class TakeFirstEnumerator extends DelegatingEnumeratorBase {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
    get current() {
        return this.delegate.current;
    }
    move() {
        if (this.count < this.maxCount) {
            this.count++;
            this.delegate.move();
        }
        else {
            this.dispose();
        }
        return this.hasCurrent;
    }
});
const takeFirstT = {
    takeFirst,
};
const takeWhile = createTakeWhileLiftedOperator(liftT, class TakeWhileEnumerator extends DelegatingEnumeratorBase {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
        this.done = false;
    }
    move() {
        const { delegate, inclusive, predicate } = this;
        if (this.done && !this.isDisposed) {
            pipe(this, dispose());
        }
        else if (delegate.move()) {
            const { current } = delegate;
            try {
                const satisfiesPredicate = predicate(current);
                if (!satisfiesPredicate && inclusive) {
                    this.done = true;
                }
                else if (!satisfiesPredicate) {
                    pipe(this, dispose());
                }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        }
        return this.hasCurrent;
    }
});
const takeWhileT = {
    takeWhile,
};
const throwIfEmpty = createThrowIfEmptyLiftedOperator(liftT, class ThrowIfEmptyEnumerator extends DelegatingEnumeratorBase {
    constructor() {
        super(...arguments);
        this.isEmpty = true;
    }
    move() {
        if (this.move()) {
            this.isEmpty = false;
        }
        return this.hasCurrent;
    }
});
const throwIfEmptyT = {
    throwIfEmpty,
};
class UsingEnumerable extends AbstractLiftable {
    constructor(resourceFactory, sourceFactory) {
        super();
        this.resourceFactory = resourceFactory;
        this.sourceFactory = sourceFactory;
    }
    enumerate() {
        try {
            const resources = this.resourceFactory();
            const resourcesArray = Array.isArray(resources) ? resources : [resources];
            const source = this.sourceFactory(...resourcesArray);
            const enumerator = enumerate(source);
            for (const r of resourcesArray) {
                addDisposableDisposeParentOnChildError(enumerator, r);
            }
            return enumerator;
        }
        catch (cause) {
            const enumerator = pipe(empty(fromArrayT), enumerate);
            enumerator.dispose({ cause });
            return enumerator;
        }
    }
}
function using(resourceFactory, enumerableFactory) {
    return new UsingEnumerable(resourceFactory, enumerableFactory);
}
const usingT = {
    using,
};

export { DelegatingEnumeratorBase, Enumerator, EnumeratorBase, concat, concatAll, concatT, current, distinctUntilChanged, distinctUntilChangedT, enumerate, fromArray, fromArrayT, fromIterable, fromIterator, generate, hasCurrent, keep, keepT, map, mapT, move, onNotify, pairwise, pairwiseT, repeat, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toIterable, toRunnable, type, using, usingT, zip, zipEnumerators };

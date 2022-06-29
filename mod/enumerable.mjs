/// <reference types="./enumerable.d.ts" />
import { isDisposed, dispose, createSerialDisposable, bindTo, add, addTo } from './disposable.mjs';
import { AbstractEnumerator, reset, hasCurrent, AbstractDelegatingEnumerator, move, Enumerator, current, forEach, zip as zip$1, AbstractPassThroughEnumerator } from './enumerator.mjs';
import { pipe, raise, alwaysTrue, identity } from './functions.mjs';
import { empty } from './container.mjs';
import { AbstractLiftable, covariant, createDistinctUntilChangedLiftOperator, createKeepLiftOperator, createMapLiftOperator, createOnNotifyLiftOperator, createPairwiseLiftOperator, createScanLiftOperator, createSkipFirstLiftOperator, createTakeFirstLiftOperator, delegate, createTakeWhileLiftOperator, createThrowIfEmptyLiftOperator } from './liftable.mjs';
import { none, isNone, isSome } from './option.mjs';
import { map as map$1, empty as empty$1, forEach as forEach$1 } from './readonlyArray.mjs';
import { createRunnable } from './runnable.mjs';
import { notifySink } from './source.mjs';

class ArrayEnumerator extends AbstractEnumerator {
    constructor(array, index, endIndex) {
        super();
        this.array = array;
        this.index = index;
        this.endIndex = endIndex;
    }
    move() {
        reset(this);
        const { array } = this;
        if (!isDisposed(this)) {
            this.index++;
            const { index, endIndex } = this;
            if (index < endIndex) {
                this.current = array[index];
            }
            else {
                pipe(this, dispose());
            }
        }
        return hasCurrent(this);
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
    return createEnumerable(() => new ArrayEnumerator(values, startIndex - 1, endIndex));
};
const fromArrayT = {
    fromArray,
};

class AbstractEnumerable extends AbstractLiftable {
}
class CreateEnumerable extends AbstractEnumerable {
    constructor(_enumerate) {
        super();
        this._enumerate = _enumerate;
    }
    enumerate() {
        try {
            return this._enumerate();
        }
        catch (cause) {
            return pipe(empty(fromArrayT), enumerate, dispose({ cause }));
        }
    }
}
const createEnumerable = (enumerate) => new CreateEnumerable(enumerate);
const enumerate = (enumerable) => enumerable.enumerate();

class LiftedEnumerable extends AbstractEnumerable {
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
    const src = enumerable instanceof LiftedEnumerable ? enumerable.src : enumerable;
    const allFunctions = enumerable instanceof LiftedEnumerable
        ? [...enumerable.operators, operator]
        : [operator];
    return new LiftedEnumerable(src, allFunctions);
};
const liftT = {
    variance: covariant,
    lift,
};

class ConcatAllEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, enumerator) {
        super(delegate);
        this.enumerator = enumerator;
    }
    move() {
        reset(this);
        const { delegate, enumerator } = this;
        if (isDisposed(enumerator.inner) && move(delegate)) {
            enumerator.inner = enumerate(delegate.current);
        }
        while (enumerator.inner instanceof Enumerator &&
            !isDisposed(enumerator.inner)) {
            if (move(enumerator.inner)) {
                this.current = current(enumerator.inner);
                break;
            }
            else if (move(delegate)) {
                enumerator.inner = enumerate(current(delegate));
            }
            else {
                pipe(this, dispose());
            }
        }
        return hasCurrent(this);
    }
}
const operator = (delegate) => {
    const inner = createSerialDisposable();
    return pipe(new ConcatAllEnumerator(delegate, inner), bindTo(inner), add(delegate));
};
/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
const concatAll = () => lift(operator);
const concatAllT = {
    concatAll,
};

class BufferEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, maxBufferSize) {
        super(delegate);
        this.maxBufferSize = maxBufferSize;
    }
    move() {
        reset(this);
        const buffer = [];
        const { delegate, maxBufferSize } = this;
        while (buffer.length < maxBufferSize && delegate.move()) {
            buffer.push(delegate.current);
        }
        const bufferLength = buffer.length;
        if (bufferLength > 0) {
            this.current = buffer;
        }
        if (bufferLength < maxBufferSize) {
            pipe(this, dispose());
        }
        return hasCurrent(this);
    }
}
const buffer = (options = {}) => {
    var _a;
    const maxBufferSize = Math.max((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER, 1);
    const operator = (delegate) => pipe(new BufferEnumerator(delegate, maxBufferSize), add(delegate));
    return lift(operator);
};
const bufferT = {
    buffer,
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
        if (!isDisposed(this)) {
            const next = this.iterator.next();
            if (!next.done) {
                this.hasCurrent = true;
                this.current = next.value;
            }
            else {
                pipe(this, dispose());
            }
        }
        return hasCurrent(this);
    }
}
const _fromIterator = (f) => createEnumerable(() => {
    const iterator = f();
    const enumerator = new IteratorEnumerator(iterator);
    return enumerator;
});
/**
 * Returns a single use EnumerableLike over the javascript Iterator
 * returned by the function `f`.
 *
 * @param f
 */
const fromIterator = () => _fromIterator;
const fromIteratorT = {
    fromIterator,
};
const _fromIterable = (iterable) => _fromIterator(() => iterable[Symbol.iterator]());
/**
 * Converts a javascript Iterable to an EnumerableLike.
 *
 * @param iterable
 */
const fromIterable = () => _fromIterable;
const fromIterableT = {
    fromIterable,
};

class GenerateEnumerator extends AbstractEnumerator {
    constructor(f, acc) {
        super();
        this.f = f;
        this.current = acc;
    }
    move() {
        if (!isDisposed(this)) {
            try {
                this.current = this.f(current(this));
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        }
        return hasCurrent(this);
    }
}
/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
const generate = (generator, initialValue) => createEnumerable(() => new GenerateEnumerator(generator, initialValue()));
const generateT = {
    generate,
};

class RepeatEnumerator extends Enumerator {
    constructor(src, shouldRepeat) {
        super();
        this.src = src;
        this.shouldRepeat = shouldRepeat;
        this.count = 0;
    }
    get current() {
        var _a, _b;
        return hasCurrent(this) ? (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.current) !== null && _b !== void 0 ? _b : raise() : raise();
    }
    get hasCurrent() {
        var _a, _b;
        return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.hasCurrent) !== null && _b !== void 0 ? _b : false;
    }
    move() {
        if (isNone(this.enumerator)) {
            this.enumerator = pipe(this.src, enumerate, addTo(this));
        }
        while (!move(this.enumerator)) {
            this.count++;
            try {
                if (this.shouldRepeat(this.count)) {
                    this.enumerator = pipe(this.src, enumerate, addTo(this));
                }
                else {
                    break;
                }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
                break;
            }
        }
        return hasCurrent(this);
    }
}
function repeat(predicate) {
    const repeatPredicate = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return enumerable => createEnumerable(() => new RepeatEnumerator(enumerable, repeatPredicate));
}
const repeatT = {
    repeat,
};

class TakeLastEnumerator extends Enumerator {
    constructor(delegate, maxCount) {
        super();
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.enumerator = none;
    }
    get current() {
        var _a;
        return hasCurrent(this) ? (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.current : raise();
    }
    get hasCurrent() {
        var _a, _b;
        return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a.hasCurrent) !== null && _b !== void 0 ? _b : false;
    }
    move() {
        const { delegate } = this;
        if (!isDisposed(this) && isNone(this.enumerator)) {
            const last = [];
            while (move(delegate)) {
                last.push(current(delegate));
                if (last.length > this.maxCount) {
                    last.shift();
                }
            }
            this.enumerator = pipe(last, fromArray(), enumerate, bindTo(this));
        }
        if (isSome(this.enumerator)) {
            move(this.enumerator);
        }
        return hasCurrent(this);
    }
}
/**
 * Returns an EnumerableLike that only yields the last `count` items yielded by the source.
 *
 * @param count The maximum number of values to emit.
 */
const takeLast = (options = {}) => {
    const { count = 1 } = options;
    const operator = (delegate) => pipe(new TakeLastEnumerator(delegate, count), add(delegate));
    return enumerable => count > 0
        ? pipe(enumerable, lift(operator))
        : // FIXME: why do we need the annotations?
            empty(fromArrayT);
};
const takeLastT = {
    takeLast,
};

const enumeratorToRunnable = (f) => {
    const run = (sink) => {
        pipe(f(), add(sink), forEach(notifySink(sink)), dispose());
    };
    return createRunnable(run);
};
const _toRunnable = (enumerable) => enumeratorToRunnable(() => enumerable.enumerate());
const toRunnable = () => _toRunnable;
const toRunnableT = {
    toRunnable,
};

class EnumerableIterable {
    constructor(enumerable) {
        this.enumerable = enumerable;
    }
    *[Symbol.iterator]() {
        const enumerator = enumerate(this.enumerable);
        while (move(enumerator)) {
            yield current(enumerator);
        }
    }
}
const _toIterable = (source) => new EnumerableIterable(source);
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
const toIterable = () => _toIterable;

/**
 * Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
 * in order, of each of its inputs.
 */
const _zip = (...enumerables) => createEnumerable(() => pipe(enumerables, map$1(enumerate), a => zip$1(...a)));
const zip = _zip;
const zipT = {
    zip,
};

const toEnumerable = () => identity;
const type = undefined;
function concat(...enumerables) {
    return pipe(enumerables, fromArray(), concatAll());
}
const concatT = {
    concat,
};
const distinctUntilChanged = createDistinctUntilChangedLiftOperator(liftT, class DistinctUntilChangedEnumerator extends AbstractPassThroughEnumerator {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
    }
    move() {
        const hadCurrent = hasCurrent(this);
        const prevCurrent = hadCurrent ? current(this) : none;
        try {
            const { delegate } = this;
            while (move(delegate)) {
                if (!hadCurrent ||
                    !this.equality(prevCurrent, current(delegate))) {
                    break;
                }
            }
        }
        catch (cause) {
            pipe(this, dispose({ cause }));
        }
        return hasCurrent(this);
    }
});
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const keep = createKeepLiftOperator(liftT, class KeepEnumerator extends AbstractPassThroughEnumerator {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
    move() {
        const { delegate, predicate } = this;
        try {
            while (move(delegate) && !predicate(current(delegate))) { }
        }
        catch (cause) {
            pipe(this, dispose({ cause }));
        }
        return hasCurrent(this);
    }
});
const keepT = {
    keep,
};
const map = createMapLiftOperator(liftT, class MapEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
    move() {
        reset(this);
        const { delegate } = this;
        if (move(delegate)) {
            try {
                this.current = this.mapper(current(delegate));
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        }
        return hasCurrent(this);
    }
});
const mapT = {
    map,
};
const onNotify = createOnNotifyLiftOperator(liftT, class OnNotifyEnumerator extends AbstractPassThroughEnumerator {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
    }
    move() {
        const { delegate } = this;
        if (move(delegate)) {
            try {
                this.onNotify(current(this));
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        }
        return hasCurrent(this);
    }
});
const pairwise = createPairwiseLiftOperator(liftT, class PairwiseEnumerator extends AbstractDelegatingEnumerator {
    move() {
        const prev = (hasCurrent(this) ? current(this) : empty$1)[1];
        reset(this);
        const { delegate } = this;
        if (move(delegate)) {
            const { current } = delegate;
            this.current = [prev, current];
        }
        return hasCurrent(this);
    }
});
const pairwiseT = {
    pairwise,
};
const scan = createScanLiftOperator(liftT, class ScanEnumerator extends AbstractDelegatingEnumerator {
    constructor(delegate, reducer, current) {
        super(delegate);
        this.reducer = reducer;
        this.current = current;
    }
    move() {
        const acc = hasCurrent(this) ? current(this) : none;
        reset(this);
        const { delegate, reducer } = this;
        if (isSome(acc) && move(delegate)) {
            try {
                this.current = reducer(acc, current(delegate));
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        }
        return hasCurrent(this);
    }
});
const scanT = {
    scan,
};
const skipFirst = createSkipFirstLiftOperator(liftT, class SkipFirstEnumerator extends AbstractPassThroughEnumerator {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
    move() {
        const { delegate, skipCount } = this;
        for (let { count } = this; count < skipCount; count++) {
            if (!move(delegate)) {
                break;
            }
        }
        this.count = skipCount;
        return move(delegate);
    }
});
const skipFirstT = {
    skipFirst,
};
const takeFirst = createTakeFirstLiftOperator({ ...fromArrayT, ...liftT }, class TakeFirstEnumerator extends AbstractPassThroughEnumerator {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
    get current() {
        return current(delegate(this));
    }
    move() {
        if (this.count < this.maxCount) {
            this.count++;
            move(delegate(this));
        }
        else {
            pipe(this, dispose());
        }
        return hasCurrent(this);
    }
});
const takeFirstT = {
    takeFirst,
};
const takeWhile = createTakeWhileLiftOperator(liftT, class TakeWhileEnumerator extends AbstractPassThroughEnumerator {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
        this.done = false;
    }
    move() {
        const { delegate, inclusive, predicate } = this;
        if (this.done && !isDisposed(this)) {
            pipe(this, dispose());
        }
        else if (move(delegate)) {
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
        return hasCurrent(this);
    }
});
const takeWhileT = {
    takeWhile,
};
const throwIfEmpty = createThrowIfEmptyLiftOperator(liftT, class ThrowIfEmptyEnumerator extends AbstractPassThroughEnumerator {
    constructor() {
        super(...arguments);
        this.isEmpty = true;
    }
    move() {
        if (move(delegate(this))) {
            this.isEmpty = false;
        }
        return hasCurrent(this);
    }
});
const throwIfEmptyT = {
    throwIfEmpty,
};
const _using = (resourceFactory, enumerableFactory) => createEnumerable(() => {
    const resources = resourceFactory();
    const resourcesArray = Array.isArray(resources) ? resources : [resources];
    const source = enumerableFactory(...resourcesArray);
    const enumerator = enumerate(source);
    pipe(resources, forEach$1(addTo(enumerator)));
    return enumerator;
});
const using = _using;
const usingT = {
    using,
};

export { AbstractEnumerable, buffer, bufferT, concat, concatAll, concatAllT, concatT, createEnumerable, distinctUntilChanged, distinctUntilChangedT, enumerate, fromArray, fromArrayT, fromIterable, fromIterableT, fromIterator, fromIteratorT, generate, generateT, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toIterable, toRunnable, toRunnableT, type, using, usingT, zip, zipT };

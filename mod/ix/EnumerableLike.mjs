/// <reference types="./EnumerableLike.d.ts" />
import { interactive, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { MAX_SAFE_INTEGER } from '../__internal__/env.mjs';
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { prototype } from '../__internal__/util/DelegatingDisposable.mjs';
import { prototype as prototype$4, move as move$1 } from '../__internal__/util/DelegatingEnumerator.mjs';
import { prototype as prototype$2 } from '../__internal__/util/Disposable.mjs';
import { prototype as prototype$3 } from '../__internal__/util/DisposableRefLike.mjs';
import { prototype as prototype$1, neverEnumerator } from '../__internal__/util/Enumerator.mjs';
import { getCurrentRef, setCurrentRef } from '../__internal__/util/MutableRefLike.mjs';
import { Object_properties, anyProperty, Object_init, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { emptyReadonlyArray } from '../containers.mjs';
import { toEnumerable as toEnumerable$1, every, map as map$1 } from '../containers/ReadonlyArrayLike.mjs';
import { none, pipeUnsafe, newInstance, pipe, getLength, max, returns, strictEquality, pipeLazy, isNone, raise, alwaysTrue, isSome, identity, forEach as forEach$1 } from '../functions.mjs';
import { InteractiveContainerLike_interact, createEnumerable, emptyEnumerableT, emptyEnumerable } from '../ix.mjs';
import { ObservableLike_observableType, RunnableObservable, EnumerableObservable, ReactiveContainerLike_sinkInto, createRunnable } from '../rx.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { schedule, __yield } from '../scheduling/SchedulerLike.mjs';
import { SourceLike_move, EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../util.mjs';
import { add, addTo, bindTo } from '../util/DisposableLike.mjs';
import { move, getCurrent, hasCurrent, forEach } from '../util/EnumeratorLike.mjs';
import { notifySink } from '../util/SinkLike.mjs';
import { dispose, isDisposed, getError } from '../__internal__/util/DisposableLikeInternal.mjs';

const enumerate = () => (enumerable) => enumerable[InteractiveContainerLike_interact](none);
const lift = /*@__PURE__*/ (() => {
    class LiftedEnumerable {
        constructor(src, operators) {
            this.src = src;
            this.operators = operators;
        }
        [InteractiveContainerLike_interact]() {
            return pipeUnsafe(this.src, enumerate(), ...this.operators);
        }
    }
    return (operator) => (enumerable) => {
        const src = enumerable instanceof LiftedEnumerable ? enumerable.src : enumerable;
        const allFunctions = enumerable instanceof LiftedEnumerable
            ? [...enumerable.operators, operator]
            : [operator];
        return newInstance(LiftedEnumerable, src, allFunctions);
    };
})();
const liftT = {
    lift,
    variance: interactive,
};
const delegatingDisposableEnumeratorPrototype = pipe({
    [Object_properties]: {
        delegate: anyProperty,
    },
    [Object_init](delegate) {
        init(prototype, this, delegate);
        init(prototype$1, this);
        this.delegate = delegate;
    },
}, mixWith(prototype, prototype$1));
const buffer = /*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: {
            delegate: anyProperty,
            maxBufferSize: 0,
        },
        [Object_init](delegate, maxBufferSize) {
            init(prototype$2, this);
            init(prototype$1, this);
            this.delegate = delegate;
            this.maxBufferSize = maxBufferSize;
        },
        [SourceLike_move]() {
            const buffer = [];
            const { delegate, maxBufferSize } = this;
            while (getLength(buffer) < maxBufferSize && move(delegate)) {
                buffer.push(getCurrent(delegate));
            }
            const bufferLength = getLength(buffer);
            if (bufferLength > 0) {
                this[EnumeratorLike_current] = buffer;
            }
            else if (bufferLength === 0) {
                pipe(this, dispose());
            }
        },
    }, mixWith(prototype$2, prototype$1), createObjectFactory());
    return (options = {}) => {
        var _a;
        const maxBufferSize = max((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
        const operator = (delegate) => pipe(createInstance(delegate, maxBufferSize), add(delegate));
        return lift(operator);
    };
})();
const bufferT = {
    buffer,
};
const concatAll = 
/*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: {
            delegate: anyProperty,
        },
        [Object_init](delegate) {
            init(prototype$2, this);
            init(prototype$3, this, neverEnumerator());
            init(prototype$1, this);
            this.delegate = delegate;
            pipe(this, add(delegate));
        },
        [SourceLike_move]() {
            const { delegate } = this;
            const innerEnumerator = getCurrentRef(this);
            if (isDisposed(innerEnumerator) && move(delegate)) {
                const next = pipe(delegate, getCurrent, enumerate());
                pipe(this, setCurrentRef(next));
            }
            while (!pipe(this, getCurrentRef, isDisposed)) {
                const innerEnumerator = getCurrentRef(this);
                if (move(innerEnumerator)) {
                    this[EnumeratorLike_current] = getCurrent(innerEnumerator);
                    break;
                }
                else if (move(delegate)) {
                    const next = pipe(delegate, getCurrent, enumerate());
                    pipe(this, setCurrentRef(next));
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }, mixWith(prototype$2, prototype$3, prototype$1), createObjectFactory());
    return returns(lift(createInstance));
})();
const concatAllT = { concatAll };
const concat = (...enumerables) => pipe(enumerables, toEnumerable$1(), concatAll());
const concatT = {
    concat,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: { equality: anyProperty },
        [Object_init](delegate, equality) {
            init(prototype, this, delegate);
            init(prototype$4, this, delegate);
            this.equality = equality;
        },
        [SourceLike_move]() {
            const hadCurrent = hasCurrent(this);
            const prevCurrent = hadCurrent ? getCurrent(this) : none;
            try {
                while (move$1(this)) {
                    if (!hadCurrent ||
                        !this.equality(prevCurrent, getCurrent(this))) {
                        break;
                    }
                }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
    }, mixWith(prototype, prototype$4), createObjectFactory());
    return (options) => {
        const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
        const operator = (delegate) => createInstance(delegate, equality);
        return lift(operator);
    };
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const keep = /*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: { predicate: anyProperty },
        [Object_init](delegate, predicate) {
            init(prototype, this, delegate);
            init(prototype$4, this, delegate);
            this.predicate = predicate;
        },
        [SourceLike_move]() {
            const { predicate } = this;
            try {
                while (move$1(this) &&
                    !predicate(getCurrent(this))) { }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
    }, mixWith(prototype, prototype$4), createObjectFactory());
    return (predicate) => {
        const operator = (delegate) => createInstance(delegate, predicate);
        return lift(operator);
    };
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: {
            mapper: anyProperty,
        },
        [Object_init](delegate, mapper) {
            init(delegatingDisposableEnumeratorPrototype, this, delegate);
            this.mapper = mapper;
        },
        [SourceLike_move]() {
            const { delegate } = this;
            if (move(delegate)) {
                try {
                    this[EnumeratorLike_current] = this.mapper(getCurrent(delegate));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    }, mixWith(delegatingDisposableEnumeratorPrototype), createObjectFactory());
    return (mapper) => {
        const operator = (delegate) => createInstance(delegate, mapper);
        return lift(operator);
    };
})();
const mapT = { map };
const onNotify = /*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: { onNotify: anyProperty },
        [Object_init](delegate, onNotify) {
            init(prototype, this, delegate);
            init(prototype$4, this, delegate);
            this.onNotify = onNotify;
        },
        [SourceLike_move]() {
            if (move$1(this)) {
                try {
                    this.onNotify(getCurrent(this));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    }, mixWith(prototype, prototype$4), createObjectFactory());
    return (onNotify) => {
        const operator = (delegate) => createInstance(delegate, onNotify);
        return lift(operator);
    };
})();
const pairwise = 
/*@__PURE__*/ (() => {
    const createInstance = pipe({
        [SourceLike_move]() {
            const prev = (hasCurrent(this) ? getCurrent(this) : emptyReadonlyArray())[1];
            const { delegate } = this;
            if (move(delegate)) {
                const current = getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
            }
        },
    }, mixWith(delegatingDisposableEnumeratorPrototype), createObjectFactory());
    const operator = (delegate) => createInstance(delegate);
    return pipeLazy(operator, lift);
})();
const pairwiseT = {
    pairwise,
};
const repeat = /*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: {
            count: 0,
            enumerator: none,
            shouldRepeat: none,
            src: none,
        },
        [Object_init](src, shouldRepeat) {
            init(prototype$2, this);
            this.src = src;
            this.shouldRepeat = shouldRepeat;
        },
        [SourceLike_move]() {
            if (isNone(this.enumerator)) {
                this.enumerator = pipe(this.src, enumerate(), addTo(this));
            }
            let { enumerator } = this;
            while (!move(enumerator)) {
                this.count++;
                try {
                    if (this.shouldRepeat(this.count)) {
                        enumerator = pipe(this.src, enumerate(), addTo(this));
                        this.enumerator = enumerator;
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
        },
        get [EnumeratorLike_current]() {
            var _a, _b;
            const self = this;
            return hasCurrent(this)
                ? (_b = (_a = self.enumerator) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_current]) !== null && _b !== void 0 ? _b : raise()
                : raise();
        },
        get [EnumeratorLike_hasCurrent]() {
            var _a, _b;
            const self = this;
            return (_b = (_a = self.enumerator) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_hasCurrent]) !== null && _b !== void 0 ? _b : false;
        },
    }, mixWith(prototype$2), createObjectFactory());
    return (predicate) => {
        const repeatPredicate = isNone(predicate)
            ? alwaysTrue
            : typeof predicate === "number"
                ? (count) => count < predicate
                : (count) => predicate(count);
        return (enumerable) => createEnumerable(() => createInstance(enumerable, repeatPredicate));
    };
})();
const repeatT = {
    repeat,
};
const scan = /*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: { reducer: anyProperty },
        [Object_init](delegate, reducer, initialValue) {
            init(delegatingDisposableEnumeratorPrototype, this, delegate);
            this.reducer = reducer;
            try {
                const acc = initialValue();
                this[EnumeratorLike_current] = acc;
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
        [SourceLike_move]() {
            const acc = hasCurrent(this) ? getCurrent(this) : none;
            const { delegate, reducer } = this;
            if (isSome(acc) && move(delegate)) {
                try {
                    this[EnumeratorLike_current] = reducer(acc, getCurrent(delegate));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    }, mixWith(delegatingDisposableEnumeratorPrototype), createObjectFactory());
    const scanEnumerator = (reducer, initialValue) => (delegate) => createInstance(delegate, reducer, initialValue);
    return pipe(scanEnumerator, createScanOperator(liftT));
})();
const scanT = {
    scan,
};
const skipFirst = 
/*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: {
            skipCount: 0,
            count: 0,
        },
        [Object_init](delegate, skipCount) {
            init(prototype, this, delegate);
            init(prototype$4, this, delegate);
            this.skipCount = skipCount;
            this.count = 0;
        },
        [SourceLike_move]() {
            const { skipCount } = this;
            for (let { count } = this; count < skipCount; count++) {
                if (!move$1(this)) {
                    break;
                }
            }
            this.count = skipCount;
            move$1(this);
        },
    }, mixWith(prototype, prototype$4), createObjectFactory());
    const skipFirstEnumerator = (skipCount) => (delegate) => createInstance(delegate, skipCount);
    return pipe(skipFirstEnumerator, createSkipFirstOperator(liftT));
})();
const skipFirstT = {
    skipFirst,
};
const takeFirst = 
/*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: {
            maxCount: 0,
            count: 0,
        },
        [Object_init](delegate, maxCount) {
            init(prototype, this, delegate);
            init(prototype$4, this, delegate);
            this.maxCount = maxCount;
        },
        [SourceLike_move]() {
            if (this.count < this.maxCount) {
                this.count++;
                move$1(this);
            }
            else {
                pipe(this, dispose());
            }
        },
    }, mixWith(prototype, prototype$4), createObjectFactory());
    const takeFirstEnumerator = (maxCount) => (delegate) => createInstance(delegate, maxCount);
    return pipe(takeFirstEnumerator, createTakeFirstOperator({ ...liftT, ...emptyEnumerableT }));
})();
const takeFirstT = {
    takeFirst,
};
const takeLast = 
/*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: {
            maxCount: 0,
            isStarted: false,
        },
        [Object_init](delegate, maxCount) {
            init(prototype$2, this);
            init(prototype$4, this, delegate);
            this.maxCount = maxCount;
            this.isStarted = false;
        },
        [SourceLike_move]() {
            if (!isDisposed(this) && !this.isStarted) {
                this.isStarted = true;
                const last = [];
                while (move$1(this)) {
                    last.push(getCurrent(this));
                    if (getLength(last) > this.maxCount) {
                        last.shift();
                    }
                }
                const enumerator = pipe(last, toEnumerable$1(), enumerate(), bindTo(this));
                init(prototype$4, this, enumerator);
            }
            move$1(this);
        },
    }, mixWith(prototype$2, prototype$4), createObjectFactory());
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = (delegate) => pipe(createInstance(delegate, count), add(delegate));
        return enumerable => count > 0
            ? pipe(enumerable, lift(operator))
            : // FIXME: why do we need the annotations?
                emptyEnumerable();
    };
})();
const takeLastT = { takeLast };
const takeWhile = 
/*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: {
            predicate: anyProperty,
            inclusive: false,
            done: false,
        },
        [Object_init](delegate, predicate, inclusive) {
            init(prototype, this, delegate);
            init(prototype$4, this, delegate);
            this.predicate = predicate;
            this.inclusive = inclusive;
        },
        [SourceLike_move]() {
            const { inclusive, predicate } = this;
            if (this.done && !isDisposed(this)) {
                pipe(this, dispose());
            }
            else if (move$1(this)) {
                const current = getCurrent(this);
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
        },
    }, mixWith(prototype, prototype$4), createObjectFactory());
    const takeWhileEnumerator = (predicate, inclusive) => (delegate) => createInstance(delegate, predicate, inclusive);
    return pipe(takeWhileEnumerator, createTakeWhileOperator(liftT));
})();
const takeWhileT = { takeWhile };
const TContainerOf = undefined;
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const createInstance = pipe({
        [Object_properties]: {
            isEmpty: true,
        },
        [Object_init](delegate) {
            init(prototype$2, this);
            init(prototype$4, this, delegate);
            this.isEmpty = true;
        },
        [SourceLike_move]() {
            if (move$1(this)) {
                this.isEmpty = false;
            }
        },
    }, mixWith(prototype$2, prototype$4), createObjectFactory());
    const throwIfEmptyEnumerator = () => (delegate) => createInstance(delegate);
    return pipe(throwIfEmptyEnumerator, createThrowIfEmptyOperator(liftT));
})();
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = () => identity;
const toEnumerableT = {
    toEnumerable,
};
const toObservable = /*@__PURE__*/ (() => {
    class ToEnumerableObservable {
        constructor(enumerable, delay) {
            this.enumerable = enumerable;
            this.delay = delay;
        }
        get [ObservableLike_observableType]() {
            return this.delay > 0 ? RunnableObservable : EnumerableObservable;
        }
        [ReactiveContainerLike_sinkInto](observer) {
            const enumerator = pipe(this.enumerable, enumerate(), bindTo(observer));
            const options = { delay: this.delay };
            pipe(observer, getScheduler, schedule(() => {
                while (!isDisposed(observer) && move(enumerator)) {
                    pipe(enumerator, getCurrent, notifySink(observer));
                    __yield(options);
                }
            }, options));
        }
    }
    return (options) => (enumerable) => {
        const delay = getDelay(options);
        return newInstance(ToEnumerableObservable, enumerable, delay);
    };
})();
const toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, enumerate());
    const result = [];
    while (move(enumerator)) {
        result.push(getCurrent(enumerator));
    }
    const error = getError(enumerator);
    if (isSome(error)) {
        throw error.cause;
    }
    return result;
};
const toReadonlyArrayT = {
    toReadonlyArray,
};
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
const toIterable = 
/*@__PURE__*/ (() => {
    class EnumerableIterable {
        constructor(enumerable) {
            this.enumerable = enumerable;
        }
        *[Symbol.iterator]() {
            const enumerator = pipe(this.enumerable, enumerate());
            while (move(enumerator)) {
                yield getCurrent(enumerator);
            }
        }
    }
    // FIXME: InstanceFactory?
    return () => enumerable => newInstance(EnumerableIterable, enumerable);
})();
const toIterableT = { toIterable };
const toRunnable = 
/*@__PURE__*/ (() => {
    const enumeratorToRunnable = (f) => {
        const run = (sink) => {
            pipe(f(), add(sink), forEach(notifySink(sink)), dispose());
        };
        return createRunnable(run);
    };
    return () => (enumerable) => enumeratorToRunnable(() => enumerable[InteractiveContainerLike_interact]());
})();
const toRunnableT = {
    toRunnable,
};
const zip = /*@__PURE__*/ (() => {
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            move(enumerator);
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, every(hasCurrent));
    const createInstance = pipe({
        [Object_properties]: {
            enumerators: anyProperty,
        },
        [Object_init](enumerators) {
            init(prototype$2, this);
            init(prototype$1, this);
            this.enumerators = enumerators;
        },
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                const { enumerators } = this;
                moveAll(enumerators);
                if (allHaveCurrent(enumerators)) {
                    this[EnumeratorLike_current] = pipe(enumerators, map$1(getCurrent));
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }, mixWith(prototype$2, prototype$1), createObjectFactory());
    const zipEnumerators = (enumerators) => {
        const instance = createInstance(enumerators);
        pipe(enumerators, forEach$1(addTo(instance)));
        return instance;
    };
    return (...enumerables) => createEnumerable(() => pipe(enumerables, map$1(enumerate()), zipEnumerators));
})();
const zipT = { zip };

export { TContainerOf, buffer, bufferT, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, enumerate, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, zipT };

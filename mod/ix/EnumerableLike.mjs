/// <reference types="./EnumerableLike.d.ts" />
import { interactive, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { MAX_SAFE_INTEGER } from '../__internal__/env.mjs';
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { disposableMixin, disposableRefMixin, delegatingDisposableMixin } from '../__internal__/util/DisposableLikeMixins.mjs';
import { enumeratorMixin } from '../__internal__/util/EnumeratorLikeMixin.mjs';
import { getCurrentRef, setCurrentRef } from '../__internal__/util/MutableRefLike.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { toEnumerable as toEnumerable$1, every, map as map$1 } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, none, raise, returns, pipeUnsafe, newInstance, getLength, max, strictEquality, pipeLazy, isNone, alwaysTrue, isSome, identity, forEach as forEach$1 } from '../functions.mjs';
import { InteractiveContainerLike_interact, createEnumerable, emptyEnumerableT, emptyEnumerable } from '../ix.mjs';
import { ObservableLike_observableType, RunnableObservable, EnumerableObservable, ReactiveContainerLike_sinkInto, createRunnable } from '../rx.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { schedule, __yield } from '../scheduling/SchedulerLike.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { move, getCurrent, hasCurrent, forEach } from '../util/EnumeratorLike.mjs';
import { notifySink } from '../util/SinkLike.mjs';
import { dispose, add, isDisposed, addTo, bindTo, getError } from '../__internal__/util/DisposableLikeInternal.mjs';

const DelegatingEnumerator_move_delegate = Symbol("DelegatingEnumerator_move_delegate");
const delegatingEnumeratorMixin = /*@__PURE__*/ (() => {
    const DelegatingEnumerator_private_delegate = Symbol("DelegatingEnumerator_private_delegate");
    return pipe({
        [Object_properties]: {
            [DelegatingEnumerator_private_delegate]: none,
        },
        [Object_init](delegate) {
            this[DelegatingEnumerator_private_delegate] = delegate;
        },
        get [EnumeratorLike_current]() {
            var _a, _b;
            const self = this;
            return ((_b = (_a = self[DelegatingEnumerator_private_delegate]) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_current]) !== null && _b !== void 0 ? _b : raise());
        },
        get [EnumeratorLike_hasCurrent]() {
            const self = this;
            return self[DelegatingEnumerator_private_delegate][EnumeratorLike_hasCurrent];
        },
        [DelegatingEnumerator_move_delegate]() {
            const delegate = this[DelegatingEnumerator_private_delegate];
            return move(delegate);
        },
    }, returns);
})();
const delegatingEnumeratorMove = (enumerator) => enumerator[DelegatingEnumerator_move_delegate]();
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
        const src = enumerable instanceof LiftedEnumerable
            ? enumerable.src
            : enumerable;
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
const buffer = /*@__PURE__*/ (() => {
    const typedEnumerator = enumeratorMixin();
    const createInstance = pipe({
        [Object_properties]: {
            delegate: none,
            maxBufferSize: 0,
        },
        [Object_init](delegate, maxBufferSize) {
            init(disposableMixin, this);
            init(typedEnumerator, this);
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
    }, mixWith(disposableMixin, typedEnumerator), createObjectFactory());
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
    const typedEnumerator = enumeratorMixin();
    const typedDisposableRefMixin = disposableRefMixin();
    const neverEnumerator = pipe({
        [Object_properties]: {},
        [Object_init]() {
            init(disposableMixin, this);
        },
        get [EnumeratorLike_current]() {
            return raise();
        },
        get [EnumeratorLike_hasCurrent]() {
            return false;
        },
        [SourceLike_move]() { },
    }, mixWith(disposableMixin), createObjectFactory());
    const createInstance = pipe({
        [Object_properties]: {
            delegate: none,
        },
        [Object_init](delegate) {
            init(disposableMixin, this);
            init(typedDisposableRefMixin, this, neverEnumerator());
            init(typedEnumerator, this);
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
    }, mixWith(disposableMixin, typedDisposableRefMixin, typedEnumerator), createObjectFactory());
    return pipe(createInstance, lift, returns);
})();
const concatAllT = { concatAll };
const concat = (...enumerables) => pipe(enumerables, toEnumerable$1(), concatAll());
const concatT = {
    concat,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    const createInstance = pipe({
        [Object_properties]: { equality: none },
        [Object_init](delegate, equality) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.equality = equality;
        },
        [SourceLike_move]() {
            const hadCurrent = hasCurrent(this);
            const prevCurrent = hadCurrent ? getCurrent(this) : none;
            try {
                while (delegatingEnumeratorMove(this)) {
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
    }, mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory());
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
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    const createInstance = pipe({
        [Object_properties]: { predicate: none },
        [Object_init](delegate, predicate) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.predicate = predicate;
        },
        [SourceLike_move]() {
            const { predicate } = this;
            try {
                while (delegatingEnumeratorMove(this) &&
                    !predicate(getCurrent(this))) { }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
    }, mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory());
    return (predicate) => {
        const operator = (delegate) => createInstance(delegate, predicate);
        return lift(operator);
    };
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const typedEnumerator = enumeratorMixin();
    const createInstance = pipe({
        [Object_properties]: {
            mapper: none,
            delegate: none,
        },
        [Object_init](delegate, mapper) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedEnumerator, this);
            this.delegate = delegate;
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
    }, mixWith(delegatingDisposableMixin, typedEnumerator), createObjectFactory());
    return (mapper) => {
        const operator = (delegate) => createInstance(delegate, mapper);
        return lift(operator);
    };
})();
const mapT = { map };
const onNotify = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    const createInstance = pipe({
        [Object_properties]: { onNotify: none },
        [Object_init](delegate, onNotify) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.onNotify = onNotify;
        },
        [SourceLike_move]() {
            if (delegatingEnumeratorMove(this)) {
                try {
                    this.onNotify(getCurrent(this));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    }, mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory());
    return (onNotify) => {
        const operator = (delegate) => createInstance(delegate, onNotify);
        return lift(operator);
    };
})();
const pairwise = /*@__PURE__*/ (() => {
    const typedEnumerator = enumeratorMixin();
    const createInstance = pipe({
        [SourceLike_move]() {
            const prev = (hasCurrent(this) ? getCurrent(this) : [])[1];
            const { delegate } = this;
            if (move(delegate)) {
                const current = getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
            }
        },
    }, mixWith(delegatingDisposableMixin, typedEnumerator), createObjectFactory());
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
            init(disposableMixin, this);
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
    }, mixWith(disposableMixin), createObjectFactory());
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
    const typedEnumerator = enumeratorMixin();
    const createInstance = pipe({
        [Object_properties]: { reducer: none, delegate: none },
        [Object_init](delegate, reducer, initialValue) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedEnumerator, this);
            this.delegate = delegate;
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
    }, mixWith(delegatingDisposableMixin, typedEnumerator), createObjectFactory());
    return (scanner, initialValue) => {
        const operator = (delegate) => createInstance(delegate, scanner, initialValue);
        return lift(operator);
    };
})();
const scanT = {
    scan,
};
const skipFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe({
        [Object_properties]: {
            skipCount: 0,
            count: 0,
        },
        [Object_init](delegate, skipCount) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.skipCount = skipCount;
            this.count = 0;
        },
        [SourceLike_move]() {
            const { skipCount } = this;
            for (let { count } = this; count < skipCount; count++) {
                if (!delegatingEnumeratorMove(this)) {
                    break;
                }
            }
            this.count = skipCount;
            delegatingEnumeratorMove(this);
        },
    }, mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createSkipFirstOperator(liftT));
})();
const skipFirstT = {
    skipFirst,
};
const takeFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe({
        [Object_properties]: {
            maxCount: 0,
            count: 0,
        },
        [Object_init](delegate, maxCount) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.maxCount = maxCount;
        },
        [SourceLike_move]() {
            if (this.count < this.maxCount) {
                this.count++;
                delegatingEnumeratorMove(this);
            }
            else {
                pipe(this, dispose());
            }
        },
    }, mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createTakeFirstOperator({
        ...liftT,
        ...emptyEnumerableT,
    }));
})();
const takeFirstT = {
    takeFirst,
};
const takeLast = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    const createInstance = pipe({
        [Object_properties]: {
            maxCount: 0,
            isStarted: false,
        },
        [Object_init](delegate, maxCount) {
            init(disposableMixin, this);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.maxCount = maxCount;
            this.isStarted = false;
        },
        [SourceLike_move]() {
            if (!isDisposed(this) && !this.isStarted) {
                this.isStarted = true;
                const last = [];
                while (delegatingEnumeratorMove(this)) {
                    last.push(getCurrent(this));
                    if (getLength(last) > this.maxCount) {
                        last.shift();
                    }
                }
                const enumerator = pipe(last, toEnumerable$1(), enumerate(), bindTo(this));
                init(typedDelegatingEnumeratorMixin, this, enumerator);
            }
            delegatingEnumeratorMove(this);
        },
    }, mixWith(disposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory());
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = (delegate) => pipe(createInstance(delegate, count), add(delegate));
        return enumerable => count > 0 ? pipe(enumerable, lift(operator)) : emptyEnumerable();
    };
})();
const takeLastT = { takeLast };
const takeWhile = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe({
        [Object_properties]: {
            predicate: none,
            inclusive: false,
            done: false,
        },
        [Object_init](delegate, predicate, inclusive) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.predicate = predicate;
            this.inclusive = inclusive;
        },
        [SourceLike_move]() {
            const { inclusive, predicate } = this;
            if (this.done && !isDisposed(this)) {
                pipe(this, dispose());
            }
            else if (delegatingEnumeratorMove(this)) {
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
    }, mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createTakeWhileOperator(liftT));
})();
const takeWhileT = { takeWhile };
const TContainerOf = undefined;
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe({
        [Object_properties]: {
            isEmpty: true,
        },
        [Object_init](delegate) {
            init(disposableMixin, this);
            init(typedDelegatingEnumeratorMixin, this, delegate);
            this.isEmpty = true;
        },
        [SourceLike_move]() {
            if (delegatingEnumeratorMove(this)) {
                this.isEmpty = false;
            }
        },
    }, mixWith(disposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createThrowIfEmptyOperator(liftT));
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
    const typedEnumerator = enumeratorMixin();
    const createInstance = pipe({
        [Object_properties]: {
            enumerators: none,
        },
        [Object_init](enumerators) {
            init(disposableMixin, this);
            init(typedEnumerator, this);
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
    }, mixWith(disposableMixin, typedEnumerator), createObjectFactory());
    const zipEnumerators = (enumerators) => {
        const instance = createInstance(enumerators);
        pipe(enumerators, forEach$1(addTo(instance)));
        return instance;
    };
    return (...enumerables) => createEnumerable(() => pipe(enumerables, map$1(enumerate()), zipEnumerators));
})();
const zipT = { zip };

export { TContainerOf, buffer, bufferT, concat, concatAll, concatAllT, concatT, delegatingEnumeratorMixin, distinctUntilChanged, distinctUntilChangedT, enumerate, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, zipT };

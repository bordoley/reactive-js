/// <reference types="./EnumerableLike.d.ts" />
import { createRepeatOperator } from '../__internal__/containers/ContainerLikeInternal.mjs';
import { interactive, createBufferOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { disposableMixin, disposableRefMixin, delegatingDisposableMixin } from '../__internal__/util/DisposableLikeMixins.mjs';
import { enumeratorMixin } from '../__internal__/util/EnumeratorLikeMixin.mjs';
import { getCurrentRef, setCurrentRef } from '../__internal__/util/MutableRefLike.mjs';
import { clazz, init, mixWith, createObjectFactory, Object_init, Object_properties, Object_prototype } from '../__internal__/util/Object.mjs';
import { toEnumerable as toEnumerable$1, every, map as map$1 } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, none, raise, returns, pipeUnsafe, newInstance, getLength, isSome, isNone, identity, forEach as forEach$2 } from '../functions.mjs';
import { InteractiveContainerLike_interact, createEnumerable, emptyEnumerableT } from '../ix.mjs';
import { createRunnableObservable, createEnumerableObservable, createRunnable } from '../rx.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { schedule, __yield } from '../scheduling/SchedulerLike.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move, disposed } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { move, getCurrent, hasCurrent, forEach as forEach$1 } from '../util/EnumeratorLike.mjs';
import { notifySink } from '../util/SinkLike.mjs';
import { add, dispose, isDisposed, addTo, bindTo, addIgnoringChildErrors, onComplete, getException } from '../__internal__/util/DisposableLikeInternal.mjs';

const DelegatingEnumerator_move_delegate = Symbol("DelegatingEnumerator_move_delegate");
const delegatingEnumeratorMixin = /*@__PURE__*/ (() => {
    const DelegatingEnumerator_private_delegate = Symbol("DelegatingEnumerator_private_delegate");
    return pipe(clazz(function DelegatingEnumerator(delegate) {
        this[DelegatingEnumerator_private_delegate] = delegate;
    }, {
        [DelegatingEnumerator_private_delegate]: none,
    }, {
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
    }), returns);
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
    return pipe(clazz(function BufferEnumerator(delegate, maxBufferSize) {
        init(disposableMixin, this);
        init(typedEnumerator, this);
        this.delegate = delegate;
        this.maxBufferSize = maxBufferSize;
        pipe(this, add(delegate));
    }, {
        delegate: none,
        maxBufferSize: 0,
    }, {
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
    }), mixWith(disposableMixin, typedEnumerator), createObjectFactory(), createBufferOperator(liftT));
})();
const bufferT = {
    buffer,
};
const concatAll = 
/*@__PURE__*/ (() => {
    const typedEnumerator = enumeratorMixin();
    const typedDisposableRefMixin = disposableRefMixin();
    return pipe(clazz(function ConcatAllEnumerator(delegate) {
        init(disposableMixin, this);
        init(typedDisposableRefMixin, this, disposed);
        init(typedEnumerator, this);
        this.delegate = delegate;
        pipe(this, add(delegate));
    }, {
        delegate: none,
    }, {
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
    }), mixWith(disposableMixin, typedDisposableRefMixin, typedEnumerator), createObjectFactory(), lift, returns);
})();
const concatAllT = { concatAll };
const concat = (...enumerables) => pipe(enumerables, toEnumerable$1(), concatAll());
const concatT = {
    concat,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(clazz(function DistinctUntilChanged(delegate, equality) {
        init(delegatingDisposableMixin, this, delegate);
        init(typedDelegatingEnumeratorMixin, this, delegate);
        this.equality = equality;
    }, { equality: none }, {
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
    }), mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createDistinctUntilChangedOperator(liftT));
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const forEach = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(clazz(function forEachEnumerator(delegate, effect) {
        init(delegatingDisposableMixin, this, delegate);
        init(typedDelegatingEnumeratorMixin, this, delegate);
        this.effect = effect;
    }, { effect: none }, {
        [SourceLike_move]() {
            if (delegatingEnumeratorMove(this)) {
                try {
                    this.effect(getCurrent(this));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    }), mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createForEachOperator(liftT));
})();
const forEachT = { forEach };
const keep = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(clazz(function KeepEnumerator(delegate, predicate) {
        init(delegatingDisposableMixin, this, delegate);
        init(typedDelegatingEnumeratorMixin, this, delegate);
        this.predicate = predicate;
    }, { predicate: none }, {
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
    }), mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createKeepOperator(liftT));
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const typedEnumerator = enumeratorMixin();
    return pipe(clazz(function MapEnumerator(delegate, mapper) {
        init(delegatingDisposableMixin, this, delegate);
        init(typedEnumerator, this);
        this.delegate = delegate;
        this.mapper = mapper;
    }, {
        mapper: none,
        delegate: none,
    }, {
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
    }), mixWith(delegatingDisposableMixin, typedEnumerator), createObjectFactory(), createMapOperator(liftT));
})();
const mapT = { map };
const pairwise = /*@__PURE__*/ (() => {
    const typedEnumerator = enumeratorMixin();
    return pipe({
        [Object_init](delegate) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedEnumerator, this);
            this.delegate = delegate;
        },
        [Object_properties]: {},
        [Object_prototype]: {
            [SourceLike_move]() {
                const { delegate } = this;
                const prev = hasCurrent(this)
                    ? getCurrent(this)[1]
                    : move(delegate)
                        ? getCurrent(delegate)
                        : none;
                if (isSome(prev) && move(delegate)) {
                    const current = getCurrent(delegate);
                    this[EnumeratorLike_current] = [prev, current];
                }
                else {
                    pipe(this, dispose());
                }
            },
        },
    }, mixWith(delegatingDisposableMixin, typedEnumerator), createObjectFactory(), lift, returns);
})();
const pairwiseT = {
    pairwise,
};
const repeat = /*@__PURE__*/ (() => {
    const createRepeatEnumerator = pipe(clazz(function RepeatEnumerator(src, shouldRepeat) {
        init(disposableMixin, this);
        this.src = src;
        this.shouldRepeat = shouldRepeat;
    }, {
        count: 0,
        enumerator: none,
        shouldRepeat: none,
        src: none,
    }, {
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
    }), mixWith(disposableMixin), createObjectFactory());
    return createRepeatOperator((delegate, predicate) => createEnumerable(() => createRepeatEnumerator(delegate, predicate)));
})();
const repeatT = {
    repeat,
};
const scan = /*@__PURE__*/ (() => {
    const typedEnumerator = enumeratorMixin();
    return pipe(clazz(function ScanEnumerator(delegate, reducer, initialValue) {
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
    }, { reducer: none, delegate: none }, {
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
    }), mixWith(delegatingDisposableMixin, typedEnumerator), createObjectFactory(), createScanOperator(liftT));
})();
const scanT = {
    scan,
};
const skipFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(clazz(function SkipFirstEnumerator(delegate, skipCount) {
        init(delegatingDisposableMixin, this, delegate);
        init(typedDelegatingEnumeratorMixin, this, delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }, {
        skipCount: 0,
        count: 0,
    }, {
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
    }), mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createSkipFirstOperator(liftT));
})();
const skipFirstT = {
    skipFirst,
};
const takeFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(clazz(function TakeFirstEnumerator(delegate, maxCount) {
        init(delegatingDisposableMixin, this, delegate);
        init(typedDelegatingEnumeratorMixin, this, delegate);
        this.maxCount = maxCount;
    }, {
        maxCount: 0,
        count: 0,
    }, {
        [SourceLike_move]() {
            if (this.count < this.maxCount) {
                this.count++;
                delegatingEnumeratorMove(this);
            }
            else {
                pipe(this, dispose());
            }
        },
    }), mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createTakeFirstOperator({
        ...liftT,
        ...emptyEnumerableT,
    }));
})();
const takeFirstT = {
    takeFirst,
};
const takeLast = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(clazz(function TakeLastEnumerator(delegate, maxCount) {
        init(disposableMixin, this);
        init(typedDelegatingEnumeratorMixin, this, delegate);
        this.maxCount = maxCount;
        this.isStarted = false;
        pipe(this, add(delegate));
    }, {
        maxCount: 0,
        isStarted: false,
    }, {
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
    }), mixWith(disposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createTakeLastOperator({
        ...liftT,
        ...emptyEnumerableT,
    }));
})();
const takeLastT = { takeLast };
const takeWhile = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(clazz(function TakeWhileEnumerator(delegate, predicate, inclusive) {
        init(delegatingDisposableMixin, this, delegate);
        init(typedDelegatingEnumeratorMixin, this, delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
    }, {
        predicate: none,
        inclusive: false,
        done: false,
    }, {
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
    }), mixWith(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createTakeWhileOperator(liftT));
})();
const takeWhileT = { takeWhile };
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(clazz(function TakeWhileEnumerator(delegate, factory) {
        init(disposableMixin, this);
        init(typedDelegatingEnumeratorMixin, this, delegate);
        this.isEmpty = true;
        pipe(this, addIgnoringChildErrors(delegate));
        pipe(delegate, onComplete(() => {
            let error = none;
            if (this.isEmpty) {
                let cause = none;
                try {
                    cause = factory();
                }
                catch (e) {
                    cause = e;
                }
                error = { cause };
            }
            pipe(this, dispose(error));
        }));
    }, {
        isEmpty: true,
    }, {
        [SourceLike_move]() {
            if (delegatingEnumeratorMove(this)) {
                this.isEmpty = false;
            }
        },
    }), mixWith(disposableMixin, typedDelegatingEnumeratorMixin), createObjectFactory(), createThrowIfEmptyOperator(liftT));
})();
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = () => identity;
const toEnumerableT = {
    toEnumerable,
};
const toObservable = /*@__PURE__*/ (() => {
    return (options) => (enumerable) => {
        const delay = getDelay(options);
        const onSink = (observer) => {
            const enumerator = pipe(enumerable, enumerate(), bindTo(observer));
            const options = { delay: delay };
            pipe(observer, getScheduler, schedule(() => {
                while (!isDisposed(observer) && move(enumerator)) {
                    pipe(enumerator, getCurrent, notifySink(observer));
                    __yield(options);
                }
            }, options));
        };
        return delay > 0
            ? createRunnableObservable(onSink)
            : createEnumerableObservable(onSink);
    };
})();
const toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, enumerate());
    const result = [];
    while (move(enumerator)) {
        result.push(getCurrent(enumerator));
    }
    const error = getException(enumerator);
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
            pipe(f(), add(sink), forEach$1(notifySink(sink)), dispose());
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
    const createZipEnumerator = pipe({
        [Object_init](enumerators) {
            init(disposableMixin, this);
            init(typedEnumerator, this);
            this.enumerators = enumerators;
        },
        [Object_properties]: {
            enumerators: none,
        },
        [Object_prototype]: {
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
        },
    }, mixWith(disposableMixin, typedEnumerator), createObjectFactory());
    const zipEnumerators = (enumerators) => {
        const instance = createZipEnumerator(enumerators);
        pipe(enumerators, forEach$2(addTo(instance)));
        return instance;
    };
    return (...enumerables) => createEnumerable(() => pipe(enumerables, map$1(enumerate()), zipEnumerators));
})();
const zipT = { zip };

export { buffer, bufferT, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, enumerate, forEach, forEachT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, zipT };

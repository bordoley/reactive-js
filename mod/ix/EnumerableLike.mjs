/// <reference types="./EnumerableLike.d.ts" />
import { createRepeatOperator } from '../__internal__/containers/ContainerLike.repeat.mjs';
import { interactive, createBufferOperator, createDistinctUntilChangedOperator, createForEachOperator, createKeepOperator, createMapOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLike.internal.mjs';
import { empty as empty$1, create } from '../__internal__/ix/EnumerableLike.create.mjs';
import { mutableEnumeratorMixin } from '../__internal__/ix/EnumeratorLike.mutable.mjs';
import { mixin, props, createInstanceFactory, include, init } from '../__internal__/mixins.mjs';
import { createRunnableObservable, createEnumerableObservable } from '../__internal__/rx/ObservableLike.create.mjs';
import { hasDelay } from '../__internal__/scheduling/SchedulerLike.options.mjs';
import { disposableMixin, delegatingDisposableMixin } from '../__internal__/util/DisposableLike.mixins.mjs';
import { disposableRefMixin } from '../__internal__/util/DisposableRefLike.mjs';
import { getCurrentRef, setCurrentRef } from '../__internal__/util/MutableRefLike.mjs';
import { toEnumerable as toEnumerable$1, every, map as map$1 } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, none, unsafeCast, raise, returns, pipeUnsafe, newInstance, getLength, isSome, isNone, identity, forEach as forEach$2 } from '../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, InteractiveContainerLike_interact, SourceLike_move } from '../ix.mjs';
import { move, getCurrent, hasCurrent, forEach as forEach$1 } from './EnumeratorLike.mjs';
import { schedule } from '../rx/ObserverLike.mjs';
import { create as create$1 } from '../rx/RunnableLike.mjs';
import { notifySink } from '../rx/SinkLike.mjs';
import { yield_ } from '../scheduling/ContinuationLike.mjs';
import { add, dispose, disposed, isDisposed, addTo, bindTo, addIgnoringChildErrors, onComplete, getException } from '../util/DisposableLike.mjs';

const DelegatingEnumerator_move_delegate = Symbol("DelegatingEnumerator_move_delegate");
const delegatingEnumeratorMixin = /*@__PURE__*/ (() => {
    const DelegatingEnumerator_private_delegate = Symbol("DelegatingEnumerator_private_delegate");
    return pipe(mixin(function DelegatingEnumerator(instance, delegate) {
        instance[DelegatingEnumerator_private_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingEnumerator_private_delegate]: none,
    }), {
        get [EnumeratorLike_current]() {
            var _a, _b;
            unsafeCast(this);
            return ((_b = (_a = this[DelegatingEnumerator_private_delegate]) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_current]) !== null && _b !== void 0 ? _b : raise());
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[DelegatingEnumerator_private_delegate][EnumeratorLike_hasCurrent];
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
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function BufferEnumerator(instance, delegate, maxBufferSize) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.maxBufferSize = maxBufferSize;
        pipe(instance, add(delegate));
        return instance;
    }, props({
        delegate: none,
        maxBufferSize: 0,
    }), {
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
    })), createBufferOperator(liftT));
})();
const bufferT = {
    buffer,
};
const concatAll = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    const typedDisposableRefMixin = disposableRefMixin();
    return pipe(createInstanceFactory(mixin(include(disposableMixin, typedDisposableRefMixin, typedMutableEnumeratorMixin), function ConcatAllEnumerator(instance, delegate) {
        init(disposableMixin, instance);
        init(typedDisposableRefMixin, instance, disposed);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        pipe(instance, add(delegate));
        return instance;
    }, props({
        delegate: none,
    }), {
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
    })), lift, returns);
})();
const concatAllT = { concatAll };
const concat = (...enumerables) => pipe(enumerables, toEnumerable$1(), concatAll());
const concatT = {
    concat,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), function DistinctUntilChanged(instance, delegate, equality) {
        init(delegatingDisposableMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.equality = equality;
        return instance;
    }, props({ equality: none }), {
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
    })), createDistinctUntilChangedOperator(liftT));
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = empty$1;
const emptyT = {
    empty,
};
const forEach = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), function forEachEnumerator(instance, delegate, effect) {
        init(delegatingDisposableMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.effect = effect;
        return instance;
    }, props({ effect: none }), {
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
    })), createForEachOperator(liftT));
})();
const forEachT = { forEach };
/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
const generate = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    const createGenerateEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function GenerateEnumerator(instance, f, acc) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.f = f;
        instance[EnumeratorLike_current] = acc;
        return instance;
    }, props({ f: none }), {
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                try {
                    this[EnumeratorLike_current] = this.f(this[EnumeratorLike_current]);
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    }));
    return (generator, initialValue) => create(() => createGenerateEnumerator(generator, initialValue()));
})();
const generateT = {
    generate,
};
const keep = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), function KeepEnumerator(instance, delegate, predicate) {
        init(delegatingDisposableMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.predicate = predicate;
        return instance;
    }, props({ predicate: none }), {
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
    })), createKeepOperator(liftT));
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingDisposableMixin, typedMutableEnumeratorMixin), function MapEnumerator(instance, delegate, mapper) {
        init(delegatingDisposableMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.mapper = mapper;
        return instance;
    }, props({
        mapper: none,
        delegate: none,
    }), {
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
    })), createMapOperator(liftT));
})();
const mapT = { map };
const pairwise = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingDisposableMixin, typedMutableEnumeratorMixin), function PairwiseEnumerator(instance, delegate) {
        init(delegatingDisposableMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        return instance;
    }, props({
        delegate: none,
    }), {
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
    })), lift, returns);
})();
const pairwiseT = {
    pairwise,
};
const repeat = /*@__PURE__*/ (() => {
    const createRepeatEnumerator = createInstanceFactory(mixin(include(disposableMixin), function RepeatEnumerator(instance, src, shouldRepeat) {
        init(disposableMixin, instance);
        instance.src = src;
        instance.shouldRepeat = shouldRepeat;
        return instance;
    }, props({
        count: 0,
        enumerator: none,
        shouldRepeat: none,
        src: none,
    }), {
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
            unsafeCast(this);
            return hasCurrent(this)
                ? (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_current]) !== null && _b !== void 0 ? _b : raise()
                : raise();
        },
        get [EnumeratorLike_hasCurrent]() {
            var _a, _b;
            unsafeCast(this);
            return (_b = (_a = this.enumerator) === null || _a === void 0 ? void 0 : _a[EnumeratorLike_hasCurrent]) !== null && _b !== void 0 ? _b : false;
        },
    }));
    return createRepeatOperator((delegate, predicate) => create(() => createRepeatEnumerator(delegate, predicate)));
})();
const repeatT = {
    repeat,
};
const scan = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingDisposableMixin, typedMutableEnumeratorMixin), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(delegatingDisposableMixin, instance, delegate);
        init(typedMutableEnumeratorMixin, instance);
        instance.delegate = delegate;
        instance.reducer = reducer;
        try {
            const acc = initialValue();
            instance[EnumeratorLike_current] = acc;
        }
        catch (cause) {
            pipe(instance, dispose({ cause }));
        }
        return instance;
    }, props({ reducer: none, delegate: none }), {
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
    })), createScanOperator(liftT));
})();
const scanT = {
    scan,
};
const skipFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(delegatingDisposableMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.skipCount = skipCount;
        instance.count = 0;
        return instance;
    }, props({
        skipCount: 0,
        count: 0,
    }), {
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
    })), createSkipFirstOperator(liftT));
})();
const skipFirstT = {
    skipFirst,
};
const takeFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), function TakeFirstEnumerator(instance, delegate, maxCount) {
        init(delegatingDisposableMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.maxCount = maxCount;
        return instance;
    }, props({
        maxCount: 0,
        count: 0,
    }), {
        [SourceLike_move]() {
            if (this.count < this.maxCount) {
                this.count++;
                delegatingEnumeratorMove(this);
            }
            else {
                pipe(this, dispose());
            }
        },
    })), createTakeFirstOperator({
        ...liftT,
    }));
})();
const takeFirstT = {
    takeFirst,
};
const takeLast = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(disposableMixin, typedDelegatingEnumeratorMixin), function TakeLastEnumerator(instance, delegate, maxCount) {
        init(disposableMixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.maxCount = maxCount;
        instance.isStarted = false;
        pipe(instance, add(delegate));
        return instance;
    }, props({
        maxCount: 0,
        isStarted: false,
    }), {
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
    })), createTakeLastOperator({
        ...liftT,
    }));
})();
const takeLastT = { takeLast };
const takeWhile = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingDisposableMixin, typedDelegatingEnumeratorMixin), function TakeWhileEnumerator(instance, delegate, predicate, inclusive) {
        init(delegatingDisposableMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.predicate = predicate;
        instance.inclusive = inclusive;
        return instance;
    }, props({
        predicate: none,
        inclusive: false,
        done: false,
    }), {
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
    })), createTakeWhileOperator(liftT));
})();
const takeWhileT = { takeWhile };
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = delegatingEnumeratorMixin();
    return pipe(createInstanceFactory(mixin(include(disposableMixin, typedDelegatingEnumeratorMixin), function TakeWhileEnumerator(instance, delegate, factory) {
        init(disposableMixin, instance);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.isEmpty = true;
        pipe(instance, addIgnoringChildErrors(delegate));
        pipe(delegate, onComplete(() => {
            let error = none;
            if (instance.isEmpty) {
                let cause = none;
                try {
                    cause = factory();
                }
                catch (e) {
                    cause = e;
                }
                error = { cause };
            }
            pipe(instance, dispose(error));
        }));
        return instance;
    }, props({
        isEmpty: true,
    }), {
        [SourceLike_move]() {
            if (delegatingEnumeratorMove(this)) {
                this.isEmpty = false;
            }
        },
    })), createThrowIfEmptyOperator(liftT));
})();
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = () => identity;
const toEnumerableT = {
    toEnumerable,
};
const toObservable = ((options) => enumerable => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        const enumerator = pipe(enumerable, enumerate(), bindTo(observer));
        pipe(observer, schedule(() => {
            while (!isDisposed(observer) && move(enumerator)) {
                pipe(enumerator, getCurrent, notifySink(observer));
                yield_(options);
            }
        }, delayStart ? options : none));
    };
    return hasDelay(options)
        ? createRunnableObservable(onSink)
        : createEnumerableObservable(onSink);
});
const toObservableT = { toObservable };
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
        return create$1(run);
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
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    const createZipEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function ZipEnumerator(instance, enumerators) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.enumerators = enumerators;
        return instance;
    }, props({
        enumerators: none,
    }), {
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
    }));
    const zipEnumerators = (enumerators) => {
        const instance = createZipEnumerator(enumerators);
        pipe(enumerators, forEach$2(addTo(instance)));
        return instance;
    };
    return (...enumerables) => create(() => pipe(enumerables, map$1(enumerate()), zipEnumerators));
})();
const zipT = { zip };

export { buffer, bufferT, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, enumerate, forEach, forEachT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableT, zip, zipT };

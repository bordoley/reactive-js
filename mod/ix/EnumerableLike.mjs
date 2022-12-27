/// <reference types="./EnumerableLike.d.ts" />
import { createInstanceFactory, mixin, include, init, props } from '../__internal__/mixins.mjs';
import { disposableRefMixin } from '../__internal__/util/DisposableRefLike.mjs';
import { getCurrentRef, setCurrentRef } from '../__internal__/util/MutableRefLike.mjs';
import { toEnumerable as toEnumerable$1 } from '../containers/ReadonlyArrayLike.mjs';
import repeat$1 from '../containers/__internal__/ContainerLike/ContainerLike.repeat.mjs';
import buffer$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer.mjs';
import distinctUntilChanged$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged.mjs';
import forEach$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach.mjs';
import keep$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep.mjs';
import map$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map.mjs';
import scan$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import skipFirst$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst.mjs';
import takeFirst$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst.mjs';
import takeLast$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast.mjs';
import takeWhile$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile.mjs';
import throwIfEmpty$1 from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty.mjs';
import { interactive } from '../containers/__internal__/containers.internal.mjs';
import { pipeUnsafe, newInstance, pipe, none, getLength, returns, isSome, isNone, unsafeCast, raise, identity } from '../functions.mjs';
import { InteractiveContainerLike_interact, SourceLike_move, EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../ix.mjs';
import { move, getCurrent, hasCurrent } from './EnumeratorLike.mjs';
import { add, dispose, disposed, isDisposed, addTo, bindTo, addIgnoringChildErrors, onComplete } from '../util/DisposableLike.mjs';
import delegatingMixin from '../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import disposableMixin from '../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import mixin$1 from './__internal__/DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin.mjs';
import move$1 from './__internal__/DelegatingEnumeratorLike/DelegatingEnumeratorLike.move.mjs';
import create from './__internal__/EnumerableLike/EnumerableLike.create.mjs';
import empty$1 from './__internal__/EnumerableLike/EnumerableLike.empty.mjs';
import enumerate$1 from './__internal__/EnumerableLike/EnumerableLike.enumerate.mjs';
import toIterable$1 from './__internal__/EnumerableLike/EnumerableLike.toIterable.mjs';
import toReadonlyArray$1 from './__internal__/EnumerableLike/EnumerableLike.toReadonlyArray.mjs';
import toRunnable$1 from './__internal__/EnumerableLike/EnumerableLike.toRunnable.mjs';
import toRunnableObservable$1 from './__internal__/EnumerableLike/EnumerableLike.toRunnableObservable.mjs';
import zip$1 from './__internal__/EnumerableLike/EnumerableLike.zip.mjs';
import mutableMixin from './__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';

const enumerate = enumerate$1;
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
    const typedMutableEnumeratorMixin = mutableMixin();
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
    })), buffer$1(liftT));
})();
const bufferT = {
    buffer,
};
const concatAll = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableMixin();
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
    const typedDelegatingEnumeratorMixin = mixin$1();
    return pipe(createInstanceFactory(mixin(include(delegatingMixin, typedDelegatingEnumeratorMixin), function DistinctUntilChanged(instance, delegate, equality) {
        init(delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.equality = equality;
        return instance;
    }, props({ equality: none }), {
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
    })), distinctUntilChanged$1(liftT));
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = empty$1;
const emptyT = { empty };
const forEach = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = mixin$1();
    return pipe(createInstanceFactory(mixin(include(delegatingMixin, typedDelegatingEnumeratorMixin), function forEachEnumerator(instance, delegate, effect) {
        init(delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.effect = effect;
        return instance;
    }, props({ effect: none }), {
        [SourceLike_move]() {
            if (move$1(this)) {
                try {
                    this.effect(getCurrent(this));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    })), forEach$1(liftT));
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
    const typedMutableEnumeratorMixin = mutableMixin();
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
    const typedDelegatingEnumeratorMixin = mixin$1();
    return pipe(createInstanceFactory(mixin(include(delegatingMixin, typedDelegatingEnumeratorMixin), function KeepEnumerator(instance, delegate, predicate) {
        init(delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.predicate = predicate;
        return instance;
    }, props({ predicate: none }), {
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
    })), keep$1(liftT));
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingMixin, typedMutableEnumeratorMixin), function MapEnumerator(instance, delegate, mapper) {
        init(delegatingMixin, instance, delegate);
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
    })), map$1(liftT));
})();
const mapT = { map };
const pairwise = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingMixin, typedMutableEnumeratorMixin), function PairwiseEnumerator(instance, delegate) {
        init(delegatingMixin, instance, delegate);
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
    return repeat$1((delegate, predicate) => create(() => createRepeatEnumerator(delegate, predicate)));
})();
const repeatT = {
    repeat,
};
const scan = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableMixin();
    return pipe(createInstanceFactory(mixin(include(delegatingMixin, typedMutableEnumeratorMixin), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(delegatingMixin, instance, delegate);
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
    })), scan$1(liftT));
})();
const scanT = {
    scan,
};
const skipFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = mixin$1();
    return pipe(createInstanceFactory(mixin(include(delegatingMixin, typedDelegatingEnumeratorMixin), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(delegatingMixin, instance, delegate);
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
                if (!move$1(this)) {
                    break;
                }
            }
            this.count = skipCount;
            move$1(this);
        },
    })), skipFirst$1(liftT));
})();
const skipFirstT = {
    skipFirst,
};
const takeFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = mixin$1();
    return pipe(createInstanceFactory(mixin(include(delegatingMixin, typedDelegatingEnumeratorMixin), function TakeFirstEnumerator(instance, delegate, maxCount) {
        init(delegatingMixin, instance, delegate);
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
                move$1(this);
            }
            else {
                pipe(this, dispose());
            }
        },
    })), takeFirst$1({
        ...liftT,
    }));
})();
const takeFirstT = {
    takeFirst,
};
const takeLast = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = mixin$1();
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
                while (move$1(this)) {
                    last.push(getCurrent(this));
                    if (getLength(last) > this.maxCount) {
                        last.shift();
                    }
                }
                const enumerator = pipe(last, toEnumerable$1(), enumerate(), bindTo(this));
                init(typedDelegatingEnumeratorMixin, this, enumerator);
            }
            move$1(this);
        },
    })), takeLast$1({
        ...liftT,
    }));
})();
const takeLastT = { takeLast };
const takeWhile = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = mixin$1();
    return pipe(createInstanceFactory(mixin(include(delegatingMixin, typedDelegatingEnumeratorMixin), function TakeWhileEnumerator(instance, delegate, predicate, inclusive) {
        init(delegatingMixin, instance, delegate);
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
    })), takeWhile$1(liftT));
})();
const takeWhileT = { takeWhile };
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = mixin$1();
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
            if (move$1(this)) {
                this.isEmpty = false;
            }
        },
    })), throwIfEmpty$1(liftT));
})();
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = () => identity;
const toEnumerableT = {
    toEnumerable,
};
const toEnumerableObservable = toRunnableObservable$1;
const toEnumerableObservableT = {
    toEnumerableObservable,
};
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
const toIterable = toIterable$1;
const toIterableT = { toIterable };
const toObservable = toRunnableObservable$1;
const toObservableT = { toObservable };
const toReadonlyArray = toReadonlyArray$1;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const toRunnable = toRunnable$1;
const toRunnableT = { toRunnable };
const toRunnableObservable = toRunnableObservable$1;
const toRunnableObservableT = { toRunnableObservable };
const zip = zip$1;
const zipT = { zip };

export { buffer, bufferT, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, enumerate, forEach, forEachT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableObservable, toRunnableObservableT, toRunnableT, zip, zipT };

/// <reference types="./EnumerableLike.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../__internal__/mixins.mjs';
import { disposableRefMixin } from '../__internal__/util/DisposableRefLike.mjs';
import { getCurrentRef, setCurrentRef } from '../__internal__/util/MutableRefLike.mjs';
import { toEnumerable as toEnumerable$1 } from '../containers/ReadonlyArrayLike.mjs';
import ContainerLike__repeat from '../containers/__internal__/ContainerLike/ContainerLike.repeat.mjs';
import StatefulContainerLike__buffer from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer.mjs';
import StatefulContainerLike__distinctUntilChanged from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.distinctUntilChanged.mjs';
import StatefulContainerLike__forEach from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.forEach.mjs';
import StatefulContainerLike__keep from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep.mjs';
import StatefulContainerLike__map from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map.mjs';
import StatefulContainerLike__scan from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import StatefulContainerLike__skipFirst from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst.mjs';
import StatefulContainerLike__takeFirst from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst.mjs';
import StatefulContainerLike__takeLast from '../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast.mjs';
import { interactive } from '../containers/__internal__/containers.internal.mjs';
import { pipeUnsafe, newInstance, pipe, none, getLength, returns, isSome, isNone, unsafeCast, raise, identity } from '../functions.mjs';
import { InteractiveContainerLike_interact, SourceLike_move, EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../ix.mjs';
import { move, getCurrent, hasCurrent } from './EnumeratorLike.mjs';
import { add, dispose, disposed, isDisposed, addTo, bindTo } from '../util/DisposableLike.mjs';
import DisposableLike__delegatingMixin from '../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__disposableMixin from '../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DelegatingEnumeratorLike__mixin from './__internal__/DelegatingEnumeratorLike/DelegatingEnumeratorLike.mixin.mjs';
import DelegatingEnumeratorLike__move from './__internal__/DelegatingEnumeratorLike/DelegatingEnumeratorLike.move.mjs';
import EnumerableLike__create from './__internal__/EnumerableLike/EnumerableLike.create.mjs';
import EnumerableLike__empty from './__internal__/EnumerableLike/EnumerableLike.empty.mjs';
import EnumerableLike__enumerate from './__internal__/EnumerableLike/EnumerableLike.enumerate.mjs';
import EnumerableLike__takeWhile from './__internal__/EnumerableLike/EnumerableLike.takeWhile.mjs';
import EnumerableLike__throwIfEmpty from './__internal__/EnumerableLike/EnumerableLike.throwIfEmpty.mjs';
import EnumerableLike__toIterable from './__internal__/EnumerableLike/EnumerableLike.toIterable.mjs';
import EnumerableLike__toReadonlyArray from './__internal__/EnumerableLike/EnumerableLike.toReadonlyArray.mjs';
import EnumerableLike__toRunnable from './__internal__/EnumerableLike/EnumerableLike.toRunnable.mjs';
import EnumerableLike__toRunnableObservable from './__internal__/EnumerableLike/EnumerableLike.toRunnableObservable.mjs';
import EnumerableLike__zip from './__internal__/EnumerableLike/EnumerableLike.zip.mjs';
import MutableEnumeratorLike__mixin from './__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';

const enumerate = EnumerableLike__enumerate;
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
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__disposableMixin, typedMutableEnumeratorMixin), function BufferEnumerator(instance, delegate, maxBufferSize) {
        init(DisposableLike__disposableMixin, instance);
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
    })), StatefulContainerLike__buffer(liftT));
})();
const bufferT = {
    buffer,
};
const concatAll = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const typedDisposableRefMixin = disposableRefMixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__disposableMixin, typedDisposableRefMixin, typedMutableEnumeratorMixin), function ConcatAllEnumerator(instance, delegate) {
        init(DisposableLike__disposableMixin, instance);
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
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedDelegatingEnumeratorMixin), function DistinctUntilChanged(instance, delegate, equality) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.equality = equality;
        return instance;
    }, props({ equality: none }), {
        [SourceLike_move]() {
            const hadCurrent = hasCurrent(this);
            const prevCurrent = hadCurrent ? getCurrent(this) : none;
            try {
                while (DelegatingEnumeratorLike__move(this)) {
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
    })), StatefulContainerLike__distinctUntilChanged(liftT));
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = EnumerableLike__empty;
const emptyT = { empty };
const forEach = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedDelegatingEnumeratorMixin), function forEachEnumerator(instance, delegate, effect) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.effect = effect;
        return instance;
    }, props({ effect: none }), {
        [SourceLike_move]() {
            if (DelegatingEnumeratorLike__move(this)) {
                try {
                    this.effect(getCurrent(this));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    })), StatefulContainerLike__forEach(liftT));
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
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const createGenerateEnumerator = createInstanceFactory(mix(include(DisposableLike__disposableMixin, typedMutableEnumeratorMixin), function GenerateEnumerator(instance, f, acc) {
        init(DisposableLike__disposableMixin, instance);
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
    return (generator, initialValue) => EnumerableLike__create(() => createGenerateEnumerator(generator, initialValue()));
})();
const generateT = {
    generate,
};
const keep = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedDelegatingEnumeratorMixin), function KeepEnumerator(instance, delegate, predicate) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDelegatingEnumeratorMixin, instance, delegate);
        instance.predicate = predicate;
        return instance;
    }, props({ predicate: none }), {
        [SourceLike_move]() {
            const { predicate } = this;
            try {
                while (DelegatingEnumeratorLike__move(this) &&
                    !predicate(getCurrent(this))) { }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
    })), StatefulContainerLike__keep(liftT));
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin), function MapEnumerator(instance, delegate, mapper) {
        init(DisposableLike__delegatingMixin, instance, delegate);
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
    })), StatefulContainerLike__map(liftT));
})();
const mapT = { map };
const pairwise = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin), function PairwiseEnumerator(instance, delegate) {
        init(DisposableLike__delegatingMixin, instance, delegate);
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
    const createRepeatEnumerator = createInstanceFactory(mix(include(DisposableLike__disposableMixin), function RepeatEnumerator(instance, src, shouldRepeat) {
        init(DisposableLike__disposableMixin, instance);
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
    return ContainerLike__repeat((delegate, predicate) => EnumerableLike__create(() => createRepeatEnumerator(delegate, predicate)));
})();
const repeatT = {
    repeat,
};
const scan = /*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedMutableEnumeratorMixin), function ScanEnumerator(instance, delegate, reducer, initialValue) {
        init(DisposableLike__delegatingMixin, instance, delegate);
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
    })), StatefulContainerLike__scan(liftT));
})();
const scanT = {
    scan,
};
const skipFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedDelegatingEnumeratorMixin), function SkipFirstEnumerator(instance, delegate, skipCount) {
        init(DisposableLike__delegatingMixin, instance, delegate);
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
                if (!DelegatingEnumeratorLike__move(this)) {
                    break;
                }
            }
            this.count = skipCount;
            DelegatingEnumeratorLike__move(this);
        },
    })), StatefulContainerLike__skipFirst(liftT));
})();
const skipFirstT = {
    skipFirst,
};
const takeFirst = 
/*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__delegatingMixin, typedDelegatingEnumeratorMixin), function TakeFirstEnumerator(instance, delegate, maxCount) {
        init(DisposableLike__delegatingMixin, instance, delegate);
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
                DelegatingEnumeratorLike__move(this);
            }
            else {
                pipe(this, dispose());
            }
        },
    })), StatefulContainerLike__takeFirst({
        ...liftT,
    }));
})();
const takeFirstT = {
    takeFirst,
};
const takeLast = /*@__PURE__*/ (() => {
    const typedDelegatingEnumeratorMixin = DelegatingEnumeratorLike__mixin();
    return pipe(createInstanceFactory(mix(include(DisposableLike__disposableMixin, typedDelegatingEnumeratorMixin), function TakeLastEnumerator(instance, delegate, maxCount) {
        init(DisposableLike__disposableMixin, instance);
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
                while (DelegatingEnumeratorLike__move(this)) {
                    last.push(getCurrent(this));
                    if (getLength(last) > this.maxCount) {
                        last.shift();
                    }
                }
                const enumerator = pipe(last, toEnumerable$1(), enumerate(), bindTo(this));
                init(typedDelegatingEnumeratorMixin, this, enumerator);
            }
            DelegatingEnumeratorLike__move(this);
        },
    })), StatefulContainerLike__takeLast({
        ...liftT,
    }));
})();
const takeLastT = { takeLast };
const takeWhile = EnumerableLike__takeWhile;
const takeWhileT = { takeWhile };
const throwIfEmpty = EnumerableLike__throwIfEmpty;
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = () => identity;
const toEnumerableT = {
    toEnumerable,
};
const toEnumerableObservable = EnumerableLike__toRunnableObservable;
const toEnumerableObservableT = {
    toEnumerableObservable,
};
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
const toIterable = EnumerableLike__toIterable;
const toIterableT = { toIterable };
const toObservable = EnumerableLike__toRunnableObservable;
const toObservableT = { toObservable };
const toReadonlyArray = EnumerableLike__toReadonlyArray;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const toRunnable = EnumerableLike__toRunnable;
const toRunnableT = { toRunnable };
const toRunnableObservable = EnumerableLike__toRunnableObservable;
const toRunnableObservableT = { toRunnableObservable };
const zip = EnumerableLike__zip;
const zipT = { zip };

export { buffer, bufferT, concat, concatAll, concatAllT, concatT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, enumerate, forEach, forEachT, generate, generateT, keep, keepT, map, mapT, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableObservable, toEnumerableObservableT, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT, toReadonlyArray, toReadonlyArrayT, toRunnable, toRunnableObservable, toRunnableObservableT, toRunnableT, zip, zipT };

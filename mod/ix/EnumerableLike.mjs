/// <reference types="./EnumerableLike.d.ts" />
import { interactive, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLikeInternal.mjs';
import { properties, prototype } from '../__internal__/util/DelegatingDisposable.mjs';
import { properties as properties$2, prototype as prototype$2, move } from '../__internal__/util/DelegatingEnumerator.mjs';
import { properties as properties$3, prototype as prototype$3 } from '../__internal__/util/Disposable.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../__internal__/util/Enumerator.mjs';
import { mix, Object_init, init, createObjectFactory } from '../__internal__/util/Object.mjs';
import { emptyReadonlyArray } from '../containers.mjs';
import { toEnumerable as toEnumerable$1, every, map as map$1, forEach } from '../containers/ReadonlyArrayLike.mjs';
import { none, pipeUnsafe, newInstance, pipe, strictEquality, compose, isSome, getLength, identity } from '../functions.mjs';
import { InteractiveContainerLike_interact, emptyEnumerableT, emptyEnumerable, createEnumerable } from '../ix.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import { bindTo, add, addTo } from '../util/DisposableLike.mjs';
import { hasCurrent, getCurrent, move as move$1 } from '../util/EnumeratorLike.mjs';
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
const delegatingDisposableEnumeratorProperties = {
    ...properties,
    ...properties$1,
    delegate: none,
};
const delegatingDisposableEnumeratorPrototype = mix(prototype, prototype$1, {
    [Object_init](delegate) {
        init(prototype, this, delegate);
        init(prototype$1, this);
        this.delegate = delegate;
    },
});
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const properties$1 = {
        ...properties,
        ...properties$2,
        equality: none,
    };
    const prototype$1 = mix(prototype, prototype$2, {
        [SourceLike_move]() {
            const hadCurrent = hasCurrent(this);
            const prevCurrent = hadCurrent ? getCurrent(this) : none;
            try {
                while (move(this)) {
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
        [Object_init](delegate, equality) {
            init(prototype, this, delegate);
            init(prototype$2, this, delegate);
            this.equality = equality;
        },
    });
    const createInstance = createObjectFactory(prototype$1, properties$1);
    const distinctUntilChangedEnumerator = (options) => (delegate) => {
        const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
        return createInstance(delegate, equality);
    };
    return compose(distinctUntilChangedEnumerator, lift);
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const keep = /*@__PURE__*/ (() => {
    const properties$1 = {
        ...properties,
        ...properties$2,
        predicate: none,
    };
    const prototype$1 = mix(prototype, prototype$2, {
        [Object_init](delegate, predicate) {
            init(prototype, this, delegate);
            init(prototype$2, this, delegate);
            this.predicate = predicate;
        },
        [SourceLike_move]() {
            const { predicate } = this;
            try {
                while (move(this) &&
                    !predicate(getCurrent(this))) { }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
    });
    const createInstance = createObjectFactory(prototype$1, properties$1);
    const keepEnumerator = (predicate) => (delegate) => createInstance(delegate, predicate);
    return compose(keepEnumerator, lift);
})();
const keepT = {
    keep,
};
const map = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        mapper: none,
    };
    const prototype = mix(delegatingDisposableEnumeratorPrototype, {
        [Object_init](delegate, mapper) {
            init(delegatingDisposableEnumeratorPrototype, this, delegate);
            this.mapper = mapper;
        },
        [SourceLike_move]() {
            const { delegate } = this;
            if (move$1(delegate)) {
                try {
                    this[EnumeratorLike_current] = this.mapper(getCurrent(delegate));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    });
    const createInstance = createObjectFactory(prototype, properties);
    const mapEnumerator = (mapper) => (delegate) => createInstance(delegate, mapper);
    return compose(mapEnumerator, lift);
})();
const mapT = { map };
const onNotify = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        onNotify: none,
    };
    const prototype = mix(delegatingDisposableEnumeratorPrototype, {
        [Object_init](delegate, onNotify) {
            init(delegatingDisposableEnumeratorPrototype, this, delegate);
            this.onNotify = onNotify;
        },
        [SourceLike_move]() {
            const { delegate } = this;
            if (move$1(delegate)) {
                try {
                    this.onNotify(getCurrent(this));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    });
    const createInstance = createObjectFactory(prototype, properties);
    const onNotifyEnumerator = (onNotify) => (delegate) => createInstance(delegate, onNotify);
    return compose(onNotifyEnumerator, lift);
})();
const pairwise = 
/*@__PURE__*/ (() => {
    const prototype = mix(delegatingDisposableEnumeratorPrototype, {
        [SourceLike_move]() {
            const prev = (hasCurrent(this)
                ? getCurrent(this)
                : emptyReadonlyArray())[1];
            const { delegate } = this;
            if (move$1(delegate)) {
                const current = getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
            }
        },
    });
    const createInstance = createObjectFactory(prototype, delegatingDisposableEnumeratorProperties);
    const pairwiseEnumerator = () => (delegate) => createInstance(delegate);
    return () => pipe(pairwiseEnumerator(), lift);
})();
const pairwiseT = {
    pairwise,
};
const scan = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        reducer: none,
    };
    const prototype = mix(delegatingDisposableEnumeratorPrototype, {
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
            if (isSome(acc) && move$1(delegate)) {
                try {
                    this[EnumeratorLike_current] = reducer(acc, getCurrent(delegate));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    });
    const createInstance = createObjectFactory(prototype, properties);
    const scanEnumerator = (reducer, initialValue) => (delegate) => createInstance(delegate, reducer, initialValue);
    return pipe(scanEnumerator, createScanOperator(liftT));
})();
const scanT = {
    scan,
};
const skipFirst = 
/*@__PURE__*/ (() => {
    const properties$1 = {
        ...properties,
        ...properties$2,
        skipCount: 0,
        count: 0,
    };
    const prototype$1 = mix(prototype, prototype$2, {
        [Object_init](delegate, skipCount) {
            init(prototype, this, delegate);
            init(prototype$2, this, delegate);
            this.skipCount = skipCount;
            this.count = 0;
        },
        [SourceLike_move]() {
            const { skipCount } = this;
            for (let { count } = this; count < skipCount; count++) {
                if (!move(this)) {
                    break;
                }
            }
            this.count = skipCount;
            move(this);
        },
    });
    const createInstance = createObjectFactory(prototype$1, properties$1);
    const skipFirstEnumerator = (skipCount) => (delegate) => createInstance(delegate, skipCount);
    return pipe(skipFirstEnumerator, createSkipFirstOperator(liftT));
})();
const skipFirstT = {
    skipFirst,
};
const takeFirst = 
/*@__PURE__*/ (() => {
    const properties$1 = {
        ...properties,
        ...properties$2,
        maxCount: 0,
        count: 0,
    };
    const prototype$1 = mix(prototype, prototype$2, {
        [Object_init](delegate, maxCount) {
            init(prototype, this, delegate);
            init(prototype$2, this, delegate);
            this.maxCount = maxCount;
        },
        [SourceLike_move]() {
            if (this.count < this.maxCount) {
                this.count++;
                move(this);
            }
            else {
                pipe(this, dispose());
            }
        },
    });
    const createInstance = createObjectFactory(prototype$1, properties$1);
    const takeFirstEnumerator = (maxCount) => (delegate) => createInstance(delegate, maxCount);
    return pipe(takeFirstEnumerator, createTakeFirstOperator({ ...liftT, ...emptyEnumerableT }));
})();
const takeFirstT = {
    takeFirst,
};
const takeLast = 
/*@__PURE__*/ (() => {
    const properties = {
        ...properties$3,
        ...properties$2,
        maxCount: 0,
        isStarted: false,
    };
    const prototype = mix(prototype$3, prototype$2, {
        [Object_init](delegate, maxCount) {
            init(prototype$3, this);
            init(prototype$2, this, delegate);
            this.maxCount = maxCount;
            this.isStarted = false;
        },
        [SourceLike_move]() {
            if (!isDisposed(this) && !this.isStarted) {
                this.isStarted = true;
                const last = [];
                while (move(this)) {
                    last.push(getCurrent(this));
                    if (getLength(last) > this.maxCount) {
                        last.shift();
                    }
                }
                const enumerator = pipe(last, toEnumerable$1(), enumerate(), bindTo(this));
                init(prototype$2, this, enumerator);
            }
            move(this);
        },
    });
    const createInstance = createObjectFactory(prototype, properties);
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
    const properties$1 = {
        ...properties,
        ...properties$2,
        predicate: none,
        inclusive: false,
        done: false,
    };
    const prototype$1 = mix(prototype, prototype$2, {
        [Object_init](delegate, predicate, inclusive) {
            init(prototype, this, delegate);
            init(prototype$2, this, delegate);
            this.predicate = predicate;
            this.inclusive = inclusive;
        },
        [SourceLike_move]() {
            const { inclusive, predicate } = this;
            if (this.done && !isDisposed(this)) {
                pipe(this, dispose());
            }
            else if (move(this)) {
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
    });
    const createInstance = createObjectFactory(prototype$1, properties$1);
    const takeWhileEnumerator = (predicate, inclusive) => (delegate) => createInstance(delegate, predicate, inclusive);
    return pipe(takeWhileEnumerator, createTakeWhileOperator(liftT));
})();
const takeWhileT = { takeWhile };
const TContainerOf = undefined;
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const properties = {
        ...properties$3,
        ...properties$2,
        isEmpty: true,
    };
    const prototype = mix(prototype$3, prototype$2, {
        [Object_init](delegate) {
            init(prototype$3, this);
            init(prototype$2, this, delegate);
            this.isEmpty = true;
        },
        [SourceLike_move]() {
            if (move(this)) {
                this.isEmpty = false;
            }
        },
    });
    const createInstance = createObjectFactory(prototype, properties);
    const throwIfEmptyEnumerator = () => (delegate) => createInstance(delegate);
    return pipe(throwIfEmptyEnumerator, createThrowIfEmptyOperator(liftT));
})();
const throwIfEmptyT = {
    throwIfEmpty,
};
const toReadonlyArray = () => (enumerable) => {
    const enumerator = pipe(enumerable, enumerate());
    const result = [];
    while (move$1(enumerator)) {
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
const toEnumerable = () => identity;
const toEnumerableT = {
    toEnumerable,
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
            while (move$1(enumerator)) {
                yield getCurrent(enumerator);
            }
        }
    }
    // FIXME: InstanceFactory?
    return () => enumerable => newInstance(EnumerableIterable, enumerable);
})();
const toIterableT = { toIterable };
const zip = /*@__PURE__*/ (() => {
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            move$1(enumerator);
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, every(hasCurrent));
    const properties = {
        ...properties$3,
        ...properties$1,
        enumerators: none,
    };
    const prototype = mix(prototype$3, prototype$1, {
        [Object_init](enumerators) {
            init(prototype$3, this);
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
    });
    const createInstance = createObjectFactory(prototype, properties);
    const zipEnumerators = (enumerators) => {
        const instance = createInstance(enumerators);
        pipe(enumerators, forEach(addTo(instance)));
        return instance;
    };
    const zip = (enumerables) => createEnumerable(() => pipe(enumerables, map$1(enumerate()), zipEnumerators));
    return zip;
})();
const zipT = { zip };

export { TContainerOf, distinctUntilChanged, distinctUntilChangedT, enumerate, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, toReadonlyArray, toReadonlyArrayT, zipT };

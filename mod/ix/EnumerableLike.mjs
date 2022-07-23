/// <reference types="./EnumerableLike.d.ts" />
import { createFromArray } from '../__internal__/containers/ContainerLike.mjs';
import { interactive, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/StatefulContainerLike.mjs';
import { properties as properties$3, prototype as prototype$3, move as move$1, init as init$2 } from '../__internal__/ix/DelegatingEnumerator.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../__internal__/ix/Enumerator.mjs';
import { properties, prototype, init } from '../__internal__/util/DelegatingDisposable.mjs';
import { properties as properties$2, prototype as prototype$2, init as init$1 } from '../__internal__/util/Disposable.mjs';
import { createObjectFactory } from '../__internal__/util/Object.mjs';
import { empty } from '../containers/ContainerLike.mjs';
import { empty as empty$1, every, map as map$1, forEach } from '../containers/ReadonlyArrayLike.mjs';
import { bindTo, add, addTo } from '../util/DisposableLike.mjs';
import { none, isSome } from '../util/Option.mjs';
import { pipeUnsafe, newInstance, pipe, strictEquality, compose, identity, getLength } from '../util/functions.mjs';
import { hasCurrent, getCurrent, move, EnumeratorLike_current } from './EnumeratorLike.mjs';
import { InteractiveContainerLike_interact } from './InteractiveContainerLike.mjs';
import { InteractiveSourceLike_move } from './InteractiveSourceLike.mjs';
import { dispose, isDisposed } from '../__internal__/util/DisposableLike.mjs';

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
class CreateEnumerable {
    constructor(_enumerate) {
        this._enumerate = _enumerate;
    }
    [InteractiveContainerLike_interact]() {
        try {
            return this._enumerate();
        }
        catch (cause) {
            return pipe(empty(fromArrayT), enumerate(), dispose({ cause }));
        }
    }
}
const createEnumerable = (enumerate) => newInstance(CreateEnumerable, enumerate);
const createT = {
    create: (source) => createEnumerable(() => source(none)),
};
const delegatingDisposableEnumeratorProperties = {
    ...properties,
    ...properties$1,
    delegate: none,
};
const delegatingDisposableEnumeratorPrototype = {
    ...prototype,
    ...prototype$1,
};
const delegatingDisposableEnumeratorInit = (instance, delegate) => {
    init(instance, delegate);
    instance.delegate = delegate;
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        equality: none,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const hadCurrent = hasCurrent(this);
            const prevCurrent = hadCurrent ? getCurrent(this) : none;
            try {
                const { delegate } = this;
                while (move(delegate)) {
                    if (!hadCurrent ||
                        !this.equality(prevCurrent, getCurrent(delegate))) {
                        break;
                    }
                }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const distinctUntilChangedEnumerator = (options) => (delegate) => {
        const { equality = strictEquality } = options !== null && options !== void 0 ? options : {};
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.equality = equality;
        return instance;
    };
    return compose(distinctUntilChangedEnumerator, lift);
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const fromArray = 
/*@__PURE__*/ (() => {
    const properties = {
        ...properties$2,
        ...properties$1,
        array: [],
        count: 0,
        index: 0,
    };
    const prototype = {
        ...prototype$2,
        ...prototype$1,
        [InteractiveSourceLike_move]() {
            const { array } = this;
            if (!isDisposed(this)) {
                this.index++;
                const { index, count } = this;
                if (count !== 0) {
                    this[EnumeratorLike_current] = array[index];
                    this.count = count > 0 ? this.count-- : this.count++;
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    class FromArrayEnumerable {
        constructor(array, start, count) {
            this.array = array;
            this.start = start;
            this.count = count;
        }
        [InteractiveContainerLike_interact]() {
            const instance = createInstance();
            init$1(instance);
            instance.array = this.array;
            instance.index = this.start - 1;
            instance.count = this.count;
            return instance;
        }
    }
    return createFromArray((a, start, count) => newInstance(FromArrayEnumerable, a, start, count));
})();
const fromArrayT = { fromArray };
const fromEnumerable = () => identity;
const fromEnumerableT = {
    fromEnumerable,
};
const keep = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        predicate: none,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const { delegate, predicate } = this;
            try {
                while (move(delegate) && !predicate(getCurrent(delegate))) { }
            }
            catch (cause) {
                pipe(this, dispose({ cause }));
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const keepEnumerator = (predicate) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.predicate = predicate;
        return instance;
    };
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
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
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
    };
    const createInstance = createObjectFactory(prototype, properties);
    const mapEnumerator = (mapper) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.mapper = mapper;
        return instance;
    };
    return compose(mapEnumerator, lift);
})();
const mapT = { map };
const onNotify = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        onNotify: none,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const { delegate } = this;
            if (move(delegate)) {
                try {
                    this.onNotify(getCurrent(this));
                }
                catch (cause) {
                    pipe(this, dispose({ cause }));
                }
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const onNotifyEnumerator = (onNotify) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.onNotify = onNotify;
        return instance;
    };
    return compose(onNotifyEnumerator, lift);
})();
const pairwise = 
/*@__PURE__*/ (() => {
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const prev = (hasCurrent(this) ? getCurrent(this) : empty$1())[1];
            const { delegate } = this;
            if (move(delegate)) {
                const current = getCurrent(delegate);
                this[EnumeratorLike_current] = [prev, current];
            }
        },
    };
    const createInstance = createObjectFactory(prototype, delegatingDisposableEnumeratorProperties);
    const pairwiseEnumerator = () => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        return instance;
    };
    return () => pipe(pairwiseEnumerator(), lift);
})();
const pairwiseT = {
    pairwise,
};
const scan = /*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        reducer: none,
        current: none,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
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
    };
    const createInstance = createObjectFactory(prototype, properties);
    const scanEnumerator = (reducer, initialValue) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.reducer = reducer;
        instance.current = initialValue;
        return instance;
    };
    return pipe(scanEnumerator, createScanOperator(liftT));
})();
const scanT = {
    scan,
};
const skipFirst = 
/*@__PURE__*/ (() => {
    const properties = {
        ...delegatingDisposableEnumeratorProperties,
        skipCount: 0,
        count: 0,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        [InteractiveSourceLike_move]() {
            const { delegate, skipCount } = this;
            for (let { count } = this; count < skipCount; count++) {
                if (!move(delegate)) {
                    break;
                }
            }
            this.count = skipCount;
            move(delegate);
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const skipFirstEnumerator = (skipCount) => (delegate) => {
        const instance = createInstance();
        delegatingDisposableEnumeratorInit(instance, delegate);
        instance.skipCount = skipCount;
        return instance;
    };
    return pipe(skipFirstEnumerator, createSkipFirstOperator(liftT));
})();
const skipFirstT = {
    skipFirst,
};
const takeFirst = 
/*@__PURE__*/ (() => {
    const properties$1 = {
        ...properties,
        ...properties$3,
        maxCount: 0,
        count: 0,
    };
    const prototype$1 = {
        ...prototype,
        ...prototype$3,
        [InteractiveSourceLike_move]() {
            if (this.count < this.maxCount) {
                this.count++;
                move$1(this);
            }
            else {
                pipe(this, dispose());
            }
        },
    };
    const createInstance = createObjectFactory(prototype$1, properties$1);
    const takeFirstEnumerator = (maxCount) => (delegate) => {
        const instance = createInstance();
        init(instance, delegate);
        init$2(instance, delegate);
        instance.maxCount = maxCount;
        return instance;
    };
    return pipe(takeFirstEnumerator, createTakeFirstOperator({ ...liftT, ...fromArrayT }));
})();
const takeFirstT = {
    takeFirst,
};
const takeLast = 
/*@__PURE__*/ (() => {
    const properties = {
        ...properties$2,
        ...properties$3,
        maxCount: 0,
        isStarted: false,
    };
    const prototype = {
        ...prototype$2,
        ...prototype$3,
        [InteractiveSourceLike_move]() {
            if (!isDisposed(this) && !this.isStarted) {
                this.isStarted = true;
                const last = [];
                while (move$1(this)) {
                    last.push(getCurrent(this));
                    if (getLength(last) > this.maxCount) {
                        last.shift();
                    }
                }
                const enumerator = pipe(last, fromArray(), enumerate(), bindTo(this));
                init$2(this, enumerator);
            }
            move$1(this);
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    return (options = {}) => {
        const { count = 1 } = options;
        const operator = (delegate) => {
            const instance = createInstance();
            init$1(instance);
            init$2(instance, delegate);
            pipe(instance, add(delegate));
            instance.maxCount = count;
            return instance;
        };
        return enumerable => count > 0
            ? pipe(enumerable, lift(operator))
            : // FIXME: why do we need the annotations?
                empty(fromArrayT);
    };
})();
const takeLastT = { takeLast };
const takeWhile = 
/*@__PURE__*/ (() => {
    const properties$1 = {
        ...properties,
        ...properties$3,
        predicate: none,
        inclusive: false,
        done: false,
    };
    const prototype = {
        ...delegatingDisposableEnumeratorPrototype,
        ...prototype$3,
        [InteractiveSourceLike_move]() {
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
    };
    const createInstance = createObjectFactory(prototype, properties$1);
    const takeWhileEnumerator = (predicate, inclusive) => (delegate) => {
        const instance = createInstance();
        init(instance, delegate);
        init$2(instance, delegate);
        instance.predicate = predicate;
        instance.inclusive = inclusive;
        return instance;
    };
    return pipe(takeWhileEnumerator, createTakeWhileOperator(liftT));
})();
const takeWhileT = {
    takeWhile,
};
const TContainerOf = undefined;
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const properties = {
        ...properties$2,
        ...properties$3,
        isEmpty: true,
    };
    const prototype = {
        ...prototype$2,
        ...prototype$3,
        [InteractiveSourceLike_move]() {
            if (move$1(this)) {
                this.isEmpty = false;
            }
        },
    };
    const createInstance = createObjectFactory(prototype, properties);
    const throwIfEmptyEnumerator = () => (delegate) => {
        const instance = createInstance();
        init$1(instance);
        init$2(instance, delegate);
        return instance;
    };
    return pipe(throwIfEmptyEnumerator, createThrowIfEmptyOperator(liftT));
})();
const throwIfEmptyT = {
    throwIfEmpty,
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
            while (move(enumerator)) {
                yield getCurrent(enumerator);
            }
        }
    }
    // FIXME: InstanceFactory?
    return () => enumerable => newInstance(EnumerableIterable, enumerable);
})();
const toIterableT = {
    toIterable,
};
const zip = /*@__PURE__*/ (() => {
    const moveAll = (enumerators) => {
        for (const enumerator of enumerators) {
            move(enumerator);
        }
    };
    const allHaveCurrent = (enumerators) => pipe(enumerators, every(hasCurrent));
    const properties = {
        ...properties$2,
        ...properties$1,
        enumerators: none,
    };
    const prototype = {
        ...prototype$2,
        ...prototype$1,
        [InteractiveSourceLike_move]() {
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
    };
    const createInstance = createObjectFactory(prototype, properties);
    const zipEnumerators = (enumerators) => {
        const instance = createInstance();
        init$1(instance);
        instance.enumerators = enumerators;
        pipe(enumerators, forEach(addTo(instance)));
        return instance;
    };
    const zip = (enumerables) => createEnumerable(() => pipe(enumerables, map$1(enumerate()), zipEnumerators));
    return zip;
})();
const zipT = {
    zip,
};

export { TContainerOf, createEnumerable, createT, distinctUntilChanged, distinctUntilChangedT, enumerate, fromArray, fromArrayT, fromEnumerable, fromEnumerableT, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, zipT };

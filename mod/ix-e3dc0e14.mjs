import { none, raise, pipe, newInstance } from './functions.mjs';
import { properties as properties$1, prototype as prototype$1 } from './__internal__/util/Disposable.mjs';
import { Object_init, init, createObjectFactory } from './__internal__/util/Object.mjs';
import './util/DisposableLike.mjs';
import { isDisposed, dispose } from './__internal__/util/DisposableLikeInternal.mjs';

const move$1 = (source) => {
    source[InteractiveSourceLike_move]();
    return source;
};

const getCurrent = (enumerator) => enumerator[EnumeratorLike_current];
const hasCurrent = (enumerator) => enumerator[EnumeratorLike_hasCurrent];
const move = (enumerator) => {
    move$1(enumerator);
    return hasCurrent(enumerator);
};
const forEach = (f) => enumerator => {
    while (move(enumerator)) {
        f(getCurrent(enumerator));
    }
    return enumerator;
};

const Enumerator_private_current = Symbol("Enumerator_private_current");
const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");
const properties = {
    [Enumerator_private_current]: none,
    [Enumerator_private_hasCurrent]: false,
};
const prototype = {
    [Object_init]() {
        this[Enumerator_private_current] = none;
        this[Enumerator_private_hasCurrent] = false;
    },
    get [EnumeratorLike_current]() {
        const self = this;
        return hasCurrent(self) ? self[Enumerator_private_current] : raise();
    },
    set [EnumeratorLike_current](v) {
        const self = this;
        if (!isDisposed(self)) {
            self[Enumerator_private_current] = v;
            self[Enumerator_private_hasCurrent] = true;
        }
    },
    get [EnumeratorLike_hasCurrent]() {
        const self = this;
        return !isDisposed(self) && self[Enumerator_private_hasCurrent];
    },
};

/** @ignore */
const InteractiveSourceLike_move = Symbol("InteractiveSourceLike_move");
/** @ignore */
const EnumeratorLike_current = Symbol("EnumeratorLike_current");
/** @ignore */
const EnumeratorLike_hasCurrent = Symbol("EnumeratorLike_hasCurrent");
/** @ignore */
const InteractiveContainerLike_interact = Symbol("InteractiveContainerLike_interact");
const createEnumerable = /*@__PURE__*/ (() => {
    class CreateEnumerable {
        constructor(_enumerate) {
            this._enumerate = _enumerate;
        }
        [InteractiveContainerLike_interact]() {
            try {
                return this._enumerate();
            }
            catch (cause) {
                const empty = emptyEnumerable();
                return pipe(empty[InteractiveContainerLike_interact](none), dispose({ cause }));
            }
        }
    }
    return (enumerate) => newInstance(CreateEnumerable, enumerate);
})();
const emptyEnumerable = 
/*@__PURE__*/ (() => {
    const properties$2 = {
        ...properties$1,
        ...properties,
    };
    const prototype$2 = {
        ...prototype$1,
        ...prototype,
        [Object_init]() {
            init(prototype$1, this);
            init(prototype, this);
        },
        [InteractiveSourceLike_move]() {
            pipe(this, dispose());
        },
    };
    const createInstance = createObjectFactory(prototype$2, properties$2);
    class EmptyEnumerable {
        [InteractiveContainerLike_interact]() {
            return createInstance();
        }
    }
    return () => newInstance(EmptyEnumerable);
})();
const emptyEnumerableT = {
    empty: emptyEnumerable,
};

export { EnumeratorLike_current as E, InteractiveSourceLike_move as I, EnumeratorLike_hasCurrent as a, prototype as b, InteractiveContainerLike_interact as c, emptyEnumerable as d, emptyEnumerableT as e, createEnumerable as f, getCurrent as g, hasCurrent as h, move$1 as i, forEach as j, move as m, properties as p };

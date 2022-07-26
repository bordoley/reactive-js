/// <reference types="./IterableLike.d.ts" />
import { prototype } from '../__internal__/util/Disposable.mjs';
import { prototype as prototype$1 } from '../__internal__/util/Enumerator.mjs';
import { Object_properties, mix, Object_init, init, createObjectFactory } from '../__internal__/util/Object.mjs';
import { none, pipe, identity } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { isDisposed, dispose } from '../__internal__/util/DisposableLikeInternal.mjs';

const toEnumerable = 
/*@__PURE__*/ (() => {
    const properties = {
        ...prototype[Object_properties],
        ...prototype$1[Object_properties],
        iterator: none,
    };
    const createInstance = pipe(mix(prototype, prototype$1, {
        [Object_properties]: properties,
        [Object_init](iterator) {
            init(prototype, this);
            this.iterator = iterator;
        },
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                const next = this.iterator.next();
                if (!next.done) {
                    this[EnumeratorLike_current] = next.value;
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
    }), createObjectFactory());
    return () => (iterable) => createEnumerable(() => createInstance(iterable[Symbol.iterator]()));
})();
const toEnumerableT = { toEnumerable };
const toIterable = () => identity;
const toIterableT = {
    toIterable,
};

export { toEnumerable, toEnumerableT, toIterable, toIterableT };

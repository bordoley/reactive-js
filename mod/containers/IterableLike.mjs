/// <reference types="./IterableLike.d.ts" />
import { properties, prototype } from '../__internal__/util/Disposable.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../__internal__/util/Enumerator.mjs';
import { createObjectFactory, mix, Object_init, init } from '../__internal__/util/Object.mjs';
import { none, pipe, identity } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { isDisposed, dispose } from '../__internal__/util/DisposableLikeInternal.mjs';

const toEnumerable = 
/*@__PURE__*/ (() => {
    const properties$2 = {
        ...properties,
        ...properties$1,
        iterator: none,
    };
    const createInstance = createObjectFactory(properties$2, mix(prototype, prototype$1, {
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
    }));
    return () => (iterable) => createEnumerable(() => createInstance(iterable[Symbol.iterator]()));
})();
const toEnumerableT = { toEnumerable };
const toIterable = () => identity;
const toIterableT = {
    toIterable,
};

export { toEnumerable, toEnumerableT, toIterable, toIterableT };

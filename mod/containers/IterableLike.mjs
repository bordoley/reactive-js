/// <reference types="./IterableLike.d.ts" />
import { disposableMixin } from '../__internal__/util/DisposableLikeMixins.mjs';
import { enumeratorMixin } from '../__internal__/util/EnumeratorLikeMixin.mjs';
import { clazz, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { pipe, none, identity } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import '../util/DisposableLike.mjs';
import { isDisposed, dispose } from '../__internal__/util/DisposableLikeInternal.mjs';

const toEnumerable = 
/*@__PURE__*/ (() => {
    const typedEnumeratorMixin = enumeratorMixin();
    const createIterableEnumerator = pipe(clazz(function IteratorEnumerator(iterator) {
        init(disposableMixin, this);
        this.iterator = iterator;
    }, { iterator: none }, {
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
    }), mixWith(disposableMixin, typedEnumeratorMixin), createObjectFactory());
    return () => (iterable) => createEnumerable(() => createIterableEnumerator(iterable[Symbol.iterator]()));
})();
const toEnumerableT = { toEnumerable };
const toIterable = () => identity;
const toIterableT = {
    toIterable,
};

export { toEnumerable, toEnumerableT, toIterable, toIterableT };

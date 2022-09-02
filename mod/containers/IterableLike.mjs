/// <reference types="./IterableLike.d.ts" />
import { create } from '../__internal__/ix/EnumerableLike.create.mjs';
import { mutableEnumeratorMixin } from '../__internal__/ix/EnumeratorLike.mutable.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../__internal__/mixins.mjs';
import { disposableMixin } from '../__internal__/util/DisposableLike.mixins.mjs';
import { compose, none, pipe, identity } from '../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../ix.mjs';
import { fromEnumerable } from '../ix/AsyncEnumerableLike.mjs';
import { toObservable as toObservable$1 } from '../ix/EnumerableLike.mjs';
import { isDisposed, dispose } from '../util/DisposableLike.mjs';

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
const toAsyncEnumerable = () => compose(toEnumerable(), fromEnumerable());
const toAsyncEnumerableT = {
    toAsyncEnumerable,
};
const toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    const createIterableEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function IteratorEnumerator(instance, iterator) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.iterator = iterator;
        return instance;
    }, props({ iterator: none }), {
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
    return () => (iterable) => create(() => createIterableEnumerator(iterable[Symbol.iterator]()));
})();
const toEnumerableT = { toEnumerable };
const toIterable = () => identity;
const toIterableT = {
    toIterable,
};
const toObservable = (options => compose(toEnumerable(), toObservable$1(options)));
const toObservableT = { toObservable };

export { toAsyncEnumerable, toAsyncEnumerableT, toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT };

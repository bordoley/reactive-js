/// <reference types="./IterableLike.d.ts" />
import { disposableMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { enumeratorMixin } from '../__internal__/util/__internal__Enumerators.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../__internal__/util/__internal__Objects.mjs';
import { compose, none, pipe, identity } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { fromEnumerable } from '../ix/AsyncEnumerableLike.mjs';
import { toObservable as toObservable$1 } from '../ix/EnumerableLike.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import { i as isDisposed, f as dispose } from '../DisposableLike-d42502aa.mjs';

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
    const typedEnumeratorMixin = enumeratorMixin();
    const createIterableEnumerator = createInstanceFactory(mixin(include(disposableMixin, typedEnumeratorMixin), function IteratorEnumerator(instance, iterator) {
        init(disposableMixin, instance);
        init(typedEnumeratorMixin, instance);
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
    return () => (iterable) => createEnumerable(() => createIterableEnumerator(iterable[Symbol.iterator]()));
})();
const toEnumerableT = { toEnumerable };
const toIterable = () => identity;
const toIterableT = {
    toIterable,
};
const toObservable = (options => compose(toEnumerable(), toObservable$1(options)));
const toObservableT = { toObservable };

export { toAsyncEnumerable, toAsyncEnumerableT, toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT };

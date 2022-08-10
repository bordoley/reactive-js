/// <reference types="./IterableLike.d.ts" />
import { disposableMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { enumeratorMixin } from '../__internal__/util/__internal__Enumerators.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/__internal__Objects.mjs';
import { unsafeCast, none, pipe, identity, compose } from '../functions.mjs';
import { createEnumerable } from '../ix.mjs';
import { toObservable as toObservable$1 } from '../ix/EnumerableLike.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import { isDisposed, dispose } from '../util/DisposableLike.mjs';

const toEnumerable = 
/*@__PURE__*/ (() => {
    const typedEnumeratorMixin = enumeratorMixin();
    const createIterableEnumerator = createInstanceFactory(clazz(__extends(disposableMixin, typedEnumeratorMixin), function IteratorEnumerator(instance, iterator) {
        init(disposableMixin, instance);
        init(typedEnumeratorMixin, instance);
        unsafeCast(instance);
        instance.iterator = iterator;
        return instance;
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

export { toEnumerable, toEnumerableT, toIterable, toIterableT, toObservable, toObservableT };

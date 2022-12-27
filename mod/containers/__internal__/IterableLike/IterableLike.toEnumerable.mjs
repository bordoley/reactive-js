/// <reference types="./IterableLike.toEnumerable.d.ts" />
import { create } from '../../../__internal__/ix/EnumerableLike.create.mjs';
import { mutableEnumeratorMixin } from '../../../__internal__/ix/EnumeratorLike.mutable.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import { isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';

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

export { toEnumerable as default };

/// <reference types="./IterableLike.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import EnumerableLike__create from '../../../ix/__internal__/EnumerableLike/EnumerableLike.create.mjs';
import MutableEnumeratorLike__mixin from '../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import { isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import DisposableLike__disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';

const IterableLike__toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumeratorLike__mixin();
    const createIterableEnumerator = createInstanceFactory(mix(include(DisposableLike__disposableMixin, typedMutableEnumeratorMixin), function IteratorEnumerator(instance, iterator) {
        init(DisposableLike__disposableMixin, instance);
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
    return () => (iterable) => EnumerableLike__create(() => createIterableEnumerator(iterable[Symbol.iterator]()));
})();

export { IterableLike__toEnumerable as default };

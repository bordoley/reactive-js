/// <reference types="./Iterable.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerable_create from '../../../ix/__internal__/Enumerable/Enumerable.create.mjs';
import MutableEnumerator_mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';

const Iterable_toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const IteratorEnumerator_iterator = Symbol("IteratorEnumerator_iterator");
    const createIterableEnumerator = createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function IteratorEnumerator(instance, iterator) {
        init(Disposable_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance[IteratorEnumerator_iterator] = iterator;
        return instance;
    }, props({ [IteratorEnumerator_iterator]: none }), {
        [SourceLike_move]() {
            if (!Disposable_isDisposed(this)) {
                const next = this[IteratorEnumerator_iterator].next();
                if (!next.done) {
                    this[EnumeratorLike_current] = next.value;
                }
                else {
                    pipe(this, Disposable_dispose());
                }
            }
        },
    }));
    return () => (iterable) => Enumerable_create(() => createIterableEnumerator(iterable[Symbol.iterator]()));
})();

export { Iterable_toEnumerable as default };

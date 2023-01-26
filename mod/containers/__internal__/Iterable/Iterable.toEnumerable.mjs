/// <reference types="./Iterable.toEnumerable.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, pipe } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerable$create from '../../../ix/__internal__/Enumerable/Enumerable.create.mjs';
import MutableEnumerator$mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';

const Iterable$toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = MutableEnumerator$mixin();
    const createIterableEnumerator = createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin), function IteratorEnumerator(instance, iterator) {
        init(Disposable$mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        instance.iterator = iterator;
        return instance;
    }, props({ iterator: none }), {
        [SourceLike_move]() {
            if (!Disposable$isDisposed(this)) {
                const next = this.iterator.next();
                if (!next.done) {
                    this[EnumeratorLike_current] = next.value;
                }
                else {
                    pipe(this, Disposable$dispose());
                }
            }
        },
    }));
    return () => (iterable) => Enumerable$create(() => createIterableEnumerator(iterable[Symbol.iterator]()));
})();

export { Iterable$toEnumerable as default };

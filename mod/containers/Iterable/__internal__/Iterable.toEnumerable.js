/// <reference types="./Iterable.toEnumerable.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, returns } from "../../../functions.js";
import { EnumeratorLike_current, SourceLike_move, } from "../../../ix.js";
import Enumerable_create from "../../../ix/Enumerable/__internal__/Enumerable.create.js";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
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
    return returns((iterable) => Enumerable_create(() => createIterableEnumerator(iterable[Symbol.iterator]())));
})();
export default Iterable_toEnumerable;

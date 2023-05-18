/// <reference types="./Iterator.enumerate.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __IteratorEnumerator_iterator } from "../../__internal__/symbols.js";
import { none, returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
const Iterator_enumerate = 
/*@__PURE__*/ (() => {
    const createEnumerator = createInstanceFactory(mix(include(Disposable_mixin, MutableEnumerator_mixin()), function IteratorEnumerator(instance, iterator) {
        init(MutableEnumerator_mixin(), instance);
        init(Disposable_mixin, instance);
        instance[__IteratorEnumerator_iterator] = iterator;
        return instance;
    }, props({
        [__IteratorEnumerator_iterator]: none,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            if (this[DisposableLike_isDisposed]) {
                return false;
            }
            const next = this[__IteratorEnumerator_iterator].next();
            if (!next.done) {
                this[EnumeratorLike_current] = next.value;
            }
            else {
                this[DisposableLike_dispose]();
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return returns(createEnumerator);
})();
export default Iterator_enumerate;

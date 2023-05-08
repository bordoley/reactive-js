/// <reference types="./Iterator.enumerate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __IteratorEnumerator_iterator } from "../../../__internal__/symbols.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../core.js";
import { none, returns } from "../../../functions.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
const Iterator_enumerate = 
/*@__PURE__*/ (() => {
    const createEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin()), function IteratorEnumerator(instance, iterator) {
        init(MutableEnumerator_mixin(), instance);
        instance[__IteratorEnumerator_iterator] = iterator;
        return instance;
    }, props({
        [__IteratorEnumerator_iterator]: none,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const next = this[__IteratorEnumerator_iterator].next();
            if (!next.done) {
                this[EnumeratorLike_current] = next.value;
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return returns(createEnumerator);
})();
export default Iterator_enumerate;

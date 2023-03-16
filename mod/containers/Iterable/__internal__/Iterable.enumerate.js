/// <reference types="./Iterable.enumerate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { IteratorEnumerator_iterator } from "../../../__internal__/symbols.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import { none, returns } from "../../../functions.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
const Iterable_enumerate = /*@__PURE__*/ (() => {
    const createEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin()), function IteratorEnumerator(instance, iterator) {
        init(MutableEnumerator_mixin(), instance);
        instance[IteratorEnumerator_iterator] = iterator;
        return instance;
    }, props({
        [IteratorEnumerator_iterator]: none,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const next = this[IteratorEnumerator_iterator].next();
            if (!next.done) {
                this[EnumeratorLike_current] = next.value;
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return returns((iterable) => {
        const iterator = iterable[Symbol.iterator]();
        return createEnumerator(iterator);
    });
})();
export default Iterable_enumerate;

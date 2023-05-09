/// <reference types="./ReadonlyArray.enumerate.d.ts" />

import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __ReadonlyArrayEnumerator_count, __ReadonlyArrayEnumerator_index, __ReadonlyArrayEnumerator_values, } from "../../__internal__/symbols.js";
import { none } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../types.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const ReadonlyArray_enumerate = /*@__PURE__*/ (() => {
    const createEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin()), function ReadonlyArrayEnumerator(instance, values, start, count, _) {
        init(MutableEnumerator_mixin(), instance);
        instance[__ReadonlyArrayEnumerator_values] = values;
        instance[__ReadonlyArrayEnumerator_index] = start;
        instance[__ReadonlyArrayEnumerator_count] = count;
        return instance;
    }, props({
        [__ReadonlyArrayEnumerator_values]: none,
        [__ReadonlyArrayEnumerator_index]: -1,
        [__ReadonlyArrayEnumerator_count]: 0,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const count = this[__ReadonlyArrayEnumerator_count];
            if (count != 0) {
                const values = this[__ReadonlyArrayEnumerator_values];
                const index = this[__ReadonlyArrayEnumerator_index];
                const value = values[index];
                this[EnumeratorLike_current] = value;
            }
            if (count > 0) {
                this[__ReadonlyArrayEnumerator_count]--;
                this[__ReadonlyArrayEnumerator_index]++;
            }
            else if (count < 0) {
                this[__ReadonlyArrayEnumerator_count]++;
                this[__ReadonlyArrayEnumerator_index]--;
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return ReadonlyArray_toContainer(createEnumerator);
})();
export default ReadonlyArray_enumerate;

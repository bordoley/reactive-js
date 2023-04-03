/// <reference types="./ReadonlyArray.enumerate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ReadonlyArrayEnumerator_count, ReadonlyArrayEnumerator_index, ReadonlyArrayEnumerator_values, } from "../../../__internal__/symbols.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { none } from "../../../functions.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const ReadonlyArray_enumerate = /*@__PURE__*/ (() => {
    const createEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin()), function ReadonlyArrayEnumerator(instance, values, start, count, _) {
        init(MutableEnumerator_mixin(), instance);
        instance[ReadonlyArrayEnumerator_values] = values;
        instance[ReadonlyArrayEnumerator_index] = start;
        instance[ReadonlyArrayEnumerator_count] = count;
        return instance;
    }, props({
        [ReadonlyArrayEnumerator_values]: none,
        [ReadonlyArrayEnumerator_index]: -1,
        [ReadonlyArrayEnumerator_count]: 0,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            const count = this[ReadonlyArrayEnumerator_count];
            if (count != 0) {
                const values = this[ReadonlyArrayEnumerator_values];
                const index = this[ReadonlyArrayEnumerator_index];
                const value = values[index];
                this[EnumeratorLike_current] = value;
            }
            if (count > 0) {
                this[ReadonlyArrayEnumerator_count]--;
                this[ReadonlyArrayEnumerator_index]++;
            }
            else if (count < 0) {
                this[ReadonlyArrayEnumerator_count]++;
                this[ReadonlyArrayEnumerator_index]--;
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return ReadonlyArray_toContainer(createEnumerator);
})();
export default ReadonlyArray_enumerate;

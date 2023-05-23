/// <reference types="./ReadonlyArray.enumerate.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import MutableEnumerator_mixin, { MutableEnumeratorLike_reset, } from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __ReadonlyArrayEnumerator_index, __ReadonlyArrayEnumerator_values, } from "../../__internal__/symbols.js";
import { CountingLike_count } from "../../__internal__/types.js";
import { none } from "../../functions.js";
import { Container_type, DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, EnumeratorLike_move, } from "../../types.js";
import ReadonlyArray_toContainer from "./ReadonlyArray.toContainer.js";
const ReadonlyArray_enumerate = 
/*@__PURE__*/ (() => {
    const createEnumerator = createInstanceFactory(mix(include(MutableEnumerator_mixin(), Disposable_mixin), function ReadonlyArrayEnumerator(instance, values, start, count, _) {
        init(MutableEnumerator_mixin(), instance);
        init(Disposable_mixin, instance);
        instance[__ReadonlyArrayEnumerator_values] = values;
        instance[__ReadonlyArrayEnumerator_index] = start;
        instance[CountingLike_count] = count;
        return instance;
    }, props({
        [__ReadonlyArrayEnumerator_values]: none,
        [__ReadonlyArrayEnumerator_index]: -1,
        [CountingLike_count]: 0,
    }), {
        [EnumeratorLike_move]() {
            this[MutableEnumeratorLike_reset]();
            if (this[DisposableLike_isDisposed]) {
                this[EnumeratorLike_isCompleted] = true;
                return false;
            }
            const count = this[CountingLike_count];
            if (count !== 0) {
                const values = this[__ReadonlyArrayEnumerator_values];
                const index = this[__ReadonlyArrayEnumerator_index];
                const value = values[index];
                this[EnumeratorLike_current] = value;
            }
            if (count > 0) {
                this[CountingLike_count]--;
                this[__ReadonlyArrayEnumerator_index]++;
            }
            else if (count < 0) {
                this[CountingLike_count]++;
                this[__ReadonlyArrayEnumerator_index]--;
            }
            if (this[CountingLike_count] === 0) {
                this[DisposableLike_dispose]();
            }
            return this[EnumeratorLike_hasCurrent];
        },
    }));
    return ReadonlyArray_toContainer(createEnumerator);
})();
export default ReadonlyArray_enumerate;

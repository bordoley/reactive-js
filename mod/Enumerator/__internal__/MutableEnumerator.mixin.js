/// <reference types="./MutableEnumerator.mixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { __MutableEnumeratorLike_reset as MutableEnumeratorLike_reset, __Enumerator_private_current, } from "../../__internal__/symbols.js";
import { none, pipe, raiseWithDebugMessage, returns } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, } from "../../types.js";
export { MutableEnumeratorLike_reset };
const MutableEnumerator_mixin = 
/*@__PURE__*/ (() => {
    return pipe(mix(function EnumeratorMixin(instance) {
        return instance;
    }, props({
        [__Enumerator_private_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[EnumeratorLike_hasCurrent]
                ? this[__Enumerator_private_current]
                : raiseWithDebugMessage("Enumerator does not have current value");
        },
        set [EnumeratorLike_current](v) {
            unsafeCast(this);
            if (__DEV__ && this[EnumeratorLike_isCompleted]) {
                raiseWithDebugMessage("enumerator has already been completed");
            }
            this[__Enumerator_private_current] = v;
            this[EnumeratorLike_hasCurrent] = true;
        },
        [MutableEnumeratorLike_reset]() {
            this[__Enumerator_private_current] = none;
            this[EnumeratorLike_hasCurrent] = false;
            return this[EnumeratorLike_isCompleted];
        },
    }), returns);
})();
export default MutableEnumerator_mixin;

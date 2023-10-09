/// <reference types="./MutableEnumeratorMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, } from "../../collections.js";
import { none, pipe, raiseWithDebugMessage, returns } from "../../functions.js";
export const MutableEnumeratorLike_reset = Symbol("MutableEnumeratorLike_reset");
const MutableEnumeratorMixin_current = Symbol("MutableEnumeratorMixin_current");
const MutableEnumeratorMixin = 
/*@__PURE__*/ (() => {
    return pipe(mix(function MutableEnumeratorMixin(instance) {
        return instance;
    }, props({
        [MutableEnumeratorMixin_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[EnumeratorLike_hasCurrent]
                ? this[MutableEnumeratorMixin_current]
                : raiseWithDebugMessage("Enumerator does not have current value");
        },
        set [EnumeratorLike_current](v) {
            unsafeCast(this);
            if (__DEV__ && this[EnumeratorLike_isCompleted]) {
                raiseWithDebugMessage("enumerator has already been completed");
            }
            this[MutableEnumeratorMixin_current] = v;
            this[EnumeratorLike_hasCurrent] = true;
        },
        [MutableEnumeratorLike_reset]() {
            this[MutableEnumeratorMixin_current] = none;
            this[EnumeratorLike_hasCurrent] = false;
            return this[EnumeratorLike_isCompleted];
        },
    }), returns);
})();
export default MutableEnumeratorMixin;

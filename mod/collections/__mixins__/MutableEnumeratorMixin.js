/// <reference types="./MutableEnumeratorMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_isCompleted, } from "../../collections.js";
import { none, raiseIf, returns } from "../../functions.js";
export const MutableEnumeratorLike_reset = Symbol("MutableEnumeratorLike_reset");
const MutableEnumeratorMixin_current = Symbol("MutableEnumeratorMixin_current");
const MutableEnumeratorMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(function MutableEnumeratorMixin(instance) {
        return instance;
    }, props({
        [MutableEnumeratorMixin_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [EnumeratorLike_isCompleted]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            raiseIf(!this[EnumeratorLike_hasCurrent], "Enumerator does not have current value");
            return this[MutableEnumeratorMixin_current];
        },
        set [EnumeratorLike_current](v) {
            unsafeCast(this);
            if (__DEV__) {
                raiseIf(this[EnumeratorLike_isCompleted], "enumerator has already been completed");
            }
            this[MutableEnumeratorMixin_current] = v;
            this[EnumeratorLike_hasCurrent] = true;
        },
        [MutableEnumeratorLike_reset]() {
            this[MutableEnumeratorMixin_current] = none;
            this[EnumeratorLike_hasCurrent] = false;
            return this[EnumeratorLike_isCompleted];
        },
    }));
})();
export default MutableEnumeratorMixin;

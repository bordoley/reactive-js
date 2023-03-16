/// <reference types="./MutableEnumerator.mixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { Enumerator_private_current, MutableEnumeratorLike_reset, } from "../../../__internal__/symbols.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, } from "../../../containers.js";
import { none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
export { MutableEnumeratorLike_reset };
const MutableEnumerator_mixin = 
/*@__PURE__*/ (() => {
    return pipe(mix(function EnumeratorMixin(instance) {
        return instance;
    }, props({
        [Enumerator_private_current]: none,
        [EnumeratorLike_hasCurrent]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[EnumeratorLike_hasCurrent]
                ? this[Enumerator_private_current]
                : raiseWithDebugMessage("Enumerator does not have current value");
        },
        set [EnumeratorLike_current](v) {
            unsafeCast(this);
            this[Enumerator_private_current] = v;
            this[EnumeratorLike_hasCurrent] = true;
        },
        [MutableEnumeratorLike_reset]() {
            this[Enumerator_private_current] = none;
            this[EnumeratorLike_hasCurrent] = false;
        },
    }), returns);
})();
export default MutableEnumerator_mixin;

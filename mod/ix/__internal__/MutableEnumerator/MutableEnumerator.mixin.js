/// <reference types="./MutableEnumerator.mixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, } from "../../../ix.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
const MutableEnumerator_mixin = 
/*@__PURE__*/ (() => {
    const Enumerator_private_current = Symbol("Enumerator_private_current");
    const Enumerator_private_hasCurrent = Symbol("Enumerator_private_hasCurrent");
    return pipe(mix(function EnumeratorMixin(instance) {
        instance[Enumerator_private_hasCurrent] = false;
        return instance;
    }, props({
        [Enumerator_private_current]: none,
        [Enumerator_private_hasCurrent]: false,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[EnumeratorLike_hasCurrent]
                ? this[Enumerator_private_current]
                : raiseWithDebugMessage("Enumerator does not have current value");
        },
        set [EnumeratorLike_current](v) {
            unsafeCast(this);
            if (!Disposable_isDisposed(this)) {
                this[Enumerator_private_current] = v;
                this[Enumerator_private_hasCurrent] = true;
            }
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return (!Disposable_isDisposed(this) &&
                this[Enumerator_private_hasCurrent]);
        },
    }), returns);
})();
export default MutableEnumerator_mixin;

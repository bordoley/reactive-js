/// <reference types="./DelegatingEnumerator.mixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns, unsafeCast } from "../../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, } from "../../../rx.js";
const DelegatingEnumerator_mixin = /*@__PURE__*/ (() => returns(mix(include(delegatingMixin()), function DelegatingEnumerator(instance, delegate) {
    init(delegatingMixin(), instance, delegate);
    return instance;
}, props({}), {
    get [EnumeratorLike_current]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][EnumeratorLike_current];
    },
    get [EnumeratorLike_hasCurrent]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][EnumeratorLike_hasCurrent];
    },
})))();
export default DelegatingEnumerator_mixin;

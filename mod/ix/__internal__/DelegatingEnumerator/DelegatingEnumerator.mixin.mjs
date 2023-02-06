/// <reference types="./DelegatingEnumerator.mixin.d.ts" />
import { mix, include, delegatingMixin, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import { returns, unsafeCast } from '../../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../../ix.mjs';

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

export { DelegatingEnumerator_mixin as default };

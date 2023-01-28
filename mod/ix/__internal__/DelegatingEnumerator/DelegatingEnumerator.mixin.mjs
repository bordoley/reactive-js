/// <reference types="./DelegatingEnumerator.mixin.d.ts" />
import { mix, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast, returns } from '../../../functions.mjs';
import { EnumeratorLike_current, EnumeratorLike_hasCurrent } from '../../../ix.mjs';
import { DelegatingEnumeratorLike_delegate } from '../ix.internal.mjs';

const DelegatingEnumerator_mixin = /*@__PURE__*/ (() => {
    return pipe(mix(function DelegatingEnumerator(instance, delegate) {
        instance[DelegatingEnumeratorLike_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingEnumeratorLike_delegate]: none,
    }), {
        get [EnumeratorLike_current]() {
            unsafeCast(this);
            return this[DelegatingEnumeratorLike_delegate][EnumeratorLike_current];
        },
        get [EnumeratorLike_hasCurrent]() {
            unsafeCast(this);
            return this[DelegatingEnumeratorLike_delegate][EnumeratorLike_hasCurrent];
        },
    }), returns);
})();

export { DelegatingEnumerator_mixin as default };

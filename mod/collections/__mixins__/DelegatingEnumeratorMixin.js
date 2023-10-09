/// <reference types="./DelegatingEnumeratorMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
export const DelegatingEnumeratorMixinLike_delegate = Symbol("DelegatingEnumeratorMixin_delegate");
const DelegatingEnumeratorMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DelegatingEnumeratorMixin(instance, delegate) {
        instance[DelegatingEnumeratorMixinLike_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingEnumeratorMixinLike_delegate]: none,
    }), {}));
})();
export default DelegatingEnumeratorMixin;

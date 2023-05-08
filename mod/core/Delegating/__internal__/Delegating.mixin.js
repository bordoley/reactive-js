/// <reference types="./Delegating.mixin.d.ts" />

import { DelegatingLike_delegate, } from "../../../__internal__/core.js";
import { mix, props } from "../../../__internal__/mixins.js";
import { none, pipe, returns } from "../../../functions.js";
const Delegating_mixin = /*@__PURE__*/ (() => {
    return pipe(mix(function DelegatingDisposableMixin(instance, delegate) {
        instance[DelegatingLike_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingLike_delegate]: none,
    }), {}), returns);
})();
export default Delegating_mixin;

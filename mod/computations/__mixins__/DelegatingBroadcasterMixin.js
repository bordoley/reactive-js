/// <reference types="./DelegatingBroadcasterMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { BroadcasterLike_connect, ComputationLike_isDeferred, ComputationLike_isSynchronous, } from "../../computations.js";
import { none, returns } from "../../functions.js";
const DelegatingBroadcasterMixin = /*@__PURE__*/ (() => {
    const DelegatingBroadcasterMixin_delegate = Symbol("DelegatingBroadcasterMixin_delegate");
    return returns(mix(function DelegatingBroadcasterMixin(delegate) {
        this[DelegatingBroadcasterMixin_delegate] = delegate;
        return this;
    }, props({
        [DelegatingBroadcasterMixin_delegate]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [BroadcasterLike_connect](sink) {
            this[DelegatingBroadcasterMixin_delegate][BroadcasterLike_connect](sink);
        },
    }));
})();
export default DelegatingBroadcasterMixin;

/// <reference types="./DelegatingBroadcasterMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../computations.js";
import { none, returns } from "../../functions.js";
const DelegatingBroadcasterMixin = /*@__PURE__*/ (() => {
    const DelegatingBroadcasterMixin_delegate = Symbol("DelegatingBroadcasterMixin_delegate");
    return returns(mix(function DelegatingBroadcasterMixin(delegate) {
        this[DelegatingBroadcasterMixin_delegate] = delegate;
        return this;
    }, props({
        [DelegatingBroadcasterMixin_delegate]: none,
    }), proto({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isPure]: true,
        [ComputationLike_isSynchronous]: false,
        [SourceLike_subscribe](sink) {
            this[DelegatingBroadcasterMixin_delegate][SourceLike_subscribe](sink);
        },
    })));
})();
export default DelegatingBroadcasterMixin;

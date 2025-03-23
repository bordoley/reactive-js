/// <reference types="./DelegatingEventSourceMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, EventSourceLike_addEventListener, } from "../../computations.js";
import { none, returns } from "../../functions.js";
const DelegatingEventSourceMixin = /*@__PURE__*/ (() => {
    const DelegatingEventSourceMixin_delegate = Symbol("DelegatingEventSourceMixin_delegate");
    return returns(mix(function DelegatingEventSourceMixin(delegate) {
        this[DelegatingEventSourceMixin_delegate] = delegate;
        return this;
    }, props({
        [DelegatingEventSourceMixin_delegate]: none,
    }), proto({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [EventSourceLike_addEventListener](listener) {
            this[DelegatingEventSourceMixin_delegate][EventSourceLike_addEventListener](listener);
        },
    })));
})();
export default DelegatingEventSourceMixin;

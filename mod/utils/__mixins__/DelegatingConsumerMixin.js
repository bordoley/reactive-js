/// <reference types="./DelegatingConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { BackPressureConfig_capacity, BackPressureConfig_strategy, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, } from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import DelegatingSinkMixin from "./DelegatingSinkMixin.js";
const DelegatingConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingSinkMixin()), function DelegatingConsumerMixin(delegate) {
        init(DelegatingSinkMixin(), this, delegate);
        return this;
    }, props(), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][FlowControllerLike_isReady];
        },
        get [BackPressureConfig_strategy]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][BackPressureConfig_strategy];
        },
        get [BackPressureConfig_capacity]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][BackPressureConfig_capacity];
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            return this[DelegatingEventListenerLike_delegate][FlowControllerLike_addOnReadyListener](callback);
        },
    })));
})();
export default DelegatingConsumerMixin;

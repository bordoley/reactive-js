/// <reference types="./DelegatingSinkMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DelegatingEventListenerMixin, { DelegatingEventListenerLike_delegate, } from "./DelegatingEventListenerMixin.js";
const DelegatingSinkMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingEventListenerMixin()), function DelegatingSinkMixin(delegate) {
        init(DelegatingEventListenerMixin(), this, delegate);
        return this;
    }, props(), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][SinkLike_isCompleted];
        },
        [SinkLike_complete]() {
            this[DelegatingEventListenerLike_delegate][SinkLike_complete]();
        },
    })));
})();
export default DelegatingSinkMixin;

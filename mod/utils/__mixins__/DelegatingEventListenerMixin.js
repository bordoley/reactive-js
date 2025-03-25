/// <reference types="./DelegatingEventListenerMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
export const DelegatingEventListenerLike_delegate = Symbol("DelegatingEventListenerLike_delegate");
const DelegatingEventListenerMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DelegatingEventListenerMixin(delegate) {
        this[DelegatingEventListenerLike_delegate] = delegate;
        return this;
    }, props({
        [DelegatingEventListenerLike_delegate]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](next);
        },
    })));
})();
export default DelegatingEventListenerMixin;

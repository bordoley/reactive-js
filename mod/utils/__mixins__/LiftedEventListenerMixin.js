/// <reference types="./LiftedEventListenerMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
import DelegatingDisposableMixin from "./DelegatingDisposableMixin.js";
export const LiftedEventListenerLike_notify = Symbol("LiftedEventListenerLike_notify");
export const LiftedEventListenerLike_notifyDelegate = Symbol("LiftedEventListenerLike_notifyDelegate");
export const LiftedEventListenerLike_delegate = Symbol("LiftedEventListenerLike_delegate");
const LiftedEventListenerMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin), function LiftedEventListenerMixin(delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        this[LiftedEventListenerLike_delegate] = delegate;
        return this;
    }, props({
        [LiftedEventListenerLike_delegate]: none,
    }), proto({
        [LiftedEventListenerLike_notifyDelegate](next) {
            const delegate = this[LiftedEventListenerLike_delegate];
            delegate[EventListenerLike_notify](next);
        },
        [EventListenerLike_notify](next) {
            this[LiftedEventListenerLike_notify](next);
        },
        [LiftedEventListenerLike_notify](next) {
            this[LiftedEventListenerLike_notifyDelegate](next);
        },
    })));
})();
export default LiftedEventListenerMixin;

/// <reference types="./DelegatingLiftedSinkMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
export const DelegatingLiftedSinkLike_delegate = Symbol("DelegatingLiftedSinkLike_delegate");
export const DelegatingLiftedSinkLike_onCompleted = Symbol("DelegatingLiftedSinkLike_onCompleted");
const DelegatingLiftedSinkMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin), function DelegatingLiftedSinkMixin(delegate) {
        this[DelegatingLiftedSinkLike_delegate] = delegate;
        this[LiftedSinkLike_subscription] =
            delegate[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, delegate[LiftedSinkLike_subscription]);
        return this;
    }, props({
        [DelegatingLiftedSinkLike_delegate]: none,
        [SinkLike_isCompleted]: false,
        [LiftedSinkLike_subscription]: none,
    }), proto({
        [DelegatingLiftedSinkLike_onCompleted]() {
            this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        },
        [EventListenerLike_notify](next) {
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
        },
        [SinkLike_complete]() {
            this[SinkLike_isCompleted] = true;
            this[DelegatingLiftedSinkLike_onCompleted]();
        },
    })));
})();
export default DelegatingLiftedSinkMixin;

/// <reference types="./DelegatingLiftedSinkMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
export const DelegatingLiftedSinkLike_delegate = Symbol("DelegatingLiftedSinkLike_delegate");
export const DelegatingLiftedSinkLike_onCompleted = Symbol("DelegatingLiftedSinkLike_onCompleted");
const DelegatingLiftedSinkMixin = /*@__PURE__*/ (() => {
    const DelegatingLiftedSinkMixin_isCompleted = Symbol("DelegatingLiftedSinkMixin_isCompleted");
    return returns(mix(include(DelegatingDisposableMixin), function DelegatingLiftedSinkMixin(delegate) {
        this[DelegatingLiftedSinkLike_delegate] = delegate;
        this[LiftedSinkLike_subscription] =
            delegate[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, delegate[LiftedSinkLike_subscription]);
        return this;
    }, props({
        [DelegatingLiftedSinkLike_delegate]: none,
        [DelegatingLiftedSinkMixin_isCompleted]: false,
        [LiftedSinkLike_subscription]: none,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return (this[DelegatingLiftedSinkMixin_isCompleted] ||
                this[DelegatingLiftedSinkLike_delegate][SinkLike_isCompleted]);
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        },
        [EventListenerLike_notify](next) {
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
        },
        [SinkLike_complete]() {
            const isCompleted = this[SinkLike_isCompleted];
            this[DelegatingLiftedSinkMixin_isCompleted] = true;
            if (!isCompleted) {
                this[DelegatingLiftedSinkLike_onCompleted]();
            }
        },
    })));
})();
export default DelegatingLiftedSinkMixin;

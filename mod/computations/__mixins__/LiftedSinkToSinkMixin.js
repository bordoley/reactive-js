/// <reference types="./LiftedSinkToSinkMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import LiftedSinkToEventListenerMixin, { LiftedSinkToEventListenerLike_liftedSink, } from "./LiftedSinkToEventListenerMixin.js";
const LiftedSinkToSinkMixin = /*@__PURE__*/ (() => {
    const LiftedSinkToSinkMixin_isCompleted = Symbol("LiftedSinkToSinkMixin_isCompleted");
    return returns(mix(include(LiftedSinkToEventListenerMixin()), function LiftedSinkToSinkMixin(delegate) {
        init(LiftedSinkToEventListenerMixin(), this, delegate);
        return this;
    }, props({
        [LiftedSinkToSinkMixin_isCompleted]: false,
    }), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return (this[LiftedSinkToSinkMixin_isCompleted] ||
                this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_isCompleted]);
        },
        [EventListenerLike_notify](next) {
            const isCompleted = this[SinkLike_isCompleted];
            if (isCompleted) {
                return;
            }
            this[LiftedSinkToEventListenerLike_liftedSink][EventListenerLike_notify](next);
        },
        [SinkLike_complete]() {
            const isCompleted = this[LiftedSinkToSinkMixin_isCompleted];
            this[LiftedSinkToSinkMixin_isCompleted] = true;
            if (isCompleted) {
                return;
            }
            this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
    })));
})();
export default LiftedSinkToSinkMixin;

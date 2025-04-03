/// <reference types="./LiftedSinkToEventListenerMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
export const LiftedSinkToEventListenerLike_liftedSink = Symbol("LiftedSinkToEventListenerLike_liftedSink");
const LiftedSinkToEventListenerMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LiftedSinkToEventListenerMixin(delegate) {
        this[LiftedSinkToEventListenerLike_liftedSink] = delegate;
        return this;
    }, props({
        [LiftedSinkToEventListenerLike_liftedSink]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[LiftedSinkToEventListenerLike_liftedSink][EventListenerLike_notify](next);
        },
    })));
})();
export default LiftedSinkToEventListenerMixin;

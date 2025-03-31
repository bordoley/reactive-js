/// <reference types="./LiftedSinkToSinkMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import LiftedSinkToEventListenerMixin, { LiftedSinkToEventListenerLike_liftedSink, } from "./LiftedSinkToEventListenerMixin.js";
const LiftedSinkToSinkMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(LiftedSinkToEventListenerMixin()), function LiftedSinkToSinkMixin(operator) {
        init(LiftedSinkToEventListenerMixin(), this, operator);
        return this;
    }, props(), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_isCompleted];
        },
        [SinkLike_complete]() {
            this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
    })));
})();
export default LiftedSinkToSinkMixin;

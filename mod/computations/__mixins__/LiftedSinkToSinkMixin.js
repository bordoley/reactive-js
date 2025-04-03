/// <reference types="./LiftedSinkToSinkMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { SinkMixinLike_doComplete, SinkMixinLike_doNotify, } from "../../utils/__mixins__/SinkMixin.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../utils.js";
import { LiftedSinkToEventListenerLike_liftedSink, } from "./LiftedSinkToEventListenerMixin.js";
const LiftedSinkToSinkMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LiftedSinkToSinkMixin() {
        return this;
    }, props(), proto({
        [SinkMixinLike_doNotify](next) {
            this[LiftedSinkToEventListenerLike_liftedSink][EventListenerLike_notify](next);
        },
        [SinkMixinLike_doComplete]() {
            this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
    })));
})();
export default LiftedSinkToSinkMixin;

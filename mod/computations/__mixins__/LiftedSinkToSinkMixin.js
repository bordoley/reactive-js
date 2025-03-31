/// <reference types="./LiftedSinkToSinkMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingSinkMixin from "../../utils/__mixins__/DelegatingSinkMixin.js";
import LiftedSinkToEventListenerMixin from "./LiftedSinkToEventListenerMixin.js";
const LiftedSinkToSinkMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingSinkMixin(), LiftedSinkToEventListenerMixin()), function LiftedSinkToSinkMixin(liftedSink) {
        init(DelegatingSinkMixin(), this, liftedSink);
        init(LiftedSinkToEventListenerMixin(), this, liftedSink);
        return this;
    }));
})();
export default LiftedSinkToSinkMixin;

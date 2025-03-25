/// <reference types="./LiftedOperatorToSinkMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_isCompleted, } from "../__internal__/LiftedSource.js";
import LiftedOperatorToEventListenerMixin, { LiftedOperatorToEventListenerLike_operator, } from "./LiftedOperatorToEventListenerMixin.js";
const LiftedOperatorToSinkMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(LiftedOperatorToEventListenerMixin()), function LiftedOperatorToSinkMixin(operator, delegate) {
        init(LiftedOperatorToEventListenerMixin(), this, operator, delegate);
        return this;
    }, props(), proto({
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[LiftedOperatorToEventListenerLike_operator][LiftedOperatorLike_isCompleted];
        },
        [SinkLike_complete]() {
            this[LiftedOperatorToEventListenerLike_operator][LiftedOperatorLike_complete]();
        },
    })));
})();
export default LiftedOperatorToSinkMixin;

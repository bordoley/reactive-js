/// <reference types="./LiftedSinkToEventListenerMixin.d.ts" />

import { mix, props, proto } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, } from "../../utils.js";
export const LiftedSinkToEventListenerLike_operator = Symbol("LiftedSinkToEventListenerLike_operator");
const LiftedSinkToEventListenerMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LiftedSinkToEventListenerMixin(operator) {
        this[LiftedSinkToEventListenerLike_operator] = operator;
        return this;
    }, props({
        [LiftedSinkToEventListenerLike_operator]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[LiftedSinkToEventListenerLike_operator][EventListenerLike_notify](next);
        },
    })));
})();
export default LiftedSinkToEventListenerMixin;

/// <reference types="./LiftedOperatorToEventListenerMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { EventListenerLike_notify } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
export const LiftedOperatorToEventListenerLike_operator = Symbol("LiftedOperatorToEventListenerLike_operator");
const LiftedOperatorToEventListenerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin), function LiftedOperatorToEventListenerMixin(operator) {
        const delegate = operator[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, delegate);
        this[LiftedOperatorToEventListenerLike_operator] = operator;
        return this;
    }, props({
        [LiftedOperatorToEventListenerLike_operator]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[LiftedOperatorToEventListenerLike_operator][EventListenerLike_notify](next);
        },
    })));
})();
export default LiftedOperatorToEventListenerMixin;

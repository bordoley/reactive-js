/// <reference types="./Sink.d.ts" />

import { mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_isCompleted, LiftedOperatorLike_notify, LiftedOperatorLike_subscription, } from "../../computations/__internal__/LiftedSource.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
export const toOperator = /*@__PURE__*/ (() => {
    return returns(mixInstanceFactory(function SinkToOperator(listener) {
        this[LiftedOperatorLike_subscription] = listener;
        return this;
    }, props({
        [LiftedOperatorLike_subscription]: none,
    }), proto({
        get [LiftedOperatorLike_isCompleted]() {
            unsafeCast(this);
            return this[LiftedOperatorLike_subscription][SinkLike_isCompleted];
        },
        [LiftedOperatorLike_notify](next) {
            this[LiftedOperatorLike_subscription][EventListenerLike_notify](next);
        },
        [LiftedOperatorLike_complete]() {
            this[LiftedOperatorLike_subscription][SinkLike_complete]();
        },
    })));
})();

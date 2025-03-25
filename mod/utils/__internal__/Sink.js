/// <reference types="./Sink.d.ts" />

import { mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_isCompleted, LiftedOperatorLike_notify, } from "../../computations/__internal__/LiftedSource.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
export const toOperator = /*@__PURE__*/ (() => {
    const SinkToOperator_sink = Symbol("SinkToOperator_sink");
    return returns(mixInstanceFactory(function SinkToOperator(listener) {
        this[SinkToOperator_sink] = listener;
        return this;
    }, props({
        [SinkToOperator_sink]: none,
    }), proto({
        get [LiftedOperatorLike_isCompleted]() {
            unsafeCast(this);
            return this[SinkToOperator_sink][SinkLike_isCompleted];
        },
        [LiftedOperatorLike_notify](next) {
            this[SinkToOperator_sink][EventListenerLike_notify](next);
        },
        [LiftedOperatorLike_complete]() {
            this[SinkToOperator_sink][SinkLike_complete]();
        },
    })));
})();

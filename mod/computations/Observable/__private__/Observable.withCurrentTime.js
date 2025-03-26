/// <reference types="./Observable.withCurrentTime.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { EventListenerLike_notify, SchedulerLike_now, } from "../../../utils.js";
import { LiftedSinkLike_subscription, } from "../../__internal__/LiftedSource.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import Observable_lift from "./Observable.lift.js";
const createWithCurrentTimeOperator = /*@__PURE__*/ (() => {
    const WithCurrentTimeOperator_selector = Symbol("WithCurrentTimeOperator_selector");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function WithCurrentTimeOperator(delegate, selector) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[WithCurrentTimeOperator_selector] = selector;
        return this;
    }, props({
        [WithCurrentTimeOperator_selector]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const currentTime = this[LiftedSinkLike_subscription][SchedulerLike_now];
            const mapped = this[WithCurrentTimeOperator_selector](currentTime, next);
            this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](mapped);
        },
    }));
})();
const Observable_withCurrentTime = ((selector) => pipe((createWithCurrentTimeOperator), partial(selector), Observable_lift()));
export default Observable_withCurrentTime;

/// <reference types="./Observable.withCurrentTime.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify, SchedulerLike_now, } from "../../../utils.js";
import { LiftedSinkLike_subscription, } from "../../__internal__/LiftedSource.js";
import DelegatingLiftedSinkMixin from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import Observable_lift from "./Observable.lift.js";
const createWithCurrentTimeOperator = /*@__PURE__*/ (() => {
    const WithCurrentTimeOperator_selector = Symbol("WithCurrentTimeOperator_selector");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function WithCurrentTimeOperator(delegate, selector) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[WithCurrentTimeOperator_selector] = selector;
        return this;
    }, props({
        [WithCurrentTimeOperator_selector]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const currentTime = this[LiftedSinkLike_subscription][SchedulerLike_now];
            const mapped = this[WithCurrentTimeOperator_selector](currentTime, next);
            this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](mapped);
        },
    }));
})();
const Observable_withCurrentTime = ((selector) => pipe((createWithCurrentTimeOperator), partial(selector), Observable_lift()));
export default Observable_withCurrentTime;

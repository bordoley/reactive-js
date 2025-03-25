/// <reference types="./EventListener.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_isCompleted, LiftedOperatorLike_notify, } from "../../computations/__internal__/LiftedSource.js";
import { none, returns } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EventListenerLike_notify, } from "../../utils.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
export const create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DisposableMixin), function EventListener(notify) {
        init(DisposableMixin, this);
        this[EventListenerLike_notify] = notify;
        return this;
    }, props({
        [EventListenerLike_notify]: none,
    }));
})();
export const toOperator = /*@__PURE__*/ (() => {
    const EventListenerToOperator_listener = Symbol("EventListenerToOperator_listener");
    return returns(mixInstanceFactory(function EventListenerToOperator(listener) {
        this[EventListenerToOperator_listener] = listener;
        return this;
    }, props({
        [EventListenerToOperator_listener]: none,
    }), proto({
        get [LiftedOperatorLike_isCompleted]() {
            unsafeCast(this);
            return this[EventListenerToOperator_listener][DisposableLike_isDisposed];
        },
        [LiftedOperatorLike_notify](next) {
            this[EventListenerToOperator_listener][EventListenerLike_notify](next);
        },
        [LiftedOperatorLike_complete]() {
            this[EventListenerToOperator_listener][DisposableLike_dispose]();
        },
    })));
})();

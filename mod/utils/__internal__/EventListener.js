/// <reference types="./EventListener.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_isCompleted, LiftedOperatorLike_notify, LiftedOperatorLike_subscription, } from "../../computations/__internal__/LiftedSource.js";
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
    return returns(mixInstanceFactory(function EventListenerToOperator(listener) {
        this[LiftedOperatorLike_subscription] = listener;
        return this;
    }, props({
        [LiftedOperatorLike_subscription]: none,
    }), proto({
        get [LiftedOperatorLike_isCompleted]() {
            unsafeCast(this);
            return this[LiftedOperatorLike_subscription][DisposableLike_isDisposed];
        },
        [LiftedOperatorLike_notify](next) {
            this[LiftedOperatorLike_subscription][EventListenerLike_notify](next);
        },
        [LiftedOperatorLike_complete]() {
            this[LiftedOperatorLike_subscription][DisposableLike_dispose]();
        },
    })));
})();

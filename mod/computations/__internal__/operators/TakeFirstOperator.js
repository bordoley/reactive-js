/// <reference types="./TakeFirstOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
export const create = /*@__PURE__*/ (() => {
    const TakeFirstOperator_count = Symbol("TakeFirstOperator_count");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function TakeFirstOperator(delegate, takeCount) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[TakeFirstOperator_count] = clampPositiveInteger(takeCount ?? 1);
        if (takeCount === 0) {
            this[SinkLike_complete]();
        }
        return this;
    }, props({
        [TakeFirstOperator_count]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[TakeFirstOperator_count];
            this[TakeFirstOperator_count]--;
            const delegate = this[DelegatingLiftedSinkLike_delegate];
            delegate[EventListenerLike_notify](next);
            if (this[TakeFirstOperator_count] <= 0) {
                this[SinkLike_complete]();
            }
        },
    }));
})();

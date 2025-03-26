/// <reference types="./SkipFirstOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
export const create = /*@__PURE__*/ (() => {
    const SkipFirstOperator_count = Symbol("SkipFirstOperator_count");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function SkipFirstOperator(delegate, skipCount) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[SkipFirstOperator_count] = clampPositiveInteger(skipCount ?? 1);
        return this;
    }, props({
        [SkipFirstOperator_count]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[SkipFirstOperator_count] = max(this[SkipFirstOperator_count] - 1, -1);
            const shouldEmit = this[SkipFirstOperator_count] < 0;
            if (shouldEmit) {
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
            }
        },
    }));
})();

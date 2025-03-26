/// <reference types="./DistinctUntilChangedOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, strictEquality, } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedOperatorMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
export const create = /*@__PURE__*/ (() => {
    const DistinctUntilChangedMixin_equality = Symbol("DistinctUntilChangedMixin_equality");
    const DistinctUntilChangedMixin_prev = Symbol("DistinctUntilChangedMixin_prev");
    const DistinctUntilChangedMixin_hasValue = Symbol("DistinctUntilChangedMixin_hasValue");
    return mixInstanceFactory(include(DelegatingLiftedOperatorMixin()), function DistinctUntilChangedMixin(delegate, options) {
        init(DelegatingLiftedOperatorMixin(), this, delegate);
        this[DistinctUntilChangedMixin_equality] =
            options?.equality ?? strictEquality;
        return this;
    }, props({
        [DistinctUntilChangedMixin_equality]: none,
        [DistinctUntilChangedMixin_prev]: none,
        [DistinctUntilChangedMixin_hasValue]: false,
    }), proto({
        [EventListenerLike_notify](next) {
            const shouldEmit = !this[DistinctUntilChangedMixin_hasValue] ||
                !this[DistinctUntilChangedMixin_equality](this[DistinctUntilChangedMixin_prev], next);
            if (shouldEmit) {
                this[DistinctUntilChangedMixin_prev] = next;
                this[DistinctUntilChangedMixin_hasValue] = true;
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
            }
        },
    }));
})();

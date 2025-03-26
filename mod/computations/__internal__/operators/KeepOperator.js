/// <reference types="./KeepOperator.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const KeepOperator_predicate = Symbol("KeepOperator_predicate");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function KeepOperator(delegate, predicate) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[KeepOperator_predicate] = predicate;
        return this;
    }, props({
        [KeepOperator_predicate]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const shouldNotify = this[KeepOperator_predicate](next);
            if (shouldNotify) {
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
            }
        },
    }));
})();

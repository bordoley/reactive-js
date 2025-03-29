/// <reference types="./TakeWhileSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const TakeWhileMixin_inclusive = Symbol("TakeWhileMixin_inclusive");
    const TakeWhileMixin_predicate = Symbol("TakeWhileMixin_predicate");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function TakeWhileSink(delegate, predicate, options) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[TakeWhileMixin_predicate] = predicate;
        this[TakeWhileMixin_inclusive] = options?.inclusive ?? false;
        return this;
    }, props({
        [TakeWhileMixin_predicate]: none,
        [TakeWhileMixin_inclusive]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const satisfiesPredicate = this[TakeWhileMixin_predicate](next);
            const isInclusive = this[TakeWhileMixin_inclusive];
            if (satisfiesPredicate || isInclusive) {
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
            }
            if (!satisfiesPredicate) {
                this[SinkLike_complete]();
            }
        },
    }));
})();

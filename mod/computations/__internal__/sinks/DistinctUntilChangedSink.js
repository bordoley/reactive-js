/// <reference types="./DistinctUntilChangedSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, strictEquality, } from "../../../functions.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const DistinctUntilChangedSink_equality = Symbol("DistinctUntilChangedSink_equality");
    const DistinctUntilChangedSink_prev = Symbol("DistinctUntilChangedSink_prev");
    const DistinctUntilChangedSink_hasValue = Symbol("DistinctUntilChangedSink_hasValue");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function DistinctUntilChangedSink(delegate, options) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[DistinctUntilChangedSink_equality] =
            options?.equality ?? strictEquality;
        return this;
    }, props({
        [DistinctUntilChangedSink_equality]: none,
        [DistinctUntilChangedSink_prev]: none,
        [DistinctUntilChangedSink_hasValue]: false,
    }), proto({
        [EventListenerLike_notify](next) {
            const shouldEmit = !this[DistinctUntilChangedSink_hasValue] ||
                !this[DistinctUntilChangedSink_equality](this[DistinctUntilChangedSink_prev], next);
            if (shouldEmit) {
                this[DistinctUntilChangedSink_prev] = next;
                this[DistinctUntilChangedSink_hasValue] = true;
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](next);
            }
        },
    }));
})();

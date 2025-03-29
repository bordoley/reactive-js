/// <reference types="./TakeFirstSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { clampPositiveInteger } from "../../../math.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const TakeFirstSink_count = Symbol("TakeFirstSink_count");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function TakeFirstSink(delegate, takeCount) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[TakeFirstSink_count] = clampPositiveInteger(takeCount ?? 1);
        if (takeCount === 0) {
            this[SinkLike_complete]();
        }
        return this;
    }, props({
        [TakeFirstSink_count]: 0,
    }), proto({
        [EventListenerLike_notify](next) {
            this[TakeFirstSink_count]--;
            const delegate = this[DelegatingLiftedSinkLike_delegate];
            delegate[EventListenerLike_notify](next);
            if (this[TakeFirstSink_count] <= 0) {
                this[SinkLike_complete]();
            }
        },
    }));
})();

/// <reference types="./PairwiseSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none, tuple } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const PairwiseSink_hasPrev = Symbol("PairwiseSink_hasPrev");
    const PairwiseSink_prev = Symbol("PairwiseSink_prev");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function BufferSink(delegate) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        return this;
    }, props({
        [PairwiseSink_prev]: none,
        [PairwiseSink_hasPrev]: false,
    }), proto({
        [EventListenerLike_notify](next) {
            const prev = this[PairwiseSink_prev];
            const hasPrev = this[PairwiseSink_hasPrev];
            this[PairwiseSink_hasPrev] = true;
            this[PairwiseSink_prev] = next;
            if (hasPrev) {
                const pair = tuple(prev, next);
                this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](pair);
            }
        },
    }));
})();

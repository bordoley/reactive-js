/// <reference types="./SkipFirstSink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { none } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const SkipFirstSink_count = Symbol("SkipFirstSink_count");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function SkipFirstSink(delegate, skipCount) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[SkipFirstSink_count] = clampPositiveInteger(skipCount ?? 1);
        return this;
    }, props({
        [SkipFirstSink_count]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            this[SkipFirstSink_count] = max(this[SkipFirstSink_count] - 1, -1);
            const shouldEmit = this[SkipFirstSink_count] < 0;
            if (shouldEmit) {
                this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](next);
            }
        },
    }));
})();

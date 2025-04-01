/// <reference types="./EncodeUtf8Sink.d.ts" />

import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { newInstance, none } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify } from "../../../utils.js";
import DelegatingLiftedSinkMixin from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const EncodeUtf8Sink_textEncoder = Symbol("EncodeUtf8Sink_textEncoder");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function EncodeUtf8Sink(delegate) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        this[EncodeUtf8Sink_textEncoder] = newInstance(TextEncoder);
        return this;
    }, props({
        [EncodeUtf8Sink_textEncoder]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const mapped = this[EncodeUtf8Sink_textEncoder].encode(next);
            this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](mapped);
        },
    }));
})();

/// <reference types="./DecodeWithCharsetSink.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { newInstance, none } from "../../../functions.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../../utils.js";
import DelegatingLiftedSinkMixin, { DelegatingLiftedSinkLike_delegate, DelegatingLiftedSinkLike_onCompleted, } from "../../__mixins__/DelegatingLiftedSinkMixin.js";
export const create = /*@__PURE__*/ (() => {
    const DecodeWithCharsetSink_textDecoder = Symbol("DecodeWithCharsetSink_textDecoder");
    return mixInstanceFactory(include(DelegatingLiftedSinkMixin()), function DecodeWithCharsetSink(delegate, options) {
        init(DelegatingLiftedSinkMixin(), this, delegate);
        const textDecoder = newInstance(TextDecoder, options?.charset ?? "utf-8", options);
        this[DecodeWithCharsetSink_textDecoder] = textDecoder;
        return this;
    }, props({
        [DecodeWithCharsetSink_textDecoder]: none,
    }), proto({
        [EventListenerLike_notify](next) {
            const data = this[DecodeWithCharsetSink_textDecoder].decode(next, {
                stream: true,
            });
            const shouldEmit = data[Array_length] > 0;
            if (shouldEmit) {
                this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](data);
            }
        },
        [DelegatingLiftedSinkLike_onCompleted]() {
            const data = this[DecodeWithCharsetSink_textDecoder].decode(newInstance(Uint8Array, []), {
                stream: false,
            });
            const delegate = this[DelegatingLiftedSinkLike_delegate];
            if (data[Array_length] > 0) {
                delegate[EventListenerLike_notify](data);
            }
            delegate[SinkLike_complete]();
        },
    }));
})();

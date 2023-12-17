/// <reference types="./EventSource.decodeWithCharset.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { EventListenerLike_isErrorSafe, SinkLike_notify, } from "../../../events.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import EventSource_lift from "./EventSource.lift.js";
const EventSource_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const DecodeWithCharsetEventListener_delegate = Symbol("DecodeWithCharsetEventListener_delegate");
    const DecodeWithCharsetEventListener_textDecoder = Symbol("DecodeWithCharsetEventListener_textDecoder");
    const createDecodeWithCharsetEventListener = (() => createInstanceFactory(mix(include(DisposableMixin), function DecodeWithCharsetEventListener(instance, delegate, charset, options) {
        init(DisposableMixin, instance);
        instance[DecodeWithCharsetEventListener_delegate] = delegate;
        const textDecoder = newInstance(TextDecoder, charset, options);
        instance[DecodeWithCharsetEventListener_textDecoder] = textDecoder;
        pipe(instance, Disposable.onComplete(() => {
            const data = textDecoder.decode(new Uint8Array([]), {
                stream: false,
            });
            if (data.length > 0) {
                delegate[SinkLike_notify](data);
            }
            delegate[DisposableLike_dispose]();
        }));
        return instance;
    }, props({
        [DecodeWithCharsetEventListener_delegate]: none,
        [DecodeWithCharsetEventListener_textDecoder]: none,
    }), {
        [EventListenerLike_isErrorSafe]: false,
        [SinkLike_notify](next) {
            const data = this[DecodeWithCharsetEventListener_textDecoder].decode(next, {
                stream: true,
            });
            if (data.length > 0) {
                this[DecodeWithCharsetEventListener_delegate][SinkLike_notify](data);
            }
        },
    })))();
    return options => pipe(createDecodeWithCharsetEventListener, partial(options?.charset ?? "utf-8", options), EventSource_lift);
})();
export default EventSource_decodeWithCharset;

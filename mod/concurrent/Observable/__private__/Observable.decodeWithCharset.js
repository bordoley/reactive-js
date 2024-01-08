/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createDecodeWithCharsetObserver = /*@__PURE__*/ (() => {
    const DecodeWithCharsetObserver_delegate = Symbol("DecodeWithCharsetObserver_delegate");
    const DecodeWithCharsetObserver_textDecoder = Symbol("DecodeWithCharsetObserver_textDecoder");
    return createInstanceFactory(decorateNotifyWithObserverStateAssert(mix(include(DisposableMixin, DelegatingObserverMixin()), function DecodeWithCharsetObserver(instance, delegate, charset, options) {
        init(DisposableMixin, instance);
        instance[DecodeWithCharsetObserver_delegate] = delegate;
        init(DelegatingObserverMixin(), instance, delegate);
        const textDecoder = newInstance(TextDecoder, charset, options);
        instance[DecodeWithCharsetObserver_textDecoder] = textDecoder;
        pipe(instance, Disposable.onComplete(() => {
            const data = textDecoder.decode(new Uint8Array([]), {
                stream: false,
            });
            if (data.length > 0) {
                delegate[QueueableLike_enqueue](data);
                delegate[DispatcherLike_complete]();
            }
            else {
                delegate[DisposableLike_dispose]();
            }
        }));
        return instance;
    }, props({
        [DecodeWithCharsetObserver_delegate]: none,
        [DecodeWithCharsetObserver_textDecoder]: none,
    }), {
        [SinkLike_notify](next) {
            const data = this[DecodeWithCharsetObserver_textDecoder].decode(next, {
                stream: true,
            });
            if (data.length > 0) {
                this[DecodeWithCharsetObserver_delegate][SinkLike_notify](data);
            }
        },
    })));
})();
const Observable_decodeWithCharset = options => pipe(createDecodeWithCharsetObserver, partial(options?.charset ?? "utf-8", options), Observable_liftPureDeferred);
export default Observable_decodeWithCharset;

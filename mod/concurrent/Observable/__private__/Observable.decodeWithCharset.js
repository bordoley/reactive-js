/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import Observer_assertState from "../../Observer/__private__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__private__/Observer.mixin.initFromDelegate.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_liftPure from "./Observable.liftPure.js";
const Observer_createDecodeWithCharsetObserver = /*@__PURE__*/ (() => {
    const DecodeWithCharsetObserver_delegate = Symbol("DecodeWithCharsetObserver_delegate");
    const DecodeWithCharsetObserver_textDecoder = Symbol("DecodeWithCharsetObserver_textDecoder");
    return createInstanceFactory(mix(include(DisposableMixin, ObserverMixin()), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(DisposableMixin, instance);
        instance[DecodeWithCharsetObserver_delegate] = delegate;
        Observer_mixin_initFromDelegate(instance, delegate);
        const textDecoder = newInstance(TextDecoder, charset, {
            fatal: true,
        });
        instance[DecodeWithCharsetObserver_textDecoder] = textDecoder;
        pipe(instance, Disposable.onComplete(() => {
            const data = textDecoder.decode();
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
            Observer_assertState(this);
            const data = this[DecodeWithCharsetObserver_textDecoder].decode(next, {
                stream: true,
            });
            if (data.length > 0) {
                this[DecodeWithCharsetObserver_delegate][SinkLike_notify](data);
            }
        },
    }));
})();
const Observable_decodeWithCharset = options => pipe(Observer_createDecodeWithCharsetObserver, partial(options?.charset ?? "utf-8"), Observable_liftPure);
export default Observable_decodeWithCharset;

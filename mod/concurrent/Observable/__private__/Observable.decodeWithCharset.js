/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { DispatcherLike_complete, ObserverLike_notify, } from "../../../concurrent.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import { DisposableLike_dispose, QueueableLike_enqueue, } from "../../../utils.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import DelegatingObserverMixin from "../../__mixins__/DelegatingObserverMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createDecodeWithCharsetObserver = /*@__PURE__*/ (() => {
    const DecodeWithCharsetObserver_delegate = Symbol("DecodeWithCharsetObserver_delegate");
    const DecodeWithCharsetObserver_textDecoder = Symbol("DecodeWithCharsetObserver_textDecoder");
    function onDecodeWithCharsetObserverComplete() {
        const delegate = this[DecodeWithCharsetObserver_delegate];
        const data = this[DecodeWithCharsetObserver_textDecoder].decode(newInstance(Uint8Array, []), {
            stream: false,
        });
        if (data[Array_length] > 0) {
            delegate[QueueableLike_enqueue](data);
            delegate[DispatcherLike_complete]();
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }
    return mixInstanceFactory(include(DisposableMixin, DelegatingObserverMixin()), function DecodeWithCharsetObserver(instance, delegate, charset, options) {
        init(DisposableMixin, instance);
        instance[DecodeWithCharsetObserver_delegate] = delegate;
        init(DelegatingObserverMixin(), instance, delegate);
        const textDecoder = newInstance(TextDecoder, charset, options);
        instance[DecodeWithCharsetObserver_textDecoder] = textDecoder;
        pipe(instance, DisposableContainer.onComplete(onDecodeWithCharsetObserverComplete));
        return instance;
    }, props({
        [DecodeWithCharsetObserver_delegate]: none,
        [DecodeWithCharsetObserver_textDecoder]: none,
    }), {
        [ObserverLike_notify]: Observer_assertObserverState(function (next) {
            const data = this[DecodeWithCharsetObserver_textDecoder].decode(next, {
                stream: true,
            });
            if (data[Array_length] > 0) {
                this[DecodeWithCharsetObserver_delegate][ObserverLike_notify](data);
            }
        }),
    });
})();
const Observable_decodeWithCharset = options => pipe(createDecodeWithCharsetObserver, partial(options?.charset ?? "utf-8", options), Observable_liftPureDeferred);
export default Observable_decodeWithCharset;

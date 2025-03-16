/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { Array_length } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../../__internal__/mixins.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import { LiftedEventListenerLike_notify, LiftedEventListenerLike_notifyDelegate, } from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { LiftedSinkLike_complete, LiftedSinkLike_completeDelegate, } from "../../../utils/__mixins__/LiftedSinkMixin.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";
const createDecodeWithCharsetObserver = /*@__PURE__*/ (() => {
    const DecodeWithCharsetObserver_textDecoder = Symbol("DecodeWithCharsetObserver_textDecoder");
    return mixInstanceFactory(include(DelegatingDisposableMixin, LiftedObserverMixin()), function DecodeWithCharsetObserver(delegate, charset, options) {
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedObserverMixin(), this, delegate, none);
        const textDecoder = newInstance(TextDecoder, charset, options);
        this[DecodeWithCharsetObserver_textDecoder] = textDecoder;
        return this;
    }, props({
        [DecodeWithCharsetObserver_textDecoder]: none,
    }), proto({
        [LiftedEventListenerLike_notify](next) {
            const data = this[DecodeWithCharsetObserver_textDecoder].decode(next, {
                stream: true,
            });
            const shouldEmit = data[Array_length] > 0;
            if (shouldEmit) {
                this[LiftedEventListenerLike_notifyDelegate](data);
            }
        },
        [LiftedSinkLike_complete]() {
            const data = this[DecodeWithCharsetObserver_textDecoder].decode(newInstance(Uint8Array, []), {
                stream: false,
            });
            if (data[Array_length] > 0) {
                this[LiftedEventListenerLike_notifyDelegate](data);
            }
            this[LiftedSinkLike_completeDelegate]();
        },
    }));
})();
const Observable_decodeWithCharset = options => pipe(createDecodeWithCharsetObserver, partial(options?.charset ?? "utf-8", options), Observable_liftPureDeferred);
export default Observable_decodeWithCharset;

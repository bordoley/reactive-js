/// <reference types="./Observer.createDecodeWithCharsetObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Optional_toRunnable from "../../Optional/__internal__/Optional.toRunnable.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __DecodeWithCharsetObserver_textDecoder } from "../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { invoke, newInstance, none, pipe } from "../../functions.js";
import { DisposableLike_dispose, ObservableLike_observe, ObserverLike_notify, } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createDecodeWithCharsetObserver = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Delegating_mixin(), Observer_mixin()), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(Delegating_mixin(), instance, delegate);
        Observer_mixin_initFromDelegate(instance, delegate);
        const textDecoder = newInstance(TextDecoder, charset, {
            fatal: true,
        });
        instance[__DecodeWithCharsetObserver_textDecoder] = textDecoder;
        pipe(instance, Disposable_onComplete(() => {
            const data = textDecoder.decode();
            if (data.length > 0) {
                pipe(data, Optional_toRunnable(), invoke(ObservableLike_observe, delegate));
            }
            else {
                delegate[DisposableLike_dispose]();
            }
        }));
        return instance;
    }, props({
        [__DecodeWithCharsetObserver_textDecoder]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const data = this[__DecodeWithCharsetObserver_textDecoder].decode(next, {
                stream: true,
            });
            if (data.length > 0) {
                this[DelegatingLike_delegate][ObserverLike_notify](data);
            }
        },
    }));
})();
export default Observer_createDecodeWithCharsetObserver;

/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { DelegatingLike_delegate, } from "../../../__internal__/core.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __DecodeWithCharsetObserver_textDecoder } from "../../../__internal__/symbols.js";
import { DisposableLike_dispose, ObservableLike_observe, ObserverLike_notify, } from "../../../core.js";
import Delegating_mixin from "../../../core/Delegating/__internal__/Delegating.mixin.js";
import Disposable_onComplete from "../../../core/Disposable/__internal__/Disposable.onComplete.js";
import Optional_toObservable from "../../../core/Optional/__internal__/Optional.toObservable.js";
import { invoke, newInstance, none, partial, pipe, } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Observable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const createDecodeWithCharsetObserver = createInstanceFactory(mix(include(Delegating_mixin(), Observer_mixin()), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(Delegating_mixin(), instance, delegate);
        Observer_mixin_initFromDelegate(instance, delegate);
        const textDecoder = newInstance(TextDecoder, charset, {
            fatal: true,
        });
        instance[__DecodeWithCharsetObserver_textDecoder] = textDecoder;
        pipe(instance, Disposable_onComplete(() => {
            const data = textDecoder.decode();
            if (data.length > 0) {
                pipe(data, Optional_toObservable(), invoke(ObservableLike_observe, delegate));
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
    return options => {
        const charset = options?.charset ?? "utf-8";
        return pipe(createDecodeWithCharsetObserver, partial(charset), Enumerable_lift);
    };
})();
export default Observable_decodeWithCharset;

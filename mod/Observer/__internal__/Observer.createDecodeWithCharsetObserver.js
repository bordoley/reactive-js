/// <reference types="./Observer.createDecodeWithCharsetObserver.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import Observable_fromOptional from "../../Observable/__internal__/Observable.fromOptional.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DecodeWithCharsetLike_textDecoder, DelegatingLike_delegate, } from "../../__internal__/types.js";
import { invoke, newInstance, none, pipe } from "../../functions.js";
import { DisposableLike_dispose, ObservableLike_observe, SinkLike_notify, } from "../../types.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin_initFromDelegate from "./Observer.mixin.initFromDelegate.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_createDecodeWithCharsetObserver = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin, Delegating_mixin(), Observer_mixin()), function DecodeWithCharsetObserver(instance, delegate, charset) {
    init(Disposable_mixin, instance);
    init(Delegating_mixin(), instance, delegate);
    Observer_mixin_initFromDelegate(instance, delegate);
    const textDecoder = newInstance(TextDecoder, charset, {
        fatal: true,
    });
    instance[DecodeWithCharsetLike_textDecoder] = textDecoder;
    pipe(instance, Disposable_onComplete(() => {
        const data = textDecoder.decode();
        if (data.length > 0) {
            pipe(data, Observable_fromOptional(), invoke(ObservableLike_observe, delegate));
        }
        else {
            delegate[DisposableLike_dispose]();
        }
    }));
    return instance;
}, props({
    [DecodeWithCharsetLike_textDecoder]: none,
}), {
    [SinkLike_notify](next) {
        Observer_assertState(this);
        const data = this[DecodeWithCharsetLike_textDecoder].decode(next, {
            stream: true,
        });
        if (data.length > 0) {
            this[DelegatingLike_delegate][SinkLike_notify](data);
        }
    },
})))();
export default Observer_createDecodeWithCharsetObserver;

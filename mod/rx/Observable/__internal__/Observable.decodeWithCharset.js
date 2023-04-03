/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DecodeWithCharsetObserver_textDecoder } from "../../../__internal__/symbols.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { invoke, newInstance, none, partial, pipe, } from "../../../functions.js";
import { DispatcherLike_scheduler, ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, QueueableLike_backpressureStrategy, BufferLike_capacity, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const createDecodeWithCharsetObserver = createInstanceFactory(mix(include(Disposable_mixin, delegatingMixin(), Observer_mixin()), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[BufferLike_capacity], delegate[QueueableLike_backpressureStrategy]);
        const textDecoder = newInstance(TextDecoder, charset, {
            fatal: true,
        });
        instance[DecodeWithCharsetObserver_textDecoder] = textDecoder;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
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
        [DecodeWithCharsetObserver_textDecoder]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const data = this[DecodeWithCharsetObserver_textDecoder].decode(next, {
                stream: true,
            });
            if (data.length > 0) {
                this[DelegatingLike_delegate][ObserverLike_notify](data);
            }
        },
    }));
    return options => {
        const charset = options?.charset ?? "utf-8";
        return pipe(createDecodeWithCharsetObserver, partial(charset), Observable_liftEnumerableOperator);
    };
})();
export default Observable_decodeWithCharset;

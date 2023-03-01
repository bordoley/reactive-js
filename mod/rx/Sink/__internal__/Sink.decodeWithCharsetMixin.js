/// <reference types="./Sink.decodeWithCharsetMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { newInstance, none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Observer_decodeWithCharsetMixin = (fromReadonlyArray) => {
    const DecodeWithCharsetSinkMixin_textDecoder = Symbol("DecodeWithCharsetSinkMixin_textDecoder");
    return mix(include(Disposable_mixin, delegatingMixin(), Observer_mixin()), function DecodeWithCharsetSinkMixin(instance, delegate, charset) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
        const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
        instance[DecodeWithCharsetSinkMixin_textDecoder] = textDecoder;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            const data = textDecoder.decode();
            if (data.length > 0) {
                pipe([data], fromReadonlyArray, Observable_observeWith(delegate));
            }
            else {
                pipe(delegate, Disposable_dispose());
            }
        }));
        return instance;
    }, props({
        [DecodeWithCharsetSinkMixin_textDecoder]: none,
    }), {
        [ObserverLike_notify](next) {
            const data = this[DecodeWithCharsetSinkMixin_textDecoder].decode(next, {
                stream: true,
            });
            if (data.length > 0) {
                this[DelegatingLike_delegate][ObserverLike_notify](data);
            }
        },
    });
};
export default Observer_decodeWithCharsetMixin;

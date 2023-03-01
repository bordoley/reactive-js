/// <reference types="./Observable.decodeWithCharset.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_observeWith from "./Observable.observeWith.js";
const Observable_decodeWithCharset = 
/*@__PURE__*/ (() => {
    const DecodeWithCharsetObserverMixin_textDecoder = Symbol("DecodeWithCharsetObserverMixin_textDecoder");
    const createDecodeWithCharsetObserver = createInstanceFactory(mix(include(Disposable_mixin, delegatingMixin(), Observer_mixin()), function DecodeWithCharsetObserverMixin(instance, delegate, charset) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
        const textDecoder = newInstance(TextDecoder, charset, {
            fatal: true,
        });
        instance[DecodeWithCharsetObserverMixin_textDecoder] = textDecoder;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            const data = textDecoder.decode();
            if (data.length > 0) {
                pipe([data], ReadonlyArray_toRunnable(), Observable_observeWith(delegate));
            }
            else {
                pipe(delegate, Disposable_dispose());
            }
        }));
        return instance;
    }, props({
        [DecodeWithCharsetObserverMixin_textDecoder]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const data = this[DecodeWithCharsetObserverMixin_textDecoder].decode(next, {
                stream: true,
            });
            if (data.length > 0) {
                this[DelegatingLike_delegate][ObserverLike_notify](data);
            }
        },
    }));
    return options => {
        var _a;
        const charset = (_a = options === null || options === void 0 ? void 0 : options.charset) !== null && _a !== void 0 ? _a : "utf-8";
        return pipe(createDecodeWithCharsetObserver, partial(charset), Observable_liftEnumerableOperator);
    };
})();
export default Observable_decodeWithCharset;

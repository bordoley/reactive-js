/// <reference types="./Observer.satisfyMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __SatisfyObserver_predicate } from "../../../__internal__/symbols.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { invoke, none, pipe } from "../../../functions.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_satisfyMixin = (defaultResult) => {
    return mix(include(delegatingMixin(), Observer_mixin()), function SatisfyObserver(instance, delegate, predicate) {
        init(Observer_mixin(), instance, delegate, delegate);
        init(delegatingMixin(), instance, delegate);
        instance[__SatisfyObserver_predicate] = predicate;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            if (!delegate[DisposableLike_isDisposed]) {
                pipe(defaultResult, Optional_toObservable(), invoke(ObservableLike_observe, delegate));
            }
        }));
        return instance;
    }, props({
        [__SatisfyObserver_predicate]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            if (this[__SatisfyObserver_predicate](next)) {
                this[DelegatingLike_delegate][ObserverLike_notify](!defaultResult);
                this[DelegatingLike_delegate][DisposableLike_dispose]();
            }
        },
    });
};
export default Observer_satisfyMixin;

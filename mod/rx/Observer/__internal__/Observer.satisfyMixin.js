/// <reference types="./Observer.satisfyMixin.d.ts" />

import { PredicatedLike_predicate, } from "../../../__internal__/containers.js";
import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { invoke, none, pipe } from "../../../functions.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_satisfyMixin = (defaultResult) => mix(include(Delegating_mixin(), Observer_mixin()), function SatisfyObserver(instance, delegate, predicate) {
    init(Observer_mixin(), instance, delegate, delegate);
    init(Delegating_mixin(), instance, delegate);
    instance[PredicatedLike_predicate] = predicate;
    pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
        if (!delegate[DisposableLike_isDisposed]) {
            pipe(defaultResult, Optional_toObservable(), invoke(ObservableLike_observe, delegate));
        }
    }));
    return instance;
}, props({
    [PredicatedLike_predicate]: none,
}), {
    [ObserverLike_notify](next) {
        Observer_assertState(this);
        if (this[PredicatedLike_predicate](next)) {
            this[DelegatingLike_delegate][ObserverLike_notify](!defaultResult);
            this[DelegatingLike_delegate][DisposableLike_dispose]();
        }
    },
});
export default Observer_satisfyMixin;

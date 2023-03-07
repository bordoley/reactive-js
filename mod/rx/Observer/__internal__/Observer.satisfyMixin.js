/// <reference types="./Observer.satisfyMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_assertState from "./Observer.assertState.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_satisfyMixin = (defaultResult) => {
    const SatisfyObserverMixin_predicate = Symbol("SatisfyObserverMixin_predicate");
    return mix(include(Disposable_mixin, delegatingMixin(), Observer_mixin()), function SatisfyObserverMixin(instance, delegate, predicate) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
        instance[SatisfyObserverMixin_predicate] = predicate;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            if (!delegate[DisposableLike_isDisposed]) {
                pipe(defaultResult, Optional_toObservable(), Observable_observeWith(delegate));
            }
        }));
        return instance;
    }, props({
        [SatisfyObserverMixin_predicate]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            if (this[SatisfyObserverMixin_predicate](next)) {
                this[DelegatingLike_delegate][ObserverLike_notify](!defaultResult);
                this[DelegatingLike_delegate][DisposableLike_dispose]();
            }
        },
    });
};
export default Observer_satisfyMixin;

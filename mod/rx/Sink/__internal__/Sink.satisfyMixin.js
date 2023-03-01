/// <reference types="./Sink.satisfyMixin.d.ts" />

import { DelegatingLike_delegate, delegatingMixin, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_notify from "../../Observer/__internal__/Observer.notify.js";
const Observer_satisfyMixin = (fromReadonlyArray, defaultResult) => {
    const SatisfySinkMixin_predicate = Symbol("SatisfySinkMixin_predicate");
    return mix(include(Disposable_mixin, delegatingMixin(), Observer_mixin()), function SatisfySinkMixin(instance, delegate, predicate) {
        init(Disposable_mixin, instance);
        init(delegatingMixin(), instance, delegate);
        init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
        instance[SatisfySinkMixin_predicate] = predicate;
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            if (!Disposable_isDisposed(delegate)) {
                pipe([defaultResult], fromReadonlyArray, Observable_observeWith(delegate));
            }
        }));
        return instance;
    }, props({
        [SatisfySinkMixin_predicate]: none,
    }), {
        [ObserverLike_notify](next) {
            if (this[SatisfySinkMixin_predicate](next)) {
                pipe(this[DelegatingLike_delegate], Observer_notify(!defaultResult), Disposable_dispose());
            }
        },
    });
};
export default Observer_satisfyMixin;

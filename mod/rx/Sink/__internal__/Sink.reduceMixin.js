/// <reference types="./Sink.reduceMixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { error, none, pipe } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Observer_reduceMixin = (fromReadonlyArray) => {
    const ReduceSinkMixin_reducer = Symbol("ReduceSinkMixin_reducer");
    const ReduceSinkMixin_acc = Symbol("ReduceSinkMixin_acc");
    return mix(include(Disposable_mixin, Observer_mixin()), function ReduceSinkMixin(instance, delegate, reducer, initialValue) {
        init(Disposable_mixin, instance);
        init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
        instance[ReduceSinkMixin_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReduceSinkMixin_acc] = acc;
        }
        catch (e) {
            pipe(instance, Disposable_dispose(error(e)));
        }
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe([instance[ReduceSinkMixin_acc]], fromReadonlyArray, Observable_observeWith(delegate));
        }));
        return instance;
    }, props({
        [ReduceSinkMixin_reducer]: none,
        [ReduceSinkMixin_acc]: none,
    }), {
        [ObserverLike_notify](next) {
            const nextAcc = this[ReduceSinkMixin_reducer](this[ReduceSinkMixin_acc], next);
            this[ReduceSinkMixin_acc] = nextAcc;
        },
    });
};
export default Observer_reduceMixin;

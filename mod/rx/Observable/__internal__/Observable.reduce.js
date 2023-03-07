/// <reference types="./Observable.reduce.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { ObserverLike_notify, ObserverLike_scheduler, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_observeWith from "./Observable.observeWith.js";
const Observable_reduce = /*@__PURE__*/ (() => {
    const ReduceObserverMixin_reducer = Symbol("ReduceObserverMixin_reducer");
    const ReduceObserverMixin_acc = Symbol("ReduceObserverMixin_acc");
    const createReduceObserver = createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin()), function ReduceObserverMixin(instance, delegate, reducer, initialValue) {
        init(Disposable_mixin, instance);
        init(Observer_mixin(), instance, delegate[ObserverLike_scheduler]);
        instance[ReduceObserverMixin_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReduceObserverMixin_acc] = acc;
        }
        catch (e) {
            instance[DisposableLike_dispose](error(e));
        }
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe([instance[ReduceObserverMixin_acc]], ReadonlyArray_toObservable(), Observable_observeWith(delegate));
        }));
        return instance;
    }, props({
        [ReduceObserverMixin_reducer]: none,
        [ReduceObserverMixin_acc]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const nextAcc = this[ReduceObserverMixin_reducer](this[ReduceObserverMixin_acc], next);
            this[ReduceObserverMixin_acc] = nextAcc;
        },
    }));
    return ((reducer, initialValue) => pipe(createReduceObserver, partial(reducer, initialValue), Observable_liftEnumerableOperator));
})();
export default Observable_reduce;

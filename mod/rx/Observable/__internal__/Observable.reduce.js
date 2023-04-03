/// <reference types="./Observable.reduce.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ReduceObserver_acc, ReduceObserver_reducer, } from "../../../__internal__/symbols.js";
import { error, invoke, none, partial, pipe, } from "../../../functions.js";
import ReadonlyArray_toObservable from "../../../keyedcontainers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, { initObserverMixinFromDelegate, } from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
const Observable_reduce = /*@__PURE__*/ (() => {
    const createReduceObserver = createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin()), function ReduceObserver(instance, delegate, reducer, initialValue) {
        init(Disposable_mixin, instance);
        initObserverMixinFromDelegate(instance, delegate);
        instance[ReduceObserver_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReduceObserver_acc] = acc;
        }
        catch (e) {
            instance[DisposableLike_dispose](error(e));
        }
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe([instance[ReduceObserver_acc]], ReadonlyArray_toObservable(), invoke(ObservableLike_observe, delegate));
        }));
        return instance;
    }, props({
        [ReduceObserver_reducer]: none,
        [ReduceObserver_acc]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const nextAcc = this[ReduceObserver_reducer](this[ReduceObserver_acc], next);
            this[ReduceObserver_acc] = nextAcc;
        },
    }));
    return ((reducer, initialValue) => pipe(createReduceObserver, partial(reducer, initialValue), Observable_liftEnumerableOperator));
})();
export default Observable_reduce;

/// <reference types="./Observable.reduce.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __ReducerAccumulatorLike_acc, __ReducerAccumulatorLike_reducer, } from "../../../__internal__/symbols.js";
import { error, invoke, none, partial, pipe, } from "../../../functions.js";
import ReadonlyArray_toObservable from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Observable_reduce = /*@__PURE__*/ (() => {
    const createReduceObserver = createInstanceFactory(mix(include(Observer_mixin()), function ReduceObserver(instance, delegate, reducer, initialValue) {
        init(Observer_mixin(), instance, delegate, delegate);
        instance[__ReducerAccumulatorLike_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[__ReducerAccumulatorLike_acc] = acc;
        }
        catch (e) {
            instance[DisposableLike_dispose](error(e));
        }
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe([instance[__ReducerAccumulatorLike_acc]], ReadonlyArray_toObservable(), invoke(ObservableLike_observe, delegate));
        }));
        return instance;
    }, props({
        [__ReducerAccumulatorLike_acc]: none,
        [__ReducerAccumulatorLike_reducer]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const nextAcc = this[__ReducerAccumulatorLike_reducer](this[__ReducerAccumulatorLike_acc], next);
            this[__ReducerAccumulatorLike_acc] = nextAcc;
        },
    }));
    return ((reducer, initialValue) => pipe(createReduceObserver, partial(reducer, initialValue), Enumerable_lift));
})();
export default Observable_reduce;

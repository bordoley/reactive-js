/// <reference types="./Observable.reduce.d.ts" />

import { ReducerAccumulatorLike_acc, ReducerAccumulatorLike_reducer, } from "../../../__internal__/containers.js";
import { createInstanceFactory, include, mix, props, } from "../../../__internal__/mixins.js";
import { error, invoke, none, partial, pipe, } from "../../../functions.js";
import ReadonlyArray_toObservable from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { ObservableLike_observe, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
const Observable_reduce = /*@__PURE__*/ (() => {
    const createReduceObserver = createInstanceFactory(mix(include(Observer_mixin()), function ReduceObserver(instance, delegate, reducer, initialValue) {
        Observer_mixin_initFromDelegate(instance, delegate);
        instance[ReducerAccumulatorLike_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReducerAccumulatorLike_acc] = acc;
        }
        catch (e) {
            instance[DisposableLike_dispose](error(e));
        }
        pipe(instance, Disposable_onComplete(() => {
            pipe([instance[ReducerAccumulatorLike_acc]], ReadonlyArray_toObservable(), invoke(ObservableLike_observe, delegate));
        }));
        return instance;
    }, props({
        [ReducerAccumulatorLike_acc]: none,
        [ReducerAccumulatorLike_reducer]: none,
    }), {
        [ObserverLike_notify](next) {
            Observer_assertState(this);
            const nextAcc = this[ReducerAccumulatorLike_reducer](this[ReducerAccumulatorLike_acc], next);
            this[ReducerAccumulatorLike_acc] = nextAcc;
        },
    }));
    return ((reducer, initialValue) => pipe(createReduceObserver, partial(reducer, initialValue), Enumerable_lift));
})();
export default Observable_reduce;

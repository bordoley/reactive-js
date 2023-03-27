/// <reference types="./Observable.reduce.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ReduceObserver_acc, ReduceObserver_reducer, } from "../../../__internal__/symbols.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { error, none, partial, pipe, } from "../../../functions.js";
import { DispatcherLike_scheduler, ObserverLike_notify, } from "../../../rx.js";
import { DisposableLike_dispose, QueueableLike_capacity, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_liftEnumerableOperator from "./Observable.liftEnumerableOperator.js";
import Observable_observeWith from "./Observable.observeWith.js";
const Observable_reduce = /*@__PURE__*/ (() => {
    const createReduceObserver = createInstanceFactory(mix(include(Disposable_mixin, Observer_mixin()), function ReduceObserver(instance, delegate, reducer, initialValue) {
        init(Disposable_mixin, instance);
        init(Observer_mixin(), instance, delegate[DispatcherLike_scheduler], delegate[QueueableLike_capacity]);
        instance[ReduceObserver_reducer] = reducer;
        try {
            const acc = initialValue();
            instance[ReduceObserver_acc] = acc;
        }
        catch (e) {
            instance[DisposableLike_dispose](error(e));
        }
        pipe(instance, Disposable_addTo(delegate), Disposable_onComplete(() => {
            pipe([instance[ReduceObserver_acc]], ReadonlyArray_toObservable(), Observable_observeWith(delegate));
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

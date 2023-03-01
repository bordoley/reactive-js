/// <reference types="./AsyncEnumerable.scanAsync.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observe, } from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_scanAsync from "../../../rx/Observable/__internal__/Observable.scanAsync.js";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import DelegatingAsyncEnumerator_mixin from "../../AsyncEnumerator/__internal__/DelegatingAsyncEnumerator.mixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_scanAsync = /*@__PURE__*/ (() => {
    const ScanAsyncAsyncEnumerator_obs = Symbol("ScanAsyncAsyncEnumerator_obs");
    const creatScanAsyncAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()), function ScanAsyncAsyncEnumerator(instance, delegate, reducer, initialValue) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance[ScanAsyncAsyncEnumerator_obs] = pipe(delegate, Observable_scanAsync(reducer, initialValue), Observable_multicast(Dispatcher_getScheduler(delegate)));
        return instance;
    }, props({
        [ScanAsyncAsyncEnumerator_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this[ScanAsyncAsyncEnumerator_obs]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[ScanAsyncAsyncEnumerator_obs]);
        },
        [ObservableLike_observe](observer) {
            pipe(this[ScanAsyncAsyncEnumerator_obs], Observable_observeWith(observer));
        },
    }));
    return (reducer, initialValue) => pipe(creatScanAsyncAsyncEnumerator, partial(reducer, initialValue), 
    // FIXME: Implement as higherOrder so that we can
    // add special cases for Runnable/EnumerableObservable
    AsyncEnumerable_lift(false, false));
})();
export default AsyncEnumerable_scanAsync;

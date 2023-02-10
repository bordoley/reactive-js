/// <reference types="./AsyncEnumerable.scanAsync.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast, partial } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable_getObserverCount from '../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.mjs';
import MulticastObservable_getReplay from '../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.mjs';
import Observable_multicast from '../../../rx/Observable/__internal__/Observable.multicast.mjs';
import Observable_scanAsync from '../../../rx/Observable/__internal__/Observable.scanAsync.mjs';
import ReactiveContainer_sinkInto from '../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';
import Dispatcher_getScheduler from '../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator_mixin from '../../__internal__/DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable_lift from './AsyncEnumerable.lift.mjs';

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
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this[ScanAsyncAsyncEnumerator_obs], ReactiveContainer_sinkInto(observer));
        },
    }));
    return (reducer, initialValue) => pipe(creatScanAsyncAsyncEnumerator, partial(reducer, initialValue), AsyncEnumerable_lift);
})();

export { AsyncEnumerable_scanAsync as default };

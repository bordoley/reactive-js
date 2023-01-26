/// <reference types="./AsyncEnumerable.scanAsync.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { pipe, none, unsafeCast, partial } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable$getObserverCount from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable$getReplay from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';
import Observable$multicast from '../../../rx/__internal__/Observable/Observable.multicast.mjs';
import Observable$scanAsync from '../../../rx/__internal__/Observable/Observable.scanAsync.mjs';
import ReactiveContainer$sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Dispatcher$getScheduler from '../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator$mixin from '../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable$lift from './AsyncEnumerable.lift.mjs';

const AsyncEnumerable$scanAsync = /*@__PURE__*/ (() => {
    const creatScanAsyncAsyncEnumerator = createInstanceFactory(mix(include(Disposable$delegatingMixin, DelegatingAsyncEnumerator$mixin()), function ScanAsyncAsyncEnumerator(instance, delegate, reducer, initialValue) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator$mixin(), instance, delegate);
        instance.obs = pipe(delegate, Observable$scanAsync(reducer, initialValue), Observable$multicast(Dispatcher$getScheduler(delegate)));
        return instance;
    }, props({
        obs: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable$getObserverCount(this.obs);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable$getReplay(this.obs);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.obs, ReactiveContainer$sinkInto(observer));
        },
    }));
    return (reducer, initialValue) => pipe(creatScanAsyncAsyncEnumerator, partial(reducer, initialValue), AsyncEnumerable$lift);
})();

export { AsyncEnumerable$scanAsync as default };

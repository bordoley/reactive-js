/// <reference types="./AsyncEnumerable.keep.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_keep from '../../../containers/__internal__/StatefulContainer/StatefulContainer.keep.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable_getObserverCount from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable_getReplay from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';
import Observable_forEach from '../../../rx/__internal__/Observable/Observable.forEach.mjs';
import Observable_keep from '../../../rx/__internal__/Observable/Observable.keep.mjs';
import Observable_multicast from '../../../rx/__internal__/Observable/Observable.multicast.mjs';
import ReactiveContainer_sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Dispatcher_dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Dispatcher_getScheduler from '../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator_mixin from '../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable_liftT from './AsyncEnumerable.liftT.mjs';

const AsyncEnumerable_keep = /*@__PURE__*/ (() => {
    const createKeepAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin, DelegatingAsyncEnumerator_mixin()), function KeepAsyncEnumerator(instance, delegate, predicate) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance.obs = pipe(delegate, Observable_forEach(x => {
            if (!predicate(x)) {
                pipe(delegate, Dispatcher_dispatch(none));
            }
        }), Observable_keep(predicate), Observable_multicast(Dispatcher_getScheduler(delegate)));
        return instance;
    }, props({
        obs: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this.obs);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this.obs);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.obs, ReactiveContainer_sinkInto(observer));
        },
    }));
    return pipe(createKeepAsyncEnumerator, StatefulContainer_keep(AsyncEnumerable_liftT));
})();

export { AsyncEnumerable_keep as default };

/// <reference types="./AsyncEnumerable.keep.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_keep from '../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable_getObserverCount from '../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.mjs';
import MulticastObservable_getReplay from '../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.mjs';
import Observable_forEach from '../../../rx/Observable/__internal__/Observable.forEach.mjs';
import Observable_keep from '../../../rx/Observable/__internal__/Observable.keep.mjs';
import Observable_multicast from '../../../rx/Observable/__internal__/Observable.multicast.mjs';
import ReactiveContainer_sinkInto from '../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';
import Dispatcher_dispatch from '../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.mjs';
import Dispatcher_getScheduler from '../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator_mixin from '../../__internal__/DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable_liftT from './AsyncEnumerable.liftT.mjs';

const AsyncEnumerable_keep = /*@__PURE__*/ (() => {
    const KeepAsyncEnumerator_obs = Symbol("KeepAsyncEnumerator_obs");
    const createKeepAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()), function KeepAsyncEnumerator(instance, delegate, predicate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance[KeepAsyncEnumerator_obs] = pipe(delegate, Observable_forEach(x => {
            if (!predicate(x)) {
                pipe(delegate, Dispatcher_dispatch(none));
            }
        }), Observable_keep(predicate), Observable_multicast(Dispatcher_getScheduler(delegate)));
        return instance;
    }, props({
        [KeepAsyncEnumerator_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this[KeepAsyncEnumerator_obs]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[KeepAsyncEnumerator_obs]);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this[KeepAsyncEnumerator_obs], ReactiveContainer_sinkInto(observer));
        },
    }));
    return pipe(createKeepAsyncEnumerator, StatefulContainer_keep(AsyncEnumerable_liftT));
})();

export { AsyncEnumerable_keep as default };

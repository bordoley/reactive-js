/// <reference types="./AsyncEnumerable.takeWhile.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_takeWhile from '../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable_getObserverCount from '../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.mjs';
import MulticastObservable_getReplay from '../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.mjs';
import Observable_multicast from '../../../rx/Observable/__internal__/Observable.multicast.mjs';
import Observable_takeWhile from '../../../rx/Observable/__internal__/Observable.takeWhile.mjs';
import ReactiveContainer_sinkInto from '../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';
import Dispatcher_getScheduler from '../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.mjs';
import Disposable_add from '../../../util/Disposable/__internal__/Disposable.add.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator_mixin from '../../__internal__/DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable_liftT from './AsyncEnumerable.liftT.mjs';

const AsyncEnumerable_takeWhile = 
/*@__PURE__*/ (() => {
    const TakeWhileAsyncEnumerator_obs = Symbol("TakeWhileAsyncEnumerator_obs");
    const createTakeWhileAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()), function TakeWhileAsyncEnumerator(instance, delegate, predicate, inclusive) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance[TakeWhileAsyncEnumerator_obs] = pipe(delegate, Observable_takeWhile(predicate, { inclusive }), Observable_multicast(Dispatcher_getScheduler(delegate)), Disposable_add(instance));
        return instance;
    }, props({
        [TakeWhileAsyncEnumerator_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this[TakeWhileAsyncEnumerator_obs]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[TakeWhileAsyncEnumerator_obs]);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this[TakeWhileAsyncEnumerator_obs], ReactiveContainer_sinkInto(observer));
        },
    }));
    return pipe(createTakeWhileAsyncEnumerator, StatefulContainer_takeWhile(AsyncEnumerable_liftT));
})();

export { AsyncEnumerable_takeWhile as default };

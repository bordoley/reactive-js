/// <reference types="./AsyncEnumerableLike.takeWhile.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__takeWhile from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservableLike__getObserverCount from '../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount.mjs';
import MulticastObservableLike__getReplay from '../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getReplay.mjs';
import ObservableLike__multicast from '../../../rx/__internal__/ObservableLike/ObservableLike.multicast.mjs';
import ObservableLike__takeWhile from '../../../rx/__internal__/ObservableLike/ObservableLike.takeWhile.mjs';
import ReactiveContainerLike__sinkInto from '../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import DispatcherLike__getScheduler from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.getScheduler.mjs';
import DisposableLike__add from '../../../util/__internal__/DisposableLike/DisposableLike.add.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DelegatingAsyncEnumerator__mixin from '../DelegatingAsyncEnumeratorLike/DelegatingAsyncEnumeratorLike.mixin.mjs';
import AsyncEnumerableLike__liftT from './AsyncEnumerableLike.liftT.mjs';

const AsyncEnumerableLike__takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileAsyncEnumerator = createInstanceFactory(mix(include(DisposableLike__delegatingMixin, DelegatingAsyncEnumerator__mixin()), function TakeWhileAsyncEnumerator(instance, delegate, predicate, inclusive) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator__mixin(), instance, delegate);
        instance.obs = pipe(delegate, ObservableLike__takeWhile(predicate, { inclusive }), ObservableLike__multicast(DispatcherLike__getScheduler(delegate)), DisposableLike__add(instance));
        return instance;
    }, props({
        obs: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservableLike__getObserverCount(this.obs);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservableLike__getReplay(this.obs);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.obs, ReactiveContainerLike__sinkInto(observer));
        },
    }));
    return pipe(createTakeWhileAsyncEnumerator, StatefulContainerLike__takeWhile(AsyncEnumerableLike__liftT));
})();

export { AsyncEnumerableLike__takeWhile as default };

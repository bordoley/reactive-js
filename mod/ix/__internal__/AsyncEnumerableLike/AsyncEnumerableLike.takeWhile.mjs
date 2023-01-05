/// <reference types="./AsyncEnumerableLike.takeWhile.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__takeWhile from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import { getObserverCount, getReplay } from '../../../rx/MulticastObservableLike.mjs';
import { sinkInto } from '../../../rx/ReactiveContainerLike.mjs';
import ObservableLike__multicast from '../../../rx/__internal__/ObservableLike/ObservableLike.multicast.mjs';
import ObservableLike__takeWhile from '../../../rx/__internal__/ObservableLike/ObservableLike.takeWhile.mjs';
import { getScheduler } from '../../../scheduling/DispatcherLike.mjs';
import { add } from '../../../util/DisposableLike.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DelegatingAsyncEnumerator__mixin from '../DelegatingAsyncEnumeratorLike/DelegatingAsyncEnumeratorLike.mixin.mjs';
import AsyncEnumerableLike__liftT from './AsyncEnumerableLike.liftT.mjs';

const AsyncEnumerableLike__takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileAsyncEnumerator = createInstanceFactory(mix(include(DisposableLike__delegatingMixin, DelegatingAsyncEnumerator__mixin()), function TakeWhileAsyncEnumerator(instance, delegate, predicate, inclusive) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator__mixin(), instance, delegate);
        instance.obs = pipe(delegate, ObservableLike__takeWhile(predicate, { inclusive }), ObservableLike__multicast(getScheduler(delegate)), add(instance));
        return instance;
    }, props({
        obs: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.obs);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.obs);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.obs, sinkInto(observer));
        },
    }));
    return pipe(createTakeWhileAsyncEnumerator, StatefulContainerLike__takeWhile(AsyncEnumerableLike__liftT));
})();

export { AsyncEnumerableLike__takeWhile as default };

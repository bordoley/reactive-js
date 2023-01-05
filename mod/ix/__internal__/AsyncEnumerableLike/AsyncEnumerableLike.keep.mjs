/// <reference types="./AsyncEnumerableLike.keep.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__keep from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import { getObserverCount, getReplay } from '../../../rx/MulticastObservableLike.mjs';
import { sinkInto } from '../../../rx/ReactiveContainerLike.mjs';
import ObservableLike__forEach from '../../../rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__keep from '../../../rx/__internal__/ObservableLike/ObservableLike.keep.mjs';
import ObservableLike__multicast from '../../../rx/__internal__/ObservableLike/ObservableLike.multicast.mjs';
import { dispatch, getScheduler } from '../../../scheduling/DispatcherLike.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DelegatingAsyncEnumerator__mixin from '../DelegatingAsyncEnumeratorLike/DelegatingAsyncEnumeratorLike.mixin.mjs';
import AsyncEnumerableLike__liftT from './AsyncEnumerableLike.liftT.mjs';

const AsyncEnumerableLike__keep = 
/*@__PURE__*/ (() => {
    const createKeepAsyncEnumerator = createInstanceFactory(mix(include(DisposableLike__delegatingMixin, DelegatingAsyncEnumerator__mixin()), function KeepAsyncEnumerator(instance, delegate, predicate) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator__mixin(), instance, delegate);
        instance.obs = pipe(delegate, ObservableLike__forEach(x => {
            if (!predicate(x)) {
                pipe(delegate, dispatch(none));
            }
        }), ObservableLike__keep(predicate), ObservableLike__multicast(getScheduler(delegate)));
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
    return pipe(createKeepAsyncEnumerator, StatefulContainerLike__keep(AsyncEnumerableLike__liftT));
})();

export { AsyncEnumerableLike__keep as default };

/// <reference types="./AsyncEnumerable.keep.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$keep from '../../../containers/__internal__/StatefulContainer/StatefulContainer.keep.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable$getObserverCount from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable$getReplay from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';
import Observable$forEach from '../../../rx/__internal__/Observable/Observable.forEach.mjs';
import Observable$keep from '../../../rx/__internal__/Observable/Observable.keep.mjs';
import Observable$multicast from '../../../rx/__internal__/Observable/Observable.multicast.mjs';
import ReactiveContainer$sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Dispatcher$dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Dispatcher$getScheduler from '../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator$mixin from '../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable$liftT from './AsyncEnumerable.liftT.mjs';

const AsyncEnumerable$keep = /*@__PURE__*/ (() => {
    const createKeepAsyncEnumerator = createInstanceFactory(mix(include(Disposable$delegatingMixin, DelegatingAsyncEnumerator$mixin()), function KeepAsyncEnumerator(instance, delegate, predicate) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator$mixin(), instance, delegate);
        instance.obs = pipe(delegate, Observable$forEach(x => {
            if (!predicate(x)) {
                pipe(delegate, Dispatcher$dispatch(none));
            }
        }), Observable$keep(predicate), Observable$multicast(Dispatcher$getScheduler(delegate)));
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
    return pipe(createKeepAsyncEnumerator, StatefulContainer$keep(AsyncEnumerable$liftT));
})();

export { AsyncEnumerable$keep as default };

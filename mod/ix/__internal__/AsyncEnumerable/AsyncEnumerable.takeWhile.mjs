/// <reference types="./AsyncEnumerable.takeWhile.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$takeWhile from '../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile.mjs';
import { pipe, none, unsafeCast } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable$getObserverCount from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable$getReplay from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';
import Observable$multicast from '../../../rx/__internal__/Observable/Observable.multicast.mjs';
import Observable$takeWhile from '../../../rx/__internal__/Observable/Observable.takeWhile.mjs';
import ReactiveContainer$sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Dispatcher$getScheduler from '../../../scheduling/__internal__/Dispatcher/Dispatcher.getScheduler.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator$mixin from '../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable$liftT from './AsyncEnumerable.liftT.mjs';

const AsyncEnumerable$takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileAsyncEnumerator = createInstanceFactory(mix(include(Disposable$delegatingMixin, DelegatingAsyncEnumerator$mixin()), function TakeWhileAsyncEnumerator(instance, delegate, predicate, inclusive) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator$mixin(), instance, delegate);
        instance.obs = pipe(delegate, Observable$takeWhile(predicate, { inclusive }), Observable$multicast(Dispatcher$getScheduler(delegate)), Disposable$add(instance));
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
    return pipe(createTakeWhileAsyncEnumerator, StatefulContainer$takeWhile(AsyncEnumerable$liftT));
})();

export { AsyncEnumerable$takeWhile as default };

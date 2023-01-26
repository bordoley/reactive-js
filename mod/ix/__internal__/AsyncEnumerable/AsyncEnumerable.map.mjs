/// <reference types="./AsyncEnumerable.map.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer$map from '../../../containers/__internal__/StatefulContainer/StatefulContainer.map.mjs';
import { none, unsafeCast, pipe } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable$getObserverCount from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable$getReplay from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';
import Observable$map from '../../../rx/__internal__/Observable/Observable.map.mjs';
import ReactiveContainer$sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Disposable$delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator$mixin from '../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable$liftT from './AsyncEnumerable.liftT.mjs';

const AsyncEnumerable$map = /*@__PURE__*/ (() => {
    const createMapAsyncEnumerator = createInstanceFactory(mix(include(Disposable$delegatingMixin, DelegatingAsyncEnumerator$mixin()), function MapAsyncEnumerator(instance, delegate, mapper) {
        init(Disposable$delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator$mixin(), instance, delegate);
        instance.delegate = delegate;
        instance.op = Observable$map(mapper);
        return instance;
    }, props({
        op: none,
        delegate: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable$getObserverCount(this.delegate);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable$getReplay(this.delegate);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.delegate, this.op, ReactiveContainer$sinkInto(observer));
        },
    }));
    return pipe(createMapAsyncEnumerator, StatefulContainer$map(AsyncEnumerable$liftT));
})();

export { AsyncEnumerable$map as default };

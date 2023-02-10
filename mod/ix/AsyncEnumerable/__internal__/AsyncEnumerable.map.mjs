/// <reference types="./AsyncEnumerable.map.d.ts" />
import { createInstanceFactory, mix, include, init, props, DelegatingLike_delegate } from '../../../__internal__/mixins.mjs';
import StatefulContainer_map from '../../../containers/StatefulContainer/__internal__/StatefulContainer.map.mjs';
import { none, unsafeCast, pipe } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable_getObserverCount from '../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.mjs';
import MulticastObservable_getReplay from '../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.mjs';
import Observable_map from '../../../rx/Observable/__internal__/Observable.map.mjs';
import ReactiveContainer_sinkInto from '../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';
import Disposable_delegatingMixin from '../../../util/Disposable/__internal__/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator_mixin from '../../__internal__/DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable_liftT from './AsyncEnumerable.liftT.mjs';

const AsyncEnumerable_map = /*@__PURE__*/ (() => {
    const MapAsyncEnumerator_op = Symbol("MapAsyncEnumerator_op");
    const createMapAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()), function MapAsyncEnumerator(instance, delegate, mapper) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance[MapAsyncEnumerator_op] = Observable_map(mapper);
        return instance;
    }, props({
        [MapAsyncEnumerator_op]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this[DelegatingLike_delegate]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[DelegatingLike_delegate]);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this[DelegatingLike_delegate], this[MapAsyncEnumerator_op], ReactiveContainer_sinkInto(observer));
        },
    }));
    return pipe(createMapAsyncEnumerator, StatefulContainer_map(AsyncEnumerable_liftT));
})();

export { AsyncEnumerable_map as default };

/// <reference types="./AsyncEnumerable.scan.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainer_scan from '../../../containers/__internal__/StatefulContainer/StatefulContainer.scan.mjs';
import { none, unsafeCast, pipe } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservable_getObserverCount from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getObserverCount.mjs';
import MulticastObservable_getReplay from '../../../rx/__internal__/MulticastObservable/MulticastObservable.getReplay.mjs';
import Observable_scan from '../../../rx/__internal__/Observable/Observable.scan.mjs';
import ReactiveContainer_sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import Disposable_delegatingMixin from '../../../util/__internal__/Disposable/Disposable.delegatingMixin.mjs';
import DelegatingAsyncEnumerator_mixin from '../DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.mjs';
import AsyncEnumerable_liftT from './AsyncEnumerable.liftT.mjs';

const AsyncEnumerable_scan = /*@__PURE__*/ (() => {
    const createScanAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin, DelegatingAsyncEnumerator_mixin()), function ScanAsyncEnumerator(instance, delegate, reducer, acc) {
        init(Disposable_delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance.delegate = delegate;
        instance.op = Observable_scan(reducer, acc);
        return instance;
    }, props({
        op: none,
        delegate: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this.delegate);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this.delegate);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.delegate, this.op, ReactiveContainer_sinkInto(observer));
        },
    }));
    return pipe(createScanAsyncEnumerator, StatefulContainer_scan(AsyncEnumerable_liftT));
})();

export { AsyncEnumerable_scan as default };

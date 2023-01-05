/// <reference types="./AsyncEnumerableLike.scan.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import StatefulContainerLike__scan from '../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan.mjs';
import { none, unsafeCast, pipe } from '../../../functions.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import MulticastObservableLike__getObserverCount from '../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getObserverCount.mjs';
import MulticastObservableLike__getReplay from '../../../rx/__internal__/MulticastObservableLike/MulticastObservableLike.getReplay.mjs';
import ObservableLike__scan from '../../../rx/__internal__/ObservableLike/ObservableLike.scan.mjs';
import ReactiveContainerLike__sinkInto from '../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import DisposableLike__delegatingMixin from '../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DelegatingAsyncEnumerator__mixin from '../DelegatingAsyncEnumeratorLike/DelegatingAsyncEnumeratorLike.mixin.mjs';
import AsyncEnumerableLike__liftT from './AsyncEnumerableLike.liftT.mjs';

const AsyncEnumerableLike__scan = 
/*@__PURE__*/ (() => {
    const createScanAsyncEnumerator = createInstanceFactory(mix(include(DisposableLike__delegatingMixin, DelegatingAsyncEnumerator__mixin()), function ScanAsyncEnumerator(instance, delegate, reducer, acc) {
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(DelegatingAsyncEnumerator__mixin(), instance, delegate);
        instance.delegate = delegate;
        instance.op = ObservableLike__scan(reducer, acc);
        return instance;
    }, props({
        op: none,
        delegate: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservableLike__getObserverCount(this.delegate);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservableLike__getReplay(this.delegate);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.delegate, this.op, ReactiveContainerLike__sinkInto(observer));
        },
    }));
    return pipe(createScanAsyncEnumerator, StatefulContainerLike__scan(AsyncEnumerableLike__liftT));
})();

export { AsyncEnumerableLike__scan as default };

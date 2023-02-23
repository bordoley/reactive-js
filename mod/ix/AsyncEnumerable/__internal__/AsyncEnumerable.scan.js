/// <reference types="./AsyncEnumerable.scan.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_scan from "../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.js";
import { none, pipe, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto, } from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import DelegatingAsyncEnumerator_mixin from "../../AsyncEnumerator/__internal__/DelegatingAsyncEnumerator.mixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_scan = /*@__PURE__*/ (() => {
    const ScanAsyncEnumerator_op = Symbol("ScanAsyncEnumerator_op");
    const createScanAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()), function ScanAsyncEnumerator(instance, delegate, reducer, acc) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance[ScanAsyncEnumerator_op] = Observable_scan(reducer, acc);
        return instance;
    }, props({
        [ScanAsyncEnumerator_op]: none,
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
            pipe(this[DelegatingLike_delegate], this[ScanAsyncEnumerator_op], ReactiveContainer_sinkInto(observer));
        },
    }));
    return pipe(createScanAsyncEnumerator, StatefulContainer_scan(AsyncEnumerable_lift));
})();
export default AsyncEnumerable_scan;

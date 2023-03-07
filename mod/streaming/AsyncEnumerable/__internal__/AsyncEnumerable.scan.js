/// <reference types="./AsyncEnumerable.scan.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observe, } from "../../../rx.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_scan = /*@__PURE__*/ (() => {
    const ScanAsyncEnumerator_op = Symbol("ScanAsyncEnumerator_op");
    const createScanStream = createInstanceFactory(mix(include(Disposable_delegatingMixin(), Stream_delegatingMixin()), function KeepStream(instance, delegate, reducer, acc) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Stream_delegatingMixin(), instance, delegate);
        instance[ScanAsyncEnumerator_op] = Observable_scan(reducer, acc);
        return instance;
    }, props({
        [ScanAsyncEnumerator_op]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_replay];
        },
        [ObservableLike_observe](observer) {
            pipe(this[DelegatingLike_delegate], this[ScanAsyncEnumerator_op], Observable_observeWith(observer));
        },
    }));
    return ((reducer, initialValue) => pipe(createScanStream, partial(reducer, initialValue), AsyncEnumerable_lift(true, true)));
})();
export default AsyncEnumerable_scan;

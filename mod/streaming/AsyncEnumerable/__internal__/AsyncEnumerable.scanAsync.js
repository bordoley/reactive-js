/// <reference types="./AsyncEnumerable.scanAsync.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observe, } from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_scanAsync from "../../../rx/Observable/__internal__/Observable.scanAsync.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_scanAsync = /*@__PURE__*/ (() => {
    const ScanAsyncStream_obs = Symbol("ScanAsyncStream_obs");
    const createScanAsyncStream = createInstanceFactory(mix(include(Disposable_delegatingMixin(), Stream_delegatingMixin()), function ScanAsyncStream(instance, delegate, reducer, initialValue) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Stream_delegatingMixin(), instance, delegate);
        instance[ScanAsyncStream_obs] = pipe(delegate, Observable_scanAsync(reducer, initialValue), Observable_multicast(delegate[DispatcherLike_scheduler]));
        return instance;
    }, props({
        [ScanAsyncStream_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[ScanAsyncStream_obs][MulticastObservableLike_observerCount];
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return this[ScanAsyncStream_obs][MulticastObservableLike_replay];
        },
        [ObservableLike_observe](observer) {
            pipe(this[ScanAsyncStream_obs], Observable_observeWith(observer));
        },
    }));
    return (reducer, initialValue) => pipe(createScanAsyncStream, partial(reducer, initialValue), AsyncEnumerable_lift);
})();
export default AsyncEnumerable_scanAsync;

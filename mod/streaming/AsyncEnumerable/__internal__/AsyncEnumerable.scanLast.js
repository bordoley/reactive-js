/// <reference types="./AsyncEnumerable.scanLast.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observe, } from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_scanLast from "../../../rx/Observable/__internal__/Observable.scanLast.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_scanLast = /*@__PURE__*/ (() => {
    const ScanLastStream_obs = Symbol("ScanLastStream_obs");
    const createScanLastStream = createInstanceFactory(mix(include(Disposable_delegatingMixin(), Stream_delegatingMixin()), function ScanLastStream(instance, delegate, reducer, initialValue) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Stream_delegatingMixin(), instance, delegate);
        instance[ScanLastStream_obs] = pipe(delegate, Observable_scanLast(reducer, initialValue), Observable_multicast(delegate[DispatcherLike_scheduler]));
        return instance;
    }, props({
        [ScanLastStream_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[ScanLastStream_obs][MulticastObservableLike_observerCount];
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return this[ScanLastStream_obs][MulticastObservableLike_replay];
        },
        [ObservableLike_observe](observer) {
            this[ScanLastStream_obs][ObservableLike_observe](observer);
        },
    }));
    return (reducer, initialValue) => pipe(createScanLastStream, partial(reducer, initialValue), AsyncEnumerable_lift(false, false));
})();
export default AsyncEnumerable_scanLast;

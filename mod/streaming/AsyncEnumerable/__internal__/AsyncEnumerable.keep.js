/// <reference types="./AsyncEnumerable.keep.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observe, } from "../../../rx.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import { QueueLike_push } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_keep = /*@__PURE__*/ (() => {
    const KeepStream_obs = Symbol("KeepStream_obs");
    const createKeepStream = createInstanceFactory(mix(include(Disposable_delegatingMixin(), Stream_delegatingMixin()), function KeepStream(instance, delegate, predicate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Stream_delegatingMixin(), instance, delegate);
        instance[KeepStream_obs] = pipe(delegate, Observable_forEach(x => {
            if (!predicate(x)) {
                delegate[QueueLike_push](none);
            }
        }), Observable_keep(predicate), Observable_multicast(delegate[DispatcherLike_scheduler]));
        return instance;
    }, props({
        [KeepStream_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[KeepStream_obs][MulticastObservableLike_observerCount];
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return this[KeepStream_obs][MulticastObservableLike_replay];
        },
        [ObservableLike_observe](observer) {
            pipe(this[KeepStream_obs], Observable_observeWith(observer));
        },
    }));
    return ((predicate) => pipe(createKeepStream, partial(predicate), AsyncEnumerable_lift));
})();
export default AsyncEnumerable_keep;

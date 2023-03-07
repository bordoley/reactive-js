/// <reference types="./AsyncEnumerable.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observe, } from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import { DispatcherLike_scheduler } from "../../../scheduling.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_takeWhile = 
/*@__PURE__*/ (() => {
    const TakeWhileStream_obs = Symbol("TakeWhileStream_obs");
    const createTakeWhileStream = createInstanceFactory(mix(include(Disposable_delegatingMixin(), Stream_delegatingMixin()), function TakeWhileStream(instance, delegate, predicate, inclusive) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(Stream_delegatingMixin(), instance, delegate);
        instance[TakeWhileStream_obs] = pipe(delegate, Observable_takeWhile(predicate, { inclusive }), Observable_multicast(delegate[DispatcherLike_scheduler]), Disposable_add(instance));
        return instance;
    }, props({
        [TakeWhileStream_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[TakeWhileStream_obs][MulticastObservableLike_observerCount];
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return this[TakeWhileStream_obs][MulticastObservableLike_replay];
        },
        [ObservableLike_observe](observer) {
            pipe(this[TakeWhileStream_obs], Observable_observeWith(observer));
        },
    }));
    return (predicate, options = {}) => {
        const { inclusive = false } = options;
        return pipe(createTakeWhileStream, partial(predicate, inclusive), AsyncEnumerable_lift(true, true));
    };
})();
export default AsyncEnumerable_takeWhile;

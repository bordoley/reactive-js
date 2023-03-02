/// <reference types="./AsyncEnumerable.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observe, } from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.js";
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
        instance[TakeWhileStream_obs] = pipe(delegate, Observable_takeWhile(predicate, { inclusive }), Observable_multicast(Dispatcher_getScheduler(delegate)), Disposable_add(instance));
        return instance;
    }, props({
        [TakeWhileStream_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this[TakeWhileStream_obs]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[TakeWhileStream_obs]);
        },
        [ObservableLike_observe](observer) {
            pipe(this[TakeWhileStream_obs], Observable_observeWith(observer));
        },
    }));
    return (predicate, options = {}) => {
        const { inclusive = false } = options;
        return pipe(createTakeWhileStream, partial(predicate, inclusive), AsyncEnumerable_lift);
    };
})();
export default AsyncEnumerable_takeWhile;

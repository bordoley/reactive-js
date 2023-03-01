/// <reference types="./AsyncEnumerable.takeWhile.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.js";
import { none, pipe, unsafeCast } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observe, } from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import DelegatingAsyncEnumerator_mixin from "../../AsyncEnumerator/__internal__/DelegatingAsyncEnumerator.mixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_takeWhile = 
/*@__PURE__*/ (() => {
    const TakeWhileAsyncEnumerator_obs = Symbol("TakeWhileAsyncEnumerator_obs");
    const createTakeWhileAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()), function TakeWhileAsyncEnumerator(instance, delegate, predicate, inclusive) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance[TakeWhileAsyncEnumerator_obs] = pipe(delegate, Observable_takeWhile(predicate, { inclusive }), Observable_multicast(Dispatcher_getScheduler(delegate)), Disposable_add(instance));
        return instance;
    }, props({
        [TakeWhileAsyncEnumerator_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this[TakeWhileAsyncEnumerator_obs]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[TakeWhileAsyncEnumerator_obs]);
        },
        [ObservableLike_observe](observer) {
            pipe(this[TakeWhileAsyncEnumerator_obs], Observable_observeWith(observer));
        },
    }));
    return pipe(createTakeWhileAsyncEnumerator, StatefulContainer_takeWhile(AsyncEnumerable_lift(true, true)));
})();
export default AsyncEnumerable_takeWhile;

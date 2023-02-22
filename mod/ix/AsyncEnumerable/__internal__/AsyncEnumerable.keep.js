/// <reference types="./AsyncEnumerable.keep.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_keep from "../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.js";
import { none, pipe, unsafeCast } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto, } from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_keep from "../../../rx/Observable/__internal__/Observable.keep.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import Dispatcher_dispatch from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.js";
import Dispatcher_getScheduler from "../../../scheduling/Dispatcher/__internal__/Dispatcher.getScheduler.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import DelegatingAsyncEnumerator_mixin from "../../__internal__/DelegatingAsyncEnumerator/DelegatingAsyncEnumerator.mixin.js";
import AsyncEnumerable_liftT from "./AsyncEnumerable.liftT.js";
const AsyncEnumerable_keep = /*@__PURE__*/ (() => {
    const KeepAsyncEnumerator_obs = Symbol("KeepAsyncEnumerator_obs");
    const createKeepAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()), function KeepAsyncEnumerator(instance, delegate, predicate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance[KeepAsyncEnumerator_obs] = pipe(delegate, Observable_forEach(x => {
            if (!predicate(x)) {
                pipe(delegate, Dispatcher_dispatch(none));
            }
        }), Observable_keep(predicate), Observable_multicast(Dispatcher_getScheduler(delegate)));
        return instance;
    }, props({
        [KeepAsyncEnumerator_obs]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this[KeepAsyncEnumerator_obs]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[KeepAsyncEnumerator_obs]);
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this[KeepAsyncEnumerator_obs], ReactiveContainer_sinkInto(observer));
        },
    }));
    return pipe(createKeepAsyncEnumerator, StatefulContainer_keep(AsyncEnumerable_liftT));
})();
export default AsyncEnumerable_keep;

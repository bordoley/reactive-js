/// <reference types="./AsyncEnumerable.map.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import StatefulContainer_map from "../../../containers/StatefulContainer/__internal__/StatefulContainer.map.js";
import { none, pipe, unsafeCast } from "../../../functions.js";
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_observe, } from "../../../rx.js";
import MulticastObservable_getObserverCount from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getObserverCount.js";
import MulticastObservable_getReplay from "../../../rx/MulticastObservable/__internal__/MulticastObservable.getReplay.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import DelegatingAsyncEnumerator_mixin from "../../AsyncEnumerator/__internal__/DelegatingAsyncEnumerator.mixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_map = /*@__PURE__*/ (() => {
    const MapAsyncEnumerator_op = Symbol("MapAsyncEnumerator_op");
    const createMapAsyncEnumerator = createInstanceFactory(mix(include(Disposable_delegatingMixin(), DelegatingAsyncEnumerator_mixin()), function MapAsyncEnumerator(instance, delegate, mapper) {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(DelegatingAsyncEnumerator_mixin(), instance, delegate);
        instance[MapAsyncEnumerator_op] = Observable_map(mapper);
        return instance;
    }, props({
        [MapAsyncEnumerator_op]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return MulticastObservable_getObserverCount(this[DelegatingLike_delegate]);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return MulticastObservable_getReplay(this[DelegatingLike_delegate]);
        },
        [ObservableLike_observe](observer) {
            pipe(this[DelegatingLike_delegate], this[MapAsyncEnumerator_op], Observable_observeWith(observer));
        },
    }));
    return pipe(createMapAsyncEnumerator, StatefulContainer_map(AsyncEnumerable_lift(true, true)));
})();
export default AsyncEnumerable_map;

/// <reference types="./AsyncEnumerable.map.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { ObservableLike_observe, } from "../../../rx.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Stream_delegatingMixin from "../../Stream/__internal__/Stream.delegatingMixin.js";
import AsyncEnumerable_lift from "./AsyncEnumerable.lift.js";
const AsyncEnumerable_map = /*@__PURE__*/ (() => {
    const MapAsyncEnumerator_op = Symbol("MapAsyncEnumerator_op");
    const createMapStream = createInstanceFactory(mix(include(Stream_delegatingMixin()), function MapStream(instance, delegate, mapper) {
        init(Stream_delegatingMixin(), instance, delegate);
        instance[MapAsyncEnumerator_op] = Observable_map(mapper);
        return instance;
    }, props({
        [MapAsyncEnumerator_op]: none,
    }), {
        [ObservableLike_observe](observer) {
            pipe(this[DelegatingLike_delegate], this[MapAsyncEnumerator_op], Observable_observeWith(observer));
        },
    }));
    return ((mapper) => pipe(createMapStream, partial(mapper), AsyncEnumerable_lift(true, true)));
})();
export default AsyncEnumerable_map;

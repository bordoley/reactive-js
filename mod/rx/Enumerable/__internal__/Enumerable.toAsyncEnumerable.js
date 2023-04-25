/// <reference types="./Enumerable.toAsyncEnumerable.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import { bindMethod, invoke, pipe, returns, unsafeCast, } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import Stream_create from "../../../streaming/Stream/__internal__/Stream.create.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const Enumerable_toAsyncEnumerable = (() => returns(createInstanceFactory(mix(include(Delegating_mixin()), function EnumerableToAsyncEnumerable(instance, delegate) {
    init(Delegating_mixin(), instance, delegate);
    return instance;
}, props({}), {
    get [ObservableLike_isEnumerable]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
    },
    get [ObservableLike_isRunnable]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][ObservableLike_isRunnable];
    },
    [ObservableLike_observe](observer) {
        this[DelegatingLike_delegate][ObservableLike_observe](observer);
    },
    [StreamableLike_stream](scheduler, options) {
        const op = (observable) => Observable_create(observer => {
            const enumerator = pipe(this[DelegatingLike_delegate], Enumerable_enumerate(), Disposable_addTo(observer));
            pipe(observable, Observable_forEach(bindMethod(enumerator, EnumeratorLike_move)), Observable_takeWhile(_ => enumerator[EnumeratorLike_hasCurrent]), Observable_map(_ => enumerator[EnumeratorLike_current]), invoke(ObservableLike_observe, observer));
        });
        return Stream_create(op, scheduler, options);
    },
}))))();
export default Enumerable_toAsyncEnumerable;

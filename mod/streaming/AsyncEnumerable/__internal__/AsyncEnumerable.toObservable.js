/// <reference types="./AsyncEnumerable.toObservable.d.ts" />

import { none, pipe } from "../../../functions.js";
import { ObserverLike_scheduler, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
import { QueueLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const AsyncEnumerable_toObservable = () => (enumerable) => Observable_create((observer) => {
    const enumerator = pipe(enumerable, Streamable_stream(observer[ObserverLike_scheduler]), Disposable_addTo(observer));
    pipe(enumerator, Observable_forEach(_ => {
        enumerator[QueueLike_push](none);
    }), Observable_onSubscribe(() => {
        enumerator[QueueLike_push](none);
    }), Observable_observeWith(observer));
});
export default AsyncEnumerable_toObservable;

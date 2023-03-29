/// <reference types="./AsyncEnumerable.toObservable.d.ts" />

import { none, pipe } from "../../../functions.js";
import { DispatcherLike_scheduler, } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { StreamableLike_isEnumerable, StreamableLike_isRunnable, StreamableLike_stream, } from "../../../streaming.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const AsyncEnumerable_toObservable = () => (enumerable) => {
    const create = enumerable[StreamableLike_isEnumerable]
        ? Enumerable_create
        : enumerable[StreamableLike_isRunnable]
            ? Runnable_create
            : Observable_create;
    return create((observer) => {
        const scheduler = observer[DispatcherLike_scheduler];
        const capacity = observer[QueueableLike_capacity];
        const backpressureStrategy = observer[QueueableLike_backpressureStrategy];
        const enumerator = pipe(enumerable[StreamableLike_stream](scheduler, {
            backpressureStrategy,
            capacity,
        }), Disposable_addTo(observer));
        pipe(enumerator, Observable_forEach(_ => {
            enumerator[QueueableLike_enqueue](none);
        }), Observable_observeWith(observer));
        enumerator[QueueableLike_enqueue](none);
    });
};
export default AsyncEnumerable_toObservable;

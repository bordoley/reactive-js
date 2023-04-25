/// <reference types="./AsyncEnumerable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { bindMethod, invoke, none, pipe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import { StreamableLike_stream, } from "../../../streaming.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
const AsyncEnumerable_create = (() => {
    return createInstanceFactory(mix(function CreateAsyncEnumerable(instance, op) {
        const observable = Observable_create((observer) => {
            const capacity = observer[BufferLike_capacity];
            const backpressureStrategy = observer[QueueableLike_backpressureStrategy];
            const enumerator = pipe(instance, invoke(StreamableLike_stream, observer, {
                backpressureStrategy,
                capacity,
            }), Disposable_addTo(observer));
            pipe(enumerator, Observable_forEach(_ => {
                enumerator[QueueableLike_enqueue](none);
            }), invoke(ObservableLike_observe, observer));
            enumerator[QueueableLike_enqueue](none);
        });
        instance[StreamableLike_stream] = (scheduler, options) => Stream_create(op, scheduler, options);
        instance[ObservableLike_observe] = bindMethod(observable, ObservableLike_observe);
        return instance;
    }, props({
        [ObservableLike_observe]: none,
        [StreamableLike_stream]: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
    }));
})();
export default AsyncEnumerable_create;

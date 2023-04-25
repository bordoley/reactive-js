/// <reference types="./Flowable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { bindMethod, compose, none, pipe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import { StreamableLike_stream } from "../../../streaming.js";
import { BufferLike_capacity, DispatcherLike_complete, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_sinkInto from "../../Streamable/__internal__/Streamable.sinkInto.js";
import FlowableStream_create from "./FlowableStream.create.js";
const Flowable_create = (() => {
    return createInstanceFactory(mix(function CreateFlowable(instance, op) {
        const observable = Observable_create(observer => {
            const capacity = observer[BufferLike_capacity];
            const backpressureStrategy = observer[QueueableLike_backpressureStrategy];
            const op = compose(Observable_enqueue(observer), Observable_ignoreElements(), 
            // Intentionally use mergeWith here. The stream observer
            // needs to be immediately subscribed to when created
            // otherwise it will have no observer to queue events onto.
            // Observable.startWith uses concatenation.
            Observable_mergeWith(pipe(false, Optional_toObservable())));
            const stream = pipe(Stream_create(op, observer, {
                backpressureStrategy,
                capacity,
            }), Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)), Disposable_addTo(observer));
            pipe(instance, Streamable_sinkInto(stream), Disposable_addTo(observer));
        });
        instance[StreamableLike_stream] = (scheduler, options) => FlowableStream_create(op, scheduler, options);
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
export default Flowable_create;

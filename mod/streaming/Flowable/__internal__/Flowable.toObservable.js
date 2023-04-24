/// <reference types="./Flowable.toObservable.d.ts" />

import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { bindMethod, compose, pipe } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_enqueue from "../../../rx/Observable/__internal__/Observable.enqueue.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { StreamableLike_isRunnable } from "../../../streaming.js";
import { BufferLike_capacity, DispatcherLike_complete, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Streamable_sinkInto from "../../Streamable/__internal__/Streamable.sinkInto.js";
const Flowable_toObservable = () => (src) => {
    const create = src[StreamableLike_isRunnable]
        ? Runnable_create
        : Observable_create;
    return create(observer => {
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
        pipe(src, Streamable_sinkInto(stream), Disposable_addTo(observer));
    });
};
export default Flowable_toObservable;

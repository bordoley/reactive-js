/// <reference types="./Flowable.toObservable.d.ts" />

import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose, pipe } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create.js";
import { SchedulerLike_requestYield } from "../../../scheduling.js";
import { FlowableState_paused, FlowableState_running, StreamableLike_isRunnable, } from "../../../streaming.js";
import { QueueableLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Stream_create from "../../Stream/__internal__/Stream.create.js";
import Stream_sourceFrom from "../../Stream/__internal__/Stream.sourceFrom.js";
const Flowable_toObservable = () => (src) => {
    const create = src[StreamableLike_isRunnable]
        ? Runnable_create
        : Observable_create;
    return create(observer => {
        const scheduler = observer[DispatcherLike_scheduler];
        const op = compose(Observable_forEach(v => {
            if (!observer[QueueableLike_push](v)) {
                scheduler[SchedulerLike_requestYield]();
            }
        }), Observable_ignoreElements(), 
        // Intentionally use mergeWith here. The stream observer
        // needs to be immediately subscribed to when created
        // otherwise it will have no observer to queue events onto.
        // Observable.startWith uses concatenation.
        Observable_mergeWith(pipe([FlowableState_paused, FlowableState_running], ReadonlyArray_toObservable())));
        pipe(Stream_create(op, scheduler), Stream_sourceFrom(src), Disposable_addTo(observer), Disposable_onComplete(() => observer[DispatcherLike_complete]()));
    });
};
export default Flowable_toObservable;

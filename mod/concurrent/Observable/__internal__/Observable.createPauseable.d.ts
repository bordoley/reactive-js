import { DeferredObservableLike, MulticastObservableLike, PauseableObservableLike, RunnableLike, RunnableWithSideEffectsLike, SchedulerLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../utils.js";
declare const Observable_createPauseable: <T>(op: Function1<MulticastObservableLike<boolean>, DeferredObservableLike<T> | RunnableLike<T> | RunnableWithSideEffectsLike<T>>, scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
}) => PauseableObservableLike<T> & DisposableLike;
export default Observable_createPauseable;

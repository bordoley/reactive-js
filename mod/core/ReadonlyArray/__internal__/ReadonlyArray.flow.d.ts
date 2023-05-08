import { DisposableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const ReadonlyArray_toFlowable: <T>(scheduler: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
}) => Function1<readonly T[], PauseableObservableLike<T> & DisposableLike>;
export default ReadonlyArray_toFlowable;

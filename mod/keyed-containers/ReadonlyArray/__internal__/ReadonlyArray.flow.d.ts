import { ReadonlyArrayLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { PauseableObservableLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const ReadonlyArray_toFlowable: <T>(scheduler: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly delay?: number;
    readonly delayStart?: boolean;
    readonly start?: number;
    readonly count?: number;
}) => Function1<ReadonlyArrayLike<T>, PauseableObservableLike<T> & DisposableLike>;
export default ReadonlyArray_toFlowable;

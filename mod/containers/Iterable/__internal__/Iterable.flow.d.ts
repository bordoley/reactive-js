import { IterableLike } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { PauseableObservableLike } from "../../../rx.js";
import { DisposableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../../util.js";
declare const Iterable_flow: <T>(scheduler: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => Function1<IterableLike<T>, PauseableObservableLike<T> & DisposableLike>;
export default Iterable_flow;

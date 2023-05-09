import { Function1 } from "../../functions.js";
import { DisposableLike, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../../types.js";
declare const Iterable_flow: <T>(scheduler: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => Function1<Iterable<T>, PauseableObservableLike<T> & DisposableLike>;
export default Iterable_flow;

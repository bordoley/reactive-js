import { PureDeferredObservableLike } from "../../computations.js";
import { BackpressureStrategy, DisposableLike, QueueableLike } from "../../utils.js";
export interface QueueableObservableLike<out T> extends PureDeferredObservableLike<T>, QueueableLike, DisposableLike {
}
export declare const create: <T>(config?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => QueueableObservableLike<T>;

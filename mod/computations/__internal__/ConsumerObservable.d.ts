import { PureDeferredObservableLike } from "../../computations.js";
import { BackpressureStrategy, ConsumerLike, DisposableLike } from "../../utils.js";
export interface ConsumerObservableLike<out T> extends PureDeferredObservableLike<T>, ConsumerLike, DisposableLike {
}
export declare const create: <T>(config?: {
    autoDispose?: boolean;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => ConsumerObservableLike<T>;

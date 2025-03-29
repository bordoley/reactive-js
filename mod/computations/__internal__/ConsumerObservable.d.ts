import { PureObservableLike } from "../../computations.js";
import { BackpressureStrategy, ConsumerLike, DisposableLike } from "../../utils.js";
export interface ConsumerObservableLike<out T> extends PureObservableLike<T>, ConsumerLike, DisposableLike {
}
export declare const create: <T>(config?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => ConsumerObservableLike<T>;

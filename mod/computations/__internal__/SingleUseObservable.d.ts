import { PureDeferredObservableLike } from "../../computations.js";
import { BackpressureStrategy, DispatcherLike, DisposableLike } from "../../utils.js";
export interface SingleUseObservableLike<out T> extends PureDeferredObservableLike<T>, DispatcherLike, DisposableLike {
}
export declare const create: <T>(config?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => SingleUseObservableLike<T>;

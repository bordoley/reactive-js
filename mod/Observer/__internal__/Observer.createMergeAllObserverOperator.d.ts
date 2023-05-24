import { Function1 } from "../../functions.js";
import { DeferredObservableBaseLike, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../types.js";
declare const Observer_createMergeAllObserverOperator: <T>(options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
}) => Function1<ObserverLike<T>, ObserverLike<DeferredObservableBaseLike<T>>>;
export default Observer_createMergeAllObserverOperator;

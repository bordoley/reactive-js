import { DeferredSideEffectsObservableLike, ObserverLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../utils.js";
declare const Observer_createMergeAllObserverOperator: <T>(options?: {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
}) => Function1<ObserverLike<T>, ObserverLike<DeferredSideEffectsObservableLike<T>>>;
export default Observer_createMergeAllObserverOperator;

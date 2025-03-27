import { IterableLike } from "../../computations.js";
import { Function1 } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, ObserverLike, SchedulerLike } from "../../utils.js";
export declare const create: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & IterableLike<T>;
export declare const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(o: ConsumerLike<T>) => ConsumerLike<T>;
export declare const takeLast: <T>(capacity: number) => ConsumerLike<T> & IterableLike<T>;
export declare const toObserver: <T>(scheduler: SchedulerLike) => Function1<ConsumerLike<T>, ObserverLike<T>>;

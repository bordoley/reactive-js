import { Function1 } from "../../functions.js";
import { BackpressureStrategy, CollectionEnumeratorLike, ConsumerLike, ObserverLike, SchedulerLike } from "../../utils.js";
export declare const create: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T>;
export declare const createDelegatingCatchError: <T>(o: ConsumerLike<T>) => ConsumerLike<T>;
export declare const createDelegatingNonCompleting: <T>(o: ConsumerLike<T>) => ConsumerLike<T>;
export declare const takeLast: <T>(capacity: number) => ConsumerLike<T> & CollectionEnumeratorLike<T>;
export declare const toObserver: <T>(scheduler: SchedulerLike) => Function1<ConsumerLike<T>, ObserverLike<T>>;

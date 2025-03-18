import { Function1 } from "../functions.js";
import { BackpressureStrategy, CollectionEnumeratorLike, ConsumerLike, ObserverLike, SchedulerLike } from "../utils.js";
export declare const create: <T>(options?: {
    autoDispose?: boolean;
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T>;
export declare const createDropOldestWithoutBackpressure: <T>(capacity: number, options?: {
    autoDispose?: boolean;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T>;
export declare const toObserver: <T>(scheduler: SchedulerLike) => Function1<ConsumerLike<T>, ObserverLike<T>>;

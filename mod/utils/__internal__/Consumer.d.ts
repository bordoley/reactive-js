import { Function1 } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, FlowControllerEnumeratorLike, ObserverLike, SchedulerLike } from "../../utils.js";
export declare const create: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & FlowControllerEnumeratorLike<T>;
export declare const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(o: ConsumerLike<T>) => ConsumerLike<T>;
export declare const createDropOldestWithoutBackpressure: <T>(capacity: number) => ConsumerLike<T> & FlowControllerEnumeratorLike<T>;
export declare const toObserver: <T>(scheduler: SchedulerLike) => Function1<ConsumerLike<T>, ObserverLike<T>>;

import { Reducer } from "../../functions.js";
import { BackpressureStrategy, CollectionEnumeratorLike, ConsumableEnumeratorLike, ObserverLike, SchedulerLike } from "../../utils.js";
export declare const collect: <T>(buffer: T[], scheduler: SchedulerLike) => ObserverLike<T>;
export declare const create: <T>(notify: (this: ObserverLike<T>, next: T) => void, scheduler: SchedulerLike) => ObserverLike<T>;
export declare const createDelegatingCatchError: <T>(o: ObserverLike<T>) => ObserverLike<T>;
export declare const createDelegatingNonCompleting: <T>(o: ObserverLike<T>) => ObserverLike<T>;
export declare const createWithFlowControl: <T>(scheduler: SchedulerLike, options?: {
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
}) => ObserverLike<T> & ConsumableEnumeratorLike<T>;
export declare const reducer: <T, TAcc>(reducer: Reducer<T, TAcc>, ref: [TAcc], scheduler: SchedulerLike) => ObserverLike<T>;
export declare const takeLast: <T>(capacity: number, scheduler: SchedulerLike) => ObserverLike<T> & CollectionEnumeratorLike<T>;

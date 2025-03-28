import { CollectionEnumeratorLike, ObserverLike, SchedulerLike } from "../../utils.js";
export declare const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(o: ObserverLike<T>) => ObserverLike<T>;
export declare const takeLast: <T>(scheduler: SchedulerLike, capacity: number) => ObserverLike<T> & CollectionEnumeratorLike<T>;

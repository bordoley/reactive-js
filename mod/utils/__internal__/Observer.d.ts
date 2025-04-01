import { CollectionEnumeratorLike, ObserverLike, SchedulerLike } from "../../utils.js";
export declare const collect: <T>(buffer: T[], scheduler: SchedulerLike) => ObserverLike<T>;
export declare const create: <T>(notify: (this: ObserverLike<T>, next: T) => void, scheduler: SchedulerLike) => ObserverLike<T>;
export declare const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(o: ObserverLike<T>) => ObserverLike<T>;
export declare const takeLast: <T>(capacity: number, scheduler: SchedulerLike) => ObserverLike<T> & CollectionEnumeratorLike<T>;

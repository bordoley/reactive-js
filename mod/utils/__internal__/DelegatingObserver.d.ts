import { ObserverLike } from "../../utils.js";
export declare const create: <T>(o: ObserverLike<T>) => ObserverLike<T>;
export declare const createNotifyOnlyNonCompletingNonDisposing: <T>(o: ObserverLike<T>) => ObserverLike<T>;

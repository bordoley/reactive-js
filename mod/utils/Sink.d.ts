import { Function1 } from "../functions.js";
import { ObserverLike, SchedulerLike, SinkLike } from "../utils.js";
export declare const toObserver: <T>(scheduler: SchedulerLike) => Function1<SinkLike<T>, ObserverLike<T>>;

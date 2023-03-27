import { ObserverLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observer_create: <T>(scheduler: SchedulerLike, capacity: number) => ObserverLike<T>;
export default Observer_create;

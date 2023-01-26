import { ObserverLike } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
declare const Observer$create: <T>(scheduler: SchedulerLike) => ObserverLike<T>;
export { Observer$create as default };

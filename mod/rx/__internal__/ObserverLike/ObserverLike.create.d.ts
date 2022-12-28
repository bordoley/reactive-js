import { ObserverLike } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
declare const create: <T>(scheduler: SchedulerLike) => ObserverLike<T>;
export { create as default };

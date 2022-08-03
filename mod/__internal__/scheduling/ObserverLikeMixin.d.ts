import { ObserverLike_scheduler, SchedulerLike, ObserverLike_dispatcher, DispatcherLike } from "../../scheduling.mjs";
import { Class1 } from "../util/Object.mjs";
declare const observerMixin: <T>() => Class1<{
    [ObserverLike_scheduler]: SchedulerLike;
}, {
    get [ObserverLike_dispatcher](): DispatcherLike<T>;
}, SchedulerLike>;
export { observerMixin };

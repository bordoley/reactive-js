import { Option } from "../../functions.mjs";
import { ObserverLike_dispatcher, DispatcherLike, SchedulerLike, ObserverLike_scheduler } from "../../scheduling.mjs";
import { Class1 } from "../util/Object.mjs";
declare type TProperties = {
    [ObserverLike_scheduler]: SchedulerLike;
    dispatcher: Option<DispatcherLike>;
};
declare const observerMixin: <T>() => Class1<TProperties, {
    get [ObserverLike_dispatcher](): DispatcherLike<T>;
}, SchedulerLike>;
export { observerMixin };

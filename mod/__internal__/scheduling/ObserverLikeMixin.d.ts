import { Option } from "../../functions.mjs";
import { SchedulerLike, ObserverLike_dispatcher, DispatcherLike, ObserverLike_scheduler } from "../../scheduling.mjs";
import { Object_properties, Object_init } from "../util/Object.mjs";
declare type TProperties = {
    [ObserverLike_scheduler]: SchedulerLike;
    dispatcher: Option<DispatcherLike>;
};
declare const observerMixin: <T>() => {
    [Object_properties]: TProperties;
    [Object_init](this: TProperties, scheduler: SchedulerLike): void;
    readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
};
export { observerMixin };

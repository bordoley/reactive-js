import { Option } from "../../functions.mjs";
import { ObserverLike_scheduler, SchedulerLike, DispatcherLike, ObserverLike_dispatcher } from "../../scheduling.mjs";
import { Object_properties, Object_init } from "../util/Object.mjs";
declare type TProperties = {
    [ObserverLike_scheduler]: SchedulerLike;
    dispatcher: Option<DispatcherLike>;
};
declare type TObserverPrototype<T> = {
    [Object_properties]: {
        [ObserverLike_scheduler]: SchedulerLike;
        dispatcher: Option<DispatcherLike>;
    };
    [Object_init](this: TProperties, scheduler: SchedulerLike): void;
    readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
};
declare const observerPrototype: <T>() => TObserverPrototype<T>;
export { observerPrototype };

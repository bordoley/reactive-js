import { Option } from "../../functions.mjs";
import { SchedulerLike, ObserverLike_dispatcher, DispatcherLike, ObserverLike_scheduler } from "../../scheduling.mjs";
import { Object_init, Object_properties, Object_prototype } from "../util/Object.mjs";
declare type TProperties = {
    [ObserverLike_scheduler]: SchedulerLike;
    dispatcher: Option<DispatcherLike>;
};
declare const observerMixin: <T>() => {
    [Object_init](this: TProperties, scheduler: SchedulerLike): void;
    [Object_properties]: TProperties;
    [Object_prototype]: {
        get [ObserverLike_dispatcher](): DispatcherLike<T>;
    };
};
export { observerMixin };

import { Option } from "../../functions.mjs";
import { ObserverLike_scheduler, SchedulerLike, ObserverLike_dispatcher, DispatcherLike } from "../../scheduling.mjs";
import { Object_properties, Object_init } from "../util/Object.mjs";
declare type TProperties = {
    [ObserverLike_scheduler]: SchedulerLike;
    dispatcher: Option<DispatcherLike>;
};
declare const observerPrototype: {
    [Object_properties]: {
        [ObserverLike_scheduler]: any;
        dispatcher: undefined;
    };
    [Object_init](this: TProperties, scheduler: SchedulerLike): void;
    readonly [ObserverLike_dispatcher]: DispatcherLike<unknown>;
};
export { observerPrototype };

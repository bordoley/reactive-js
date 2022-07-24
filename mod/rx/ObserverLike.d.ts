import { DispatcherLike } from "../scheduling/DispatcherLike.mjs";
import { SchedulerLike } from "../scheduling/SchedulerLike.mjs";
import { ReactiveSinkLike } from "./ReactiveSinkLike.mjs";
declare const ObserverLike_dispatcher: unique symbol;
declare const ObserverLike_scheduler: unique symbol;
interface ObserverLike<T = unknown> extends ReactiveSinkLike<T> {
    readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
    readonly [ObserverLike_scheduler]: SchedulerLike;
}
declare const getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
declare const getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
export { ObserverLike, ObserverLike_dispatcher, ObserverLike_scheduler, getDispatcher, getScheduler };

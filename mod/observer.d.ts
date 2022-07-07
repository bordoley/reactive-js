import { DispatcherLike } from "./dispatcher.mjs";
import { ReactiveSinkLike } from "./reactiveSink.mjs";
import { SchedulerLike } from "./scheduler.mjs";
interface ObserverLike<T> extends ReactiveSinkLike<T> {
    readonly dispatcher: DispatcherLike<T>;
    readonly scheduler: SchedulerLike;
}
declare const getScheduler: <T>(observer: ObserverLike<T>) => SchedulerLike;
declare const getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
export { ObserverLike, getDispatcher, getScheduler };

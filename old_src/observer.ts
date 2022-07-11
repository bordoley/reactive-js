import { DispatcherLike } from "./dispatcher";
import { ReactiveSinkLike } from "./reactiveSink";
import { SchedulerLike } from "./scheduler";

export interface ObserverLike<T> extends ReactiveSinkLike<T> {
  readonly dispatcher: DispatcherLike<T>;
  readonly scheduler: SchedulerLike;
}

export const getScheduler = <T>(observer: ObserverLike<T>): SchedulerLike =>
  observer.scheduler;

export const getDispatcher = <T>(
  observer: ObserverLike<T>,
): DispatcherLike<T> => observer.dispatcher;

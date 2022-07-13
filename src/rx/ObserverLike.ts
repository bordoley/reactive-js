import { DispatcherLike } from "../scheduling/DispatcherLike";
import { SchedulerLike } from "../scheduling/SchedulerLike";
import { ReactiveSinkLike } from "./ReactiveSinkLike";

export const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
export const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");

export interface ObserverLike<T = unknown> extends ReactiveSinkLike<T> {
  readonly [ObserverLike_dispatcher]: DispatcherLike<T>;
  readonly [ObserverLike_scheduler]: SchedulerLike;
}

export const getScheduler = <T>(observer: ObserverLike<T>): SchedulerLike =>
  observer[ObserverLike_scheduler];

export const getDispatcher = <T>(
  observer: ObserverLike<T>,
): DispatcherLike<T> => observer[ObserverLike_dispatcher];

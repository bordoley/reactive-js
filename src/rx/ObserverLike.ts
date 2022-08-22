import {
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
} from "../rx";
import { DispatcherLike, SchedulerLike } from "../scheduling";

export const getScheduler = <T>(observer: ObserverLike<T>): SchedulerLike =>
  observer[ObserverLike_scheduler];

export const getDispatcher = <T>(
  observer: ObserverLike<T>,
): DispatcherLike<T> => observer[ObserverLike_dispatcher];

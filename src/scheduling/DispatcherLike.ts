import { DisposableLike } from "../util/DisposableLike";
import { Identity, SideEffect1 } from "../util/functions";
import { SchedulerLike } from "./SchedulerLike";

export const DispatcherLike_dispatch = Symbol("DispatcherLike_dispatch");
export const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");

export interface DispatcherLike<T = unknown> extends DisposableLike {
  /**
   * Dispatches the next request
   * @param req
   */
  [DispatcherLike_dispatch](req: T): void;

  readonly [DispatcherLike_scheduler]: SchedulerLike;
}

export const dispatch =
  <T, TDispatcher extends DispatcherLike<T>>(v: T): Identity<TDispatcher> =>
  dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
  };

export const dispatchTo =
  <T>(dispatcher: DispatcherLike<T>): SideEffect1<T> =>
  v =>
    dispatcher[DispatcherLike_dispatch](v);

export const getScheduler = (dispatcher: DispatcherLike): SchedulerLike =>
  dispatcher[DispatcherLike_scheduler];

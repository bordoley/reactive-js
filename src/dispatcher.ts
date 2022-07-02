import { Disposable } from "./disposable";
import { Function1, SideEffect1 } from "./functions";
import { SchedulerLike } from "./scheduler";

/** @noInheritDoc */
export interface DispatcherLike<T> extends Disposable {
  /**
   * Dispatches the next request
   * @param req
   */
  dispatch(this: DispatcherLike<T>, req: T): void;

  readonly scheduler: SchedulerLike;
}

export const dispatch =
  <T, TDispatcher extends DispatcherLike<T>>(
    v: T,
  ): Function1<TDispatcher, TDispatcher> =>
  dispatcher => {
    dispatcher.dispatch(v);
    return dispatcher;
  };

export const dispatchTo =
  <T>(dispatcher: DispatcherLike<T>): SideEffect1<T> =>
  v =>
    dispatcher.dispatch(v);

export const getScheduler = <T>(observer: DispatcherLike<T>): SchedulerLike =>
  observer.scheduler;

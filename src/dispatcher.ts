import { DisposableLike } from "./disposable";
import { SideEffect1 } from "./functions";

/** @noInheritDoc */
export interface DispatcherLike<T> extends DisposableLike {
  /**
   * Dispatches the next request
   * @param req
   */
  dispatch(this: DispatcherLike<T>, req: T): void;
}

export const dispatchTo =
  <T>(dispatcher: DispatcherLike<T>): SideEffect1<T> =>
  v =>
    dispatcher.dispatch(v);

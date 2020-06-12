import { DisposableLike } from "./disposable.ts";
import { SideEffect1 } from "./functions.ts";

/** @noInheritDoc */
export interface DispatcherLike<T> extends DisposableLike {
  /**
   * Dispatches the next request
   * @param req
   */
  dispatch(req: T): void;
}

export const dispatchTo = <T>(
  dispatcher: DispatcherLike<T>,
): SideEffect1<T> => v => dispatcher.dispatch(v);

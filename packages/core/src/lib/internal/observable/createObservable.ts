import { SideEffect1 } from "../../functions";
import { ObservableLike, DispatcherLike } from "./interfaces";
import { defer } from "./observable";
import { toDispatcher } from "./toDispatcher";

/**
 * Factory for safely creating new `ObservableLike` instances. The onSubscribe function
 * is called with a `SafeObserverLike` that may be notified from any context.
 *
 * Note, implementations should not do significant blocking work in
 * the onSubscribe function.
 *
 * @param onSubscribe
 */
export const createObservable = <T>(
  onSubscribe: SideEffect1<DispatcherLike<T>>,
): ObservableLike<T> =>
  defer(() => observer => {
    const dispatcher = toDispatcher(observer);
    onSubscribe(dispatcher);
  });

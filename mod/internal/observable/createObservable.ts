import { DispatcherLike } from "../../dispatcher.ts";
import { SideEffect1 } from "../../functions.ts";
import { ObservableLike } from "./interfaces.ts";
import { defer } from "./observable.ts";
import { toDispatcher } from "./toDispatcher.ts";

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

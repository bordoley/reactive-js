import { ObserverLike } from "@reactive-js/rx-observer";
import { observe as subscriberObserveOperator } from "@reactive-js/rx-subscriber";
import { ObservableOperator } from "./observable";
import { lift } from "./lift"

/**
 * Returns a ObservableOperator which forwards notifications to the provided observer.
 *
 * @param observer
 */
export const observe = <T>(
  observer: ObserverLike<T>,
): ObservableOperator<T, T> => lift(subscriberObserveOperator(observer));

import { ContainerOperator } from "../../../containers.js";
import { Function2, isNone, isSome } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
import Observable_repeatOrRetry from "./Observable.repeatOrRetry.js";

interface ObservableRetry {
  retry<C extends ObservableContainer, T>(): ContainerOperator<C, T, T>;
  retry<C extends ObservableContainer, T>(
    predicate: Function2<number, unknown, boolean>,
  ): ContainerOperator<C, T, T>;
}
const Observable_retry: ObservableRetry["retry"] = /*@__PURE__*/ (() => {
  const defaultRetryPredicate = (_: number, error?: Error): boolean =>
    isSome(error);

  return (predicate?: (count: number, error: unknown) => boolean) => {
    const retryPredicate = isNone(predicate)
      ? defaultRetryPredicate
      : (count: number, error?: Error) =>
          isSome(error) && predicate(count, error);

    return Observable_repeatOrRetry(retryPredicate);
  };
})();

export default Observable_retry;

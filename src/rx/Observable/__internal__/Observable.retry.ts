import { ContainerOperator } from "../../../containers.js";
import { Function2, isNone, isSome } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_repeatOrRetry from "./Observable.repeatOrRetry.js";

interface ObservableRetry {
  <C extends ObservableLike, T>(): ContainerOperator<C, T, T>;
  <C extends ObservableLike, T>(
    predicate: Function2<number, unknown, boolean>,
  ): ContainerOperator<C, T, T>;
}
const Observable_retry: ObservableRetry = /*@__PURE__*/ (() => {
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

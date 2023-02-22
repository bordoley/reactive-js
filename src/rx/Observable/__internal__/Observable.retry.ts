import { isNone, isSome } from "../../../functions.js";
import { ObservableLike, Retry } from "../../../rx.js";
import Observable_repeatOrRetry from "./Observable.repeatOrRetry.js";

const Observable_retry: Retry<ObservableLike>["retry"] = /*@__PURE__*/ (() => {
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

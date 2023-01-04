import { isNone, isSome } from "../../../functions";
import { Exception } from "../../../util";
import ObservableLike__repeatOrRetry from "./ObservableLike.repeatOrRetry";

const ObservableLike__retry = /*@__PURE__*/ (() => {
  const defaultRetryPredicate = (_: number, error?: Exception): boolean =>
    isSome(error);

  return (predicate?: (count: number, error: unknown) => boolean) => {
    const retryPredicate = isNone(predicate)
      ? defaultRetryPredicate
      : (count: number, error?: Exception) =>
          isSome(error) && predicate(count, error.cause);

    return ObservableLike__repeatOrRetry(retryPredicate);
  };
})();

export default ObservableLike__retry;

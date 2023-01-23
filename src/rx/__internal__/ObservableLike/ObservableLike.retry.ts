import { isNone, isSome } from "../../../functions";
import ObservableLike__repeatOrRetry from "./ObservableLike.repeatOrRetry";

const ObservableLike__retry = /*@__PURE__*/ (() => {
  const defaultRetryPredicate = (_: number, error?: Error): boolean =>
    isSome(error);

  return (predicate?: (count: number, error: unknown) => boolean) => {
    const retryPredicate = isNone(predicate)
      ? defaultRetryPredicate
      : (count: number, error?: Error) =>
          isSome(error) && predicate(count, error);

    return ObservableLike__repeatOrRetry(retryPredicate);
  };
})();

export default ObservableLike__retry;

import { isNone, isSome } from "../../../functions";
import Observable$repeatOrRetry from "./Observable.repeatOrRetry";

const Observable$retry = /*@__PURE__*/ (() => {
  const defaultRetryPredicate = (_: number, error?: Error): boolean =>
    isSome(error);

  return (predicate?: (count: number, error: unknown) => boolean) => {
    const retryPredicate = isNone(predicate)
      ? defaultRetryPredicate
      : (count: number, error?: Error) =>
          isSome(error) && predicate(count, error);

    return Observable$repeatOrRetry(retryPredicate);
  };
})();

export default Observable$retry;

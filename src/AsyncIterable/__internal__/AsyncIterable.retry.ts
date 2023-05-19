import type * as AsyncIterable from "../../AsyncIterable.js";
import { isNone, isSome } from "../../functions.js";
import AsyncIterablee_repeatOrRetry from "./AsyncIterable.repeatOrRetry.js";

const AsyncIterable_retry: AsyncIterable.Signature["retry"] =
  /*@__PURE__*/ (() => {
    const defaultRetryPredicate = (_: number, error?: Error): boolean =>
      isSome(error);

    return (predicate?: (count: number, error: Error) => boolean) => {
      const retryPredicate = isNone(predicate)
        ? defaultRetryPredicate
        : (count: number, error?: Error) =>
            isSome(error) && predicate(count, error);

      return AsyncIterablee_repeatOrRetry(retryPredicate);
    };
  })();

export default AsyncIterable_retry;

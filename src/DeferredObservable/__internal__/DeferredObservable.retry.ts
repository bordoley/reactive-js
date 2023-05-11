import type * as DeferredObservable from "../../DeferredObservable.js";
import { isNone, isSome } from "../../functions.js";
import DeferredObservablee_repeatOrRetry from "./DeferredObservable.repeatOrRetry.js";

const DeferredObservable_retry: DeferredObservable.Signature["retry"] =
  /*@__PURE__*/ (() => {
    const defaultRetryPredicate = (_: number, error?: Error): boolean =>
      isSome(error);

    return (predicate?: (count: number, error: Error) => boolean) => {
      const retryPredicate = isNone(predicate)
        ? defaultRetryPredicate
        : (count: number, error?: Error) =>
            isSome(error) && predicate(count, error);

      return DeferredObservablee_repeatOrRetry(retryPredicate);
    };
  })();

export default DeferredObservable_retry;

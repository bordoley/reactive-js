import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { isNone, isSome } from "../../functions.js";
import EnumeratorFactory_repeatOrRetry from "./EnumeratorFactory.repeatOrRetry.js";

const defaultRetryPredicate = (_: number, error?: Error): boolean =>
  isSome(error);

const EnumeratorFactory_retry: EnumeratorFactory.Signature["retry"] = (
  predicate?: (count: number, error: Error) => boolean,
) => {
  const retryPredicate = isNone(predicate)
    ? defaultRetryPredicate
    : (count: number, error?: Error) =>
        isSome(error) && predicate(count, error);

  return EnumeratorFactory_repeatOrRetry(retryPredicate);
};

export default EnumeratorFactory_retry;

import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Observable_retry: Observable.Signature["retry"] = (<T>(
  shouldRetry?: (count: number, error: Error) => boolean,
) =>
  DeferredEventSource.retry<ObserverLike<T>, T>(
    Observer.createDelegatingCatchError,
    shouldRetry,
  )) as Observable.Signature["retry"];

export default Observable_retry;

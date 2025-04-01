import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const Observable_retry: Observable.Signature["retry"] = (<T>(
  shouldRetry?: (count: number, error: Error) => boolean,
) =>
  DeferredReactiveSource.retry<ObserverLike<T>, T>(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
    shouldRetry,
  )) as Observable.Signature["retry"];

export default Observable_retry;

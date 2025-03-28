import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Producer_retry: Producer.Signature["retry"] = (<T>(
  shouldRetry?: (count: number, error: Error) => boolean,
) =>
  DeferredSource.retry<ObserverLike<T>, T>(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
    shouldRetry,
  )) as Producer.Signature["retry"];

export default Producer_retry;

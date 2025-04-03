import * as Observer from "../../../utils/__internal__/Observer.js";
import { ObserverLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Producer_retry: Producer.Signature["retry"] = (<T>(
  shouldRetry?: (count: number, error: Error) => boolean,
) =>
  DeferredEventSource.retry<ObserverLike<T>, T>(
    Observer.createDelegatingCatchError,
    shouldRetry,
  )) as Producer.Signature["retry"];

export default Producer_retry;

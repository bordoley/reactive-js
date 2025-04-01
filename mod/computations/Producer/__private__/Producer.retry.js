/// <reference types="./Producer.retry.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Producer_retry = ((shouldRetry) => DeferredReactiveSource.retry(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing, shouldRetry));
export default Producer_retry;

/// <reference types="./Producer.retry.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Producer_retry = ((shouldRetry) => DeferredEventSource.retry(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing, shouldRetry));
export default Producer_retry;

/// <reference types="./Producer.retry.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Producer_retry = ((shouldRetry) => DeferredSource.retry(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing, shouldRetry));
export default Producer_retry;

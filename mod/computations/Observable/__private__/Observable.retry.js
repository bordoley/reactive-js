/// <reference types="./Observable.retry.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Observable_retry = ((shouldRetry) => DeferredSource.retry(Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing, shouldRetry));
export default Observable_retry;

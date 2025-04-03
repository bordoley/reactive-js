/// <reference types="./Observable.retry.d.ts" />

import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Observable_retry = ((shouldRetry) => DeferredEventSource.retry(Observer.createDelegatingCatchError, shouldRetry));
export default Observable_retry;

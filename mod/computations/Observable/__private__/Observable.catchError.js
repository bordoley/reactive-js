/// <reference types="./Observable.catchError.d.ts" />

import { ComputationLike_isPure, } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
const Observable_catchError = ((errorHandler, options) => DeferredEventSource.catchError((Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing), errorHandler, options));
export default Observable_catchError;

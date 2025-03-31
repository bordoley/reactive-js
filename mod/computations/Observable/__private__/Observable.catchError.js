/// <reference types="./Observable.catchError.d.ts" />

import { ComputationLike_isPure, } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
const Observable_catchError = ((errorHandler, options) => DeferredSource.catchError((Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing), errorHandler, options));
export default Observable_catchError;

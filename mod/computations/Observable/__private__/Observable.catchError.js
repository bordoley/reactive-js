/// <reference types="./Observable.catchError.d.ts" />

import { ComputationLike_isPure, } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
const Observable_catchError = ((errorHandler, options) => DeferredReactiveSource.catchError((Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing), errorHandler, options));
export default Observable_catchError;

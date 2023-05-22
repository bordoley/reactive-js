/// <reference types="./Runnable.catchError.d.ts" />

import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import Observable_liftRunnableUpperBounded from "../../Observable/__internal__/Observable.liftRunnableUpperBounded.js";
const Runnable_catchError = 
/*@__PURE__*/ Observable_catchErrorWithFallback(Observable_liftRunnableUpperBounded);
export default Runnable_catchError;

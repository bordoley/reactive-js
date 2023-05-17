/// <reference types="./Runnable.catchError.d.ts" />

import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import Runnable_lift from "../../Runnable/__internal__/Runnable.lift.js";
const Runnable_catchError = 
/*@__PURE__*/ Observable_catchErrorWithFallback(Runnable_lift);
export default Runnable_catchError;

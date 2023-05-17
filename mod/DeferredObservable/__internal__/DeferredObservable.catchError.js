/// <reference types="./DeferredObservable.catchError.d.ts" />

import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";
const DeferredObservable_catchError = 
/*@__PURE__*/ Observable_catchErrorWithFallback(DeferredObservable_lift);
export default DeferredObservable_catchError;

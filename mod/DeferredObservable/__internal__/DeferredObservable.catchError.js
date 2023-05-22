/// <reference types="./DeferredObservable.catchError.d.ts" />

import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import Observable_liftDeferredObservableUpperBounded from "../../Observable/__internal__/Observable.liftDeferredObservableUpperBounded.js";
const DeferredObservable_catchError = 
/*@__PURE__*/ Observable_catchErrorWithFallback(Observable_liftDeferredObservableUpperBounded);
export default DeferredObservable_catchError;

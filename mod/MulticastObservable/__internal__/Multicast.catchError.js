/// <reference types="./Multicast.catchError.d.ts" />

import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
import Observable_liftMulticastObservableUpperBounded from "../../Observable/__internal__/Observable.liftMulticastObservableUpperBounded.js";
const MulticastObservable_catchError = 
/*@__PURE__*/ Observable_catchErrorWithFallback(Observable_liftMulticastObservableUpperBounded);
export default MulticastObservable_catchError;

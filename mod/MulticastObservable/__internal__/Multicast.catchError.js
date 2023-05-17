/// <reference types="./Multicast.catchError.d.ts" />

import MulticastObservable_lift from "../../MulticastObservable/__internal__/MulticastObservable.lift.js";
import Observable_catchErrorWithFallback from "../../Observable/__internal__/Observable.catchErrorWithFallback.js";
const MulticastObservable_catchError = 
/*@__PURE__*/ Observable_catchErrorWithFallback(MulticastObservable_lift);
export default MulticastObservable_catchError;

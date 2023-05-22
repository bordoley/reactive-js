/// <reference types="./MulticastObservable.mergeAll.d.ts" />

import Observable_liftMulticastObservableUpperBounded from "../../Observable/__internal__/Observable.liftMulticastObservableUpperBounded.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
const MulticastObservable_mergeAll = 
/*@__PURE__*/ Observable_mergeAll(Observable_liftMulticastObservableUpperBounded);
export default MulticastObservable_mergeAll;

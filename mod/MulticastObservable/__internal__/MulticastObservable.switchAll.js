/// <reference types="./MulticastObservable.switchAll.d.ts" />

import Observable_liftMulticastObservableUpperBounded from "../../Observable/__internal__/Observable.liftMulticastObservableUpperBounded.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
const MulticastObservable_switchAll = 
/*@__PURE__*/ Observable_switchAll(Observable_liftMulticastObservableUpperBounded);
export default MulticastObservable_switchAll;

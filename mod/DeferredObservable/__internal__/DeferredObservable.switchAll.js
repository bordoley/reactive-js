/// <reference types="./DeferredObservable.switchAll.d.ts" />

import Observable_liftDeferredObservableUpperBounded from "../../Observable/__internal__/Observable.liftDeferredObservableUpperBounded.js";
import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
const DeferredObservable_switchAll = 
/*@__PURE__*/ Observable_switchAll(Observable_liftDeferredObservableUpperBounded);
export default DeferredObservable_switchAll;

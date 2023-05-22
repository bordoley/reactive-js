/// <reference types="./DeferredObservable.mergeAll.d.ts" />

import Observable_liftDeferredObservableUpperBounded from "../../Observable/__internal__/Observable.liftDeferredObservableUpperBounded.js";
import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
const DeferredObservable_mergeAll = 
/*@__PURE__*/ Observable_mergeAll(Observable_liftDeferredObservableUpperBounded);
export default DeferredObservable_mergeAll;

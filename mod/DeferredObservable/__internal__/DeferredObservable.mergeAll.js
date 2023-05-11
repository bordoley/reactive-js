/// <reference types="./DeferredObservable.mergeAll.d.ts" />

import Observable_mergeAll from "../../Observable/__internal__/Observable.mergeAll.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";
const DeferredObservable_mergeAll = 
/*@__PURE__*/ Observable_mergeAll(DeferredObservable_lift);
export default DeferredObservable_mergeAll;

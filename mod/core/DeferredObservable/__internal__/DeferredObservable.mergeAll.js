/// <reference types="./DeferredObservable.mergeAll.d.ts" />

import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";
const DeferredObservable_mergeAll = 
/*@__PURE__*/ HigherOrderObservable_mergeAll(DeferredObservable_lift);
export default DeferredObservable_mergeAll;

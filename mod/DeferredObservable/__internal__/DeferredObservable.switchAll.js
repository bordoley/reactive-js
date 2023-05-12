/// <reference types="./DeferredObservable.switchAll.d.ts" />

import Observable_switchAll from "../../Observable/__internal__/Observable.switchAll.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";
const DeferredObservable_switchAll = 
/*@__PURE__*/ Observable_switchAll(DeferredObservable_lift);
export default DeferredObservable_switchAll;

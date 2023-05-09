/// <reference types="./DeferredObservable.switchAll.d.ts" />

import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";
const DeferredObservable_switchAll = 
/*@__PURE__*/ HigherOrderObservable_switchAll(DeferredObservable_lift);
export default DeferredObservable_switchAll;

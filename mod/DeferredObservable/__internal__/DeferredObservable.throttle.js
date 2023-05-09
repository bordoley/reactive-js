/// <reference types="./DeferredObservable.throttle.d.ts" />

import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import DeferredObservable_lift from "./DeferredObservable.lift.js";
const DeferredObservable_throttle = 
/*@__PURE__*/ (() => HigherOrderObservable_throttle(ReadonlyArray_toObservable, DeferredObservable_lift))();
export default DeferredObservable_throttle;

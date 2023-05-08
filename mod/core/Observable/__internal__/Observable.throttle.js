/// <reference types="./Observable.throttle.d.ts" />

import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../core.js";
import ReadonlyArray_toObservable from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Observable_lift from "./Observable.lift.js";
const Observable_throttle = /*@__PURE__*/ (() => HigherOrderObservable_throttle(ReadonlyArray_toObservable, 
// FIXME: should just be DeferredObservable_lift
Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
})))();
export default Observable_throttle;

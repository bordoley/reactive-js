/// <reference types="./Observable.throttle.d.ts" />

import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Observable_lift from "./Observable.lift.js";
const Observable_throttle = /*@__PURE__*/ (() => HigherOrderObservable_throttle(ReadonlyArray_toObservable, Observable_lift(false, false)))();
export default Observable_throttle;

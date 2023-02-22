/// <reference types="./Observable.throttle.d.ts" />

import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import HigherOrderObservable_throttle from "../../__internal__/HigherOrderObservable/HigherOrderObservable.throttle.js";
import Observable_lift from "./Observable.lift.js";
const Observable_throttle = /*@__PURE__*/ (() => HigherOrderObservable_throttle(ReadonlyArray_toRunnableObservable, Observable_lift(false, false)))();
export default Observable_throttle;

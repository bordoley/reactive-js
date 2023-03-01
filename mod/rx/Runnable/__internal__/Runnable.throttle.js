/// <reference types="./Runnable.throttle.d.ts" />

import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_throttle = /*@__PURE__*/ (() => HigherOrderObservable_throttle(ReadonlyArray_toObservable, Runnable_lift))();
export default Runnable_throttle;

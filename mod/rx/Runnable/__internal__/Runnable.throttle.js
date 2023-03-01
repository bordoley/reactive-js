/// <reference types="./Runnable.throttle.d.ts" />

import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_throttle = /*@__PURE__*/ (() => HigherOrderObservable_throttle(ReadonlyArray_toRunnable, Runnable_lift))();
export default Runnable_throttle;

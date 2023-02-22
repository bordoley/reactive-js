/// <reference types="./RunnableObservableLike.throttle.d.ts" />

import ReadonlyArray_toRunnableObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.js";
import HigherOrderObservable_throttle from "../../HigherOrderObservable/__internal__/HigherOrderObservable.throttle.js";
import RunnableObservable_lift from "./RunnableObservable.lift.js";
const RunnableObservable_throttle = 
/*@__PURE__*/ (() => HigherOrderObservable_throttle(ReadonlyArray_toRunnableObservable, RunnableObservable_lift))();
export default RunnableObservable_throttle;

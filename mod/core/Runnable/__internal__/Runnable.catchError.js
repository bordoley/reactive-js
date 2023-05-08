/// <reference types="./Runnable.catchError.d.ts" />

import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import Runnable_lift from "./Runnable.lift.js";
const Runnable_catchError = 
/*@__PURE__*/ HigherOrderObservable_catchError(Runnable_lift);
export default Runnable_catchError;

/// <reference types="./RunnableObservable.catchError.d.ts" />

import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import RunnableObservable_lift from "./RunnableObservable.lift.js";
const RunnableObservable_catchError = 
/*@__PURE__*/ HigherOrderObservable_catchError(RunnableObservable_lift);
export default RunnableObservable_catchError;

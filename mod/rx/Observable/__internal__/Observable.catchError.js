/// <reference types="./Observable.catchError.d.ts" />

import HigherOrderObservable_catchError from "../../__internal__/HigherOrderObservable/HigherOrderObservable.catchError.js";
import Observable_lift from "./Observable.lift.js";
const Observable_catchError = 
/*@__PURE__*/ HigherOrderObservable_catchError(Observable_lift());
export default Observable_catchError;

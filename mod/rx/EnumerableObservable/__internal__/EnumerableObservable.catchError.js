/// <reference types="./EnumerableObservable.catchError.d.ts" />

import HigherOrderObservable_catchError from "../../__internal__/HigherOrderObservable/HigherOrderObservable.catchError.js";
import EnumerableObservable_lift from "./EnumerableObservable.lift.js";
const EnumerableObservable_catchError = 
/*@__PURE__*/ HigherOrderObservable_catchError(EnumerableObservable_lift);
export default EnumerableObservable_catchError;

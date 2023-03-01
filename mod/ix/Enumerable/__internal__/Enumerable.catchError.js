/// <reference types="./Enumerable.catchError.d.ts" />

import HigherOrderObservable_catchError from "../../../rx/HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import EnumerableObservable_lift from "./Enumerable.lift.js";
const Enumerable_catchError = 
/*@__PURE__*/ HigherOrderObservable_catchError(EnumerableObservable_lift);
export default Enumerable_catchError;

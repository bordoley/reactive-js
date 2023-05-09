/// <reference types="./Observable.catchError.d.ts" />

import HigherOrderObservable_catchError from "../../HigherOrderObservable/__internal__/HigherOrderObservable.catchError.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
import Observable_lift from "./Observable.lift.js";
const Observable_catchError = 
/*@__PURE__*/ HigherOrderObservable_catchError(
// FIXME: should just be DeferredObservable_lift
Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
}));
export default Observable_catchError;

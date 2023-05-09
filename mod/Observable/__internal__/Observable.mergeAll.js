/// <reference types="./Observable.mergeAll.d.ts" />

import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
import Observable_lift from "./Observable.lift.js";
const Observable_mergeAll = 
/*@__PURE__*/ (() => HigherOrderObservable_mergeAll(
// FIXME: should just be DeferredObservable_lift
Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
})))();
export default Observable_mergeAll;

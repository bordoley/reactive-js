/// <reference types="./Observable.mergeAll.d.ts" />

import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../core.js";
import HigherOrderObservable_mergeAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.mergeAll.js";
import Observable_lift from "./Observable.lift.js";
const Observable_mergeAll = 
/*@__PURE__*/ (() => HigherOrderObservable_mergeAll(Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
})))();
export default Observable_mergeAll;

/// <reference types="./Observable.mergeAll.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observer_createMergeAllObserverOperator from "../../Observer/__private__/Observer.createMergeAllObserverOperator.js";
import Observable_lift from "./Observable.lift.js";
const Observable_mergeAll = ((options) => Observable_lift({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
    ...(options ?? {}),
})(Observer_createMergeAllObserverOperator(options)));
export default Observable_mergeAll;

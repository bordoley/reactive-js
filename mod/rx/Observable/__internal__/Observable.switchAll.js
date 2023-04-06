/// <reference types="./Observable.switchAll.d.ts" />

import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../rx.js";
import HigherOrderObservable_switchAll from "../../HigherOrderObservable/__internal__/HigherOrderObservable.switchAll.js";
import Observable_lift from "./Observable.lift.js";
const Observable_switchAll = 
/*@__PURE__*/ HigherOrderObservable_switchAll(Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
}));
export default Observable_switchAll;

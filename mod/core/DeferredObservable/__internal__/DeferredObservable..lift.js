/// <reference types="./DeferredObservable..lift.d.ts" />

import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../core.js";
import Observable_lift from "../../Observable/__internal__/Observable.lift.js";
const DeferredObservable_lift = 
/*@__PURE__*/ Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
});
export default DeferredObservable_lift;

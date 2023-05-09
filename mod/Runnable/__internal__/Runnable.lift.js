/// <reference types="./Runnable.lift.d.ts" />

import Observable_lift from "../../Observable/__internal__/Observable.lift.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
const Runnable_lift = 
/*@__PURE__*/ Observable_lift({
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
});
export default Runnable_lift;

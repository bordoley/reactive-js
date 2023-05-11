/// <reference types="./Runnable.lift.d.ts" />

import Observable_liftUpperBoundedBy from "../../Observable/__internal__/Observable.liftUpperBoundedBy.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
const Runnable_lift = 
/*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
});
export default Runnable_lift;

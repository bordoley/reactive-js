/// <reference types="./SharedObservable.lift.d.ts" />

import Observable_liftUpperBoundedBy from "../../Observable/__internal__/Observable.liftUpperBoundedBy.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
const SharedObservable_lift = 
/*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
});
export default SharedObservable_lift;

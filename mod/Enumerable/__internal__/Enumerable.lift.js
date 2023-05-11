/// <reference types="./Enumerable.lift.d.ts" />

import Observable_liftUpperBoundedBy from "../../Observable/__internal__/Observable.liftUpperBoundedBy.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
const Enumerable_lift = 
/*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: true,
    [ObservableLike_isRunnable]: true,
});
export default Enumerable_lift;

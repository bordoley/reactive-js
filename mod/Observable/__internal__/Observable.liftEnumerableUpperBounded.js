/// <reference types="./Observable.liftEnumerableUpperBounded.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
import Observable_liftUpperBoundedBy from "./Observable.liftUpperBoundedBy.js";
const Observable_liftEnumerableUpperBounded = 
/*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: true,
    [ObservableLike_isRunnable]: true,
});
export default Observable_liftEnumerableUpperBounded;

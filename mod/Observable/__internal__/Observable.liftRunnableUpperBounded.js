/// <reference types="./Observable.liftRunnableUpperBounded.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../types.js";
import Observable_liftUpperBoundedBy from "./Observable.liftUpperBoundedBy.js";
const Observable_liftRunnableUpperBounded = 
/*@__PURE__*/ Observable_liftUpperBoundedBy({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isRunnable]: true,
});
export default Observable_liftRunnableUpperBounded;

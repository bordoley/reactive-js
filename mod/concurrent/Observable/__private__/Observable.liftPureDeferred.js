/// <reference types="./Observable.liftPureDeferred.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_lift from "./Observable.lift.js";
const Observable_liftPureDeferred = /*@__PURE__*/ Observable_lift({
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isMulticasted]: false,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
});
export default Observable_liftPureDeferred;

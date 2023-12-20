/// <reference types="./Observable.createPureDeferred.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_createPureDeferred = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: false,
});
export default Observable_createPureDeferred;

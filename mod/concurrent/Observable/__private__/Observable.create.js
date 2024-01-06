/// <reference types="./Observable.create.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isMulticasted]: false,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
});
export default Observable_create;

/// <reference types="./Observable.create.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../core.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
});
export default Observable_create;

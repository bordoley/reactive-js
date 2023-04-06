/// <reference types="./Observable.create.d.ts" />

import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../rx.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
const Observable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
});
export default Observable_create;

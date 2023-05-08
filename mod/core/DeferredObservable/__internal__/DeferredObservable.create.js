/// <reference types="./DeferredObservable.create.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../core.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
const DeferredObservable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: false,
});
export default DeferredObservable_create;

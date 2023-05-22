/// <reference types="./DeferredObservable.create.d.ts" />

import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../types.js";
const DeferredObservable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isRunnable]: false,
});
export default DeferredObservable_create;

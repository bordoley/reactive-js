/// <reference types="./Runnable.create.d.ts" />

import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
const Runnable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
});
export default Runnable_create;

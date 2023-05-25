/// <reference types="./Runnable.create.d.ts" />

import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../types.js";
const Runnable_create = ((f, config) => Observable_createWithConfig(f, {
    ...config,
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isRunnable]: true,
}));
export default Runnable_create;

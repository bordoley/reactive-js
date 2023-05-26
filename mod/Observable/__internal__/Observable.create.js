/// <reference types="./Observable.create.d.ts" />

import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../types.js";
const Observable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: false,
    [ObservableLike_isRunnable]: false,
});
export default Observable_create;

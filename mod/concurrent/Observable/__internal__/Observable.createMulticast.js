/// <reference types="./Observable.createMulticast.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
const Observable_createMulticast = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: false,
});
export default Observable_createMulticast;

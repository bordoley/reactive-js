/// <reference types="./Observable.createRunnable.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
const Observable_createRunnable = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isPure]: true,
    [ObservableLike_isRunnable]: true,
});
export default Observable_createRunnable;

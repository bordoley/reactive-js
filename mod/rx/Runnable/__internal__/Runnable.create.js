/// <reference types="./Runnable.create.d.ts" />

import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../rx.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
const Runnable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isEnumerable]: false,
    [ObservableLike_isRunnable]: true,
});
export default Runnable_create;

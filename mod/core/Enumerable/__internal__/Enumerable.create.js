/// <reference types="./Enumerable.create.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../core.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
const Enumerable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
    [ObservableLike_isEnumerable]: true,
    [ObservableLike_isRunnable]: true,
});
export default Enumerable_create;

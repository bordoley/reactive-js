/// <reference types="./Enumerable.create.d.ts" />

import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../rx.js";
import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
const Enumerable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isEnumerable]: true,
    [ObservableLike_isRunnable]: true,
});
export default Enumerable_create;

/// <reference types="./MulticastObservable.create.d.ts" />

import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../types.js";
const MulticastObservable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: false,
    [ObservableLike_isRunnable]: false,
});
export default MulticastObservable_create;

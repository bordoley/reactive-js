/// <reference types="./Observable.create.d.ts" />

import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { ObservableLike_isDeferred } from "../../types.js";
const Observable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isDeferred]: true,
});
export default Observable_create;

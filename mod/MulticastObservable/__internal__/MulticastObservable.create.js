/// <reference types="./MulticastObservable.create.d.ts" />

import Observable_createWithConfig from "../../Observable/__internal__/Observable.createWithConfig.js";
import { ObservableLike_isPure, } from "../../types.js";
const MulticastObservable_create = (f) => Observable_createWithConfig(f, {
    [ObservableLike_isPure]: true,
});
export default MulticastObservable_create;

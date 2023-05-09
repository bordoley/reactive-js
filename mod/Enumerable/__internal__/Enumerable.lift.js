/// <reference types="./Enumerable.lift.d.ts" />

import Observable_lift from "../../Observable/__internal__/Observable.lift.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
const Enumerable_lift = Observable_lift({
    [ObservableLike_isEnumerable]: true,
    [ObservableLike_isRunnable]: true,
});
export default Enumerable_lift;

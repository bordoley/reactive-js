/// <reference types="./Observable.throttle.d.ts" />

import Observer_createThrottleObserver from "../../Observer/__internal__/Observer.createThrottleObserver.js";
import ReadonlyArray_toRunnable from "../../ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { none, partial, pipe, pipeLazy } from "../../functions.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
import Observable_liftUpperBoundedBy from "./Observable.liftUpperBoundedBy.js";
const Observable_throttle = ((duration, options = {}) => {
    const { mode = "interval" } = options;
    const durationObservable = pipeLazy([none], ReadonlyArray_toRunnable({
        delay: duration,
        delayStart: true,
    }));
    return pipe(Observer_createThrottleObserver, partial(durationObservable, mode), Observable_liftUpperBoundedBy({
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: true,
    }));
});
export default Observable_throttle;

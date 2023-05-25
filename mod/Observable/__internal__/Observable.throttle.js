/// <reference types="./Observable.throttle.d.ts" />

import Observer_createThrottleObserver from "../../Observer/__internal__/Observer.createThrottleObserver.js";
import { none, partial, pipe, pipeLazy } from "../../functions.js";
import Observable_delay from "./Observable.delay.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_liftRunnableUpperBounded from "./Observable.liftRunnableUpperBounded.js";
const Observable_throttle = (duration, options = {}) => {
    const { mode = "interval" } = options;
    const durationObservable = pipeLazy(none, Observable_fromValue(), Observable_delay(duration, { delayStart: true }));
    return pipe(Observer_createThrottleObserver, partial(durationObservable, mode), Observable_liftRunnableUpperBounded);
};
export default Observable_throttle;

/// <reference types="./Observable.throttle.d.ts" />

import { none, partial, pipe, pipeLazy } from "../../../functions.js";
import Observer_createThrottleObserver from "../../Observer/__private__/Observer.createThrottleObserver.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
import Observable_liftWithSideEffects from "./Observable.liftWithSideEffects.js";
const Observable_throttle = (duration, options = {}) => {
    const { mode = "interval" } = options;
    const durationObservable = pipeLazy([none], 
    // FIXME: Observable_fromValue
    Observable_fromIterable({ delay: duration, delayStart: true }));
    return pipe(Observer_createThrottleObserver, partial(durationObservable, mode), Observable_liftWithSideEffects);
};
export default Observable_throttle;

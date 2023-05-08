/// <reference types="./Observer.assertState.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { DisposableLike_isDisposed, SchedulerLike_inContinuation, } from "../../../core.js";
import { raiseWithDebugMessage } from "../../../functions.js";
const Observer_assertState = (observer) => {
    if (__DEV__ &&
        (!observer[SchedulerLike_inContinuation] ||
            observer[DisposableLike_isDisposed])) {
        raiseWithDebugMessage("Notifying an observer in an invalid state");
    }
};
export default Observer_assertState;

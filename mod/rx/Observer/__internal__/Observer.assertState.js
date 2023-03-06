/// <reference types="./Observer.assertState.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { raiseWithDebugMessage } from "../../../functions.js";
import { ObserverLike_scheduler } from "../../../rx.js";
import { SchedulerLike_inContinuation } from "../../../scheduling.js";
import { DisposableLike_isDisposed } from "../../../util.js";
const Observer_assertState = (observer) => {
    if (__DEV__ &&
        (!observer[ObserverLike_scheduler][SchedulerLike_inContinuation] ||
            observer[DisposableLike_isDisposed])) {
        raiseWithDebugMessage("Notifying an observer in an invalid state");
    }
};
export default Observer_assertState;

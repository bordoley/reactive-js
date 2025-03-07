/// <reference types="./Observer.assertObserverState.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { ObserverLike_notify } from "../../../computations.js";
import { call, raiseIf } from "../../../functions.js";
import { DisposableLike_isDisposed, SchedulerLike_inContinuation, } from "../../../utils.js";
const Observer_assertObserverState = (notify) => __DEV__
    ? {
        [ObserverLike_notify](next) {
            raiseIf(!this[SchedulerLike_inContinuation], "Observer can only be notified from within a Scheduler continuation");
            raiseIf(this[DisposableLike_isDisposed], "Observer is disposed");
            call(notify, this, next);
        },
    }[ObserverLike_notify]
    : notify;
export default Observer_assertObserverState;

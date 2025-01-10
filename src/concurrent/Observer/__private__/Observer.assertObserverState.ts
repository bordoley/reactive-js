import { __DEV__ } from "../../../__internal__/constants.js";
import {
  ObserverLike,
  SchedulerLike_inContinuation,
} from "../../../concurrent.js";
import { raiseIf } from "../../../functions.js";
import { DisposableLike_isDisposed } from "../../../utils.js";

const Observer_assertObserverState = (observer: ObserverLike) => {
  if (__DEV__) {
    raiseIf(
      !observer[SchedulerLike_inContinuation],
      "Observer can only be notified from within a Scheduler continuation",
    );
    raiseIf(observer[DisposableLike_isDisposed], "Observer is disposed");
  }
};

export default Observer_assertObserverState;

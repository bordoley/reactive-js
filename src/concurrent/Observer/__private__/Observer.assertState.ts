import { __DEV__ } from "../../../__internal__/constants.js";
import {
  ObserverLike,
  SchedulerLike_inContinuation,
} from "../../../concurrent.js";
import { raiseIf } from "../../../functions.js";
import { DisposableLike_isDisposed } from "../../../utils.js";

const Observer_assertState = (observer: ObserverLike) => {
  if (__DEV__) {
    raiseIf(
      !observer[SchedulerLike_inContinuation] ||
        observer[DisposableLike_isDisposed],
      "Notifying an observer in an invalid state",
    );
  }
};

export default Observer_assertState;

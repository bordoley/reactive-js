import { __DEV__ } from "../../../__internal__/constants.js";
import { raiseWithDebugMessage } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
import {
  DisposableLike_isDisposed,
  SchedulerLike_inContinuation,
} from "../../../util.js";

const Observer_assertState = (observer: ObserverLike) => {
  if (
    __DEV__ &&
    (!observer[SchedulerLike_inContinuation] ||
      observer[DisposableLike_isDisposed])
  ) {
    raiseWithDebugMessage("Notifying an observer in an invalid state");
  }
};

export default Observer_assertState;

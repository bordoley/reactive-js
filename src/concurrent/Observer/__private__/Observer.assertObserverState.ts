import { __DEV__ } from "../../../__internal__/constants.js";
import {
  ObserverLike,
  SchedulerLike_inContinuation,
} from "../../../concurrent.js";
import { call, raiseIf } from "../../../functions.js";
import { DisposableLike_isDisposed } from "../../../utils.js";

const Observer_assertObserverState = <TThis extends ObserverLike<T>, T>(
  notify: (this: TThis, next: T) => void,
) =>
  __DEV__
    ? function (this: TThis, next: T) {
        raiseIf(
          !this[SchedulerLike_inContinuation],
          "Observer can only be notified from within a Scheduler continuation",
        );
        raiseIf(this[DisposableLike_isDisposed], "Observer is disposed");

        call(notify, this, next);
      }
    : notify;

export default Observer_assertObserverState;

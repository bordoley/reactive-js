import { __DEV__ } from "../../../__internal__/constants.js";
import { call, raiseIf } from "../../../functions.js";
import {
  DisposableLike_isDisposed,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike_inContinuation,
} from "../../../utils.js";

const Observer_assertObserverState = <TThis extends ObserverLike<T>, T>(
  notify: (this: TThis, next: T) => void,
) =>
  __DEV__
    ? {
        [ObserverLike_notify](this: TThis, next: T) {
          raiseIf(
            !this[SchedulerLike_inContinuation],
            "Observer can only be notified from within a Scheduler continuation",
          );
          raiseIf(this[DisposableLike_isDisposed], "Observer is disposed");

          call(notify, this, next);
        },
      }[ObserverLike_notify]
    : notify;

export default Observer_assertObserverState;

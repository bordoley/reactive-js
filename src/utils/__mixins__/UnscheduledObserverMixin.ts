import { Mixin, mix, props, proto } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import {
  ObserverLike,
  ObserverLike_mustNotifyInSchedulerContinuation,
} from "../../utils.js";

type TReturn<T> = Pick<
  ObserverLike<T>,
  typeof ObserverLike_mustNotifyInSchedulerContinuation
>;

const UnscheduledObserverMixin: <T>() => Mixin<TReturn<T>> = /*@__PURE__*/ (<
  T,
>() => {
  return returns(
    mix(
      function UnscheduledObserverMixin(this: TReturn<T>): TReturn<T> {
        return this;
      },
      props(),
      proto<TReturn<T>>({
        [ObserverLike_mustNotifyInSchedulerContinuation]: false,
      }),
    ),
  );
})();

export default UnscheduledObserverMixin;

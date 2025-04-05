import {
  Mixin1,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import {
  DisposableLike,
  ObserverLike,
  ObserverLike_mustNotifyInSchedulerContinuation,
  SchedulerLike,
} from "../../utils.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";

type TReturn<T> = Pick<
  ObserverLike<T>,
  | typeof ObserverLike_mustNotifyInSchedulerContinuation
  | keyof Omit<SchedulerLike, keyof DisposableLike>
>;

const DelegatingObserverSchedulerMixin: <T>() => Mixin1<
  TReturn<T>,
  ObserverLike
> = /*@__PURE__*/ (<T>() => {
  type TProperties = Mutable<
    Pick<ObserverLike<T>, typeof ObserverLike_mustNotifyInSchedulerContinuation>
  >;

  return returns(
    mix(
      include(DelegatingSchedulerMixin),
      function DelegatingObserverSchedulerMixin(
        this: TProperties,
        delegate: ObserverLike,
      ) {
        init(DelegatingSchedulerMixin, this, delegate);
        this[ObserverLike_mustNotifyInSchedulerContinuation] =
          delegate[ObserverLike_mustNotifyInSchedulerContinuation];
        return this;
      },
      props<TProperties>({
        [ObserverLike_mustNotifyInSchedulerContinuation]: true,
      }),
    ),
  );
})();

export default DelegatingObserverSchedulerMixin;

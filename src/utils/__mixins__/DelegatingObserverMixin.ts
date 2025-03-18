import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike, ObserverLike } from "../../utils.js";
import DelegatingConsumerMixin, {
  DelegatingConsumerLike,
} from "./DelegatingConsumerMixin.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";

export interface DelegatingObserverLike<
  T,
  TDelegateObserver extends ObserverLike<T> = ObserverLike<T>,
> extends DelegatingConsumerLike<T, TDelegateObserver>,
    ObserverLike<T> {}

const DelegatingObserverMixin: <
  T,
  TDelegateObserver extends ObserverLike<T> = ObserverLike<T>,
>() => Mixin1<
  DelegatingObserverLike<T, TDelegateObserver>,
  TDelegateObserver,
  Pick<DelegatingObserverLike<T, TDelegateObserver>, keyof DisposableLike>
> = /*@__PURE__*/ (<
  T,
  TDelegateObserver extends ObserverLike<T> = ObserverLike<T>,
>() => {
  return returns(
    mix(
      include(DelegatingConsumerMixin(), DelegatingSchedulerMixin),
      function DelegatingObserverMixin(
        this: DisposableLike,
        delegate: TDelegateObserver,
      ): DelegatingObserverLike<T, TDelegateObserver> {
        init(DelegatingConsumerMixin<T, TDelegateObserver>(), this, delegate);
        init(DelegatingSchedulerMixin, this, delegate);
        return this;
      },
    ),
  );
})();

export default DelegatingObserverMixin;

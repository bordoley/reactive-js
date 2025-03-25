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

type TReturn<
  T,
  TDelegateObserver extends ObserverLike<T> = ObserverLike<T>,
> = Omit<DelegatingObserverLike<T, TDelegateObserver>, keyof DisposableLike>;

const DelegatingObserverMixin: <
  T,
  TDelegateObserver extends ObserverLike<T> = ObserverLike<T>,
>() => Mixin1<TReturn<T, TDelegateObserver>, TDelegateObserver> =
  /*@__PURE__*/ (<
    T,
    TDelegateObserver extends ObserverLike<T> = ObserverLike<T>,
  >() => {
    return returns(
      mix(
        include(DelegatingConsumerMixin(), DelegatingSchedulerMixin),
        function DelegatingObserverMixin(
          this: unknown,
          delegate: TDelegateObserver,
        ): TReturn<T, TDelegateObserver> {
          init(DelegatingConsumerMixin<T, TDelegateObserver>(), this, delegate);
          init(DelegatingSchedulerMixin, this, delegate);
          return this;
        },
      ),
    );
  })();

export default DelegatingObserverMixin;

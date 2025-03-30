import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { DisposableLike, ObserverLike } from "../../utils.js";
import DelegatingConsumerMixin, {
  DelegatingConsumerLike,
} from "./DelegatingConsumerMixin.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";

export interface DelegatingObserverLike<
  T,
  TOut = T,
  TDelegateObserver extends ObserverLike<TOut> = ObserverLike<TOut>,
> extends DelegatingConsumerLike<T, TOut, TDelegateObserver>,
    ObserverLike<T> {}

type TReturn<
  T,
  TOut = T,
  TDelegateObserver extends ObserverLike<TOut> = ObserverLike<TOut>,
> = Omit<
  DelegatingObserverLike<T, TOut, TDelegateObserver>,
  keyof DisposableLike
>;

const DelegatingObserverMixin: <
  T,
  TOut = T,
  TDelegateObserver extends ObserverLike<TOut> = ObserverLike<TOut>,
>() => Mixin1<TReturn<T, TOut, TDelegateObserver>, TDelegateObserver> =
  /*@__PURE__*/ (<
    T,
    TOut = T,
    TDelegateObserver extends ObserverLike<TOut> = ObserverLike<TOut>,
  >() => {
    return returns(
      mix(
        include(DelegatingConsumerMixin(), DelegatingSchedulerMixin),
        function DelegatingObserverMixin(
          this: unknown,
          delegate: TDelegateObserver,
        ): TReturn<T, TOut, TDelegateObserver> {
          init(
            DelegatingConsumerMixin<T, TOut, TDelegateObserver>(),
            this,
            delegate,
          );
          init(DelegatingSchedulerMixin, this, delegate);
          return this;
        },
      ),
    );
  })();

export default DelegatingObserverMixin;

import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin1,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DelegatingMulticastObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ReplayableLike_buffer,
} from "../../../rx.js";

export type TDelegatingMulticastObservableReturn<
  T,
  TMulticastObservable extends MulticastObservableLike<T>,
> = MulticastObservableLike<T> & {
  [DelegatingMulticastObservableMixin_delegate]: TMulticastObservable;
};

const MulticastObservable_delegatingMixin: <
  T,
  TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>,
>() => Mixin1<
  TDelegatingMulticastObservableReturn<T, TMulticastObservable>,
  TMulticastObservable
> = /*@__PURE__*/ (<
  T,
  TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>,
>() => {
  type TProperties = {
    [DelegatingMulticastObservableMixin_delegate]: TMulticastObservable;
  };
  return returns(
    mix(
      function DelegatingMulticastObservableMixin(
        instance: MulticastObservableLike<T> & TProperties,
        delegate: TMulticastObservable,
      ): TDelegatingMulticastObservableReturn<T, TMulticastObservable> {
        instance[DelegatingMulticastObservableMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingMulticastObservableMixin_delegate]: none,
      }),
      {
        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        get [ReplayableLike_buffer]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ReplayableLike_buffer];
        },

        get [ObservableLike_isEnumerable]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
        },

        get [ObservableLike_isRunnable]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isRunnable];
        },

        [ObservableLike_observe](
          this: DelegatingLike<MulticastObservableLike<T>>,
          observer: ObserverLike<T>,
        ) {
          this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
      },
    ),
  );
})();

export default MulticastObservable_delegatingMixin;

import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
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

const MulticastObservable_delegatingMixin: <T>() => Mixin1<
  MulticastObservableLike<T>,
  MulticastObservableLike<T>
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
      ): MulticastObservableLike<T> {
        instance[DelegatingMulticastObservableMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingMulticastObservableMixin_delegate]: none,
      }),
      {
        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<TProperties>(this);
          return this[DelegatingMulticastObservableMixin_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        get [ReplayableLike_buffer]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingMulticastObservableMixin_delegate][
            ReplayableLike_buffer
          ];
        },

        get [ObservableLike_isEnumerable]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingMulticastObservableMixin_delegate][
            ObservableLike_isEnumerable
          ];
        },

        get [ObservableLike_isRunnable]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingMulticastObservableMixin_delegate][
            ObservableLike_isRunnable
          ];
        },

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          this[DelegatingMulticastObservableMixin_delegate][
            ObservableLike_observe
          ](observer);
        },
      },
    ),
  );
})();

export default MulticastObservable_delegatingMixin;

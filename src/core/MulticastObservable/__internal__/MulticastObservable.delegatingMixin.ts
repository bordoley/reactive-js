import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingMulticastObservableMixin_delegate } from "../../../__internal__/symbols.js";
import {
  MulticastObservableLike,
  MulticastObservableLike_buffer,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../core.js";
import { none, returns, unsafeCast } from "../../../functions.js";

const MulticastObservable_delegatingMixin: <T>() => Mixin1<
  MulticastObservableLike<T>,
  MulticastObservableLike<T>
> = /*@__PURE__*/ (<
  T,
  TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>,
>() => {
  type TProperties = {
    [__DelegatingMulticastObservableMixin_delegate]: TMulticastObservable;
  };
  return returns(
    mix(
      function DelegatingMulticastObservableMixin(
        instance: MulticastObservableLike<T> & TProperties,
        delegate: TMulticastObservable,
      ): MulticastObservableLike<T> {
        instance[__DelegatingMulticastObservableMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [__DelegatingMulticastObservableMixin_delegate]: none,
      }),
      {
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        get [MulticastObservableLike_buffer]() {
          unsafeCast<TProperties>(this);
          return this[__DelegatingMulticastObservableMixin_delegate][
            MulticastObservableLike_buffer
          ];
        },

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          this[__DelegatingMulticastObservableMixin_delegate][
            ObservableLike_observe
          ](observer);
        },
      },
    ),
  );
})();

export default MulticastObservable_delegatingMixin;

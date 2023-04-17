import { Mixin1, mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingMulticastObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import {
  MulticastObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import { ReplayableLike_buffer } from "../../../util.js";

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
        get [ReplayableLike_buffer]() {
          unsafeCast<TProperties>(this);
          return this[__DelegatingMulticastObservableMixin_delegate][
            ReplayableLike_buffer
          ];
        },

        get [ObservableLike_isEnumerable]() {
          unsafeCast<TProperties>(this);
          return this[__DelegatingMulticastObservableMixin_delegate][
            ObservableLike_isEnumerable
          ];
        },

        get [ObservableLike_isRunnable]() {
          unsafeCast<TProperties>(this);
          return this[__DelegatingMulticastObservableMixin_delegate][
            ObservableLike_isRunnable
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

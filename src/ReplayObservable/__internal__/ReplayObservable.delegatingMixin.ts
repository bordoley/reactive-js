import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import { __DelegatingReplayObservableMixin_delegate } from "../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../functions.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ReplayObservableLike,
  ReplayObservableLike_buffer,
} from "../../types.js";

const ReplayObservable_delegatingMixin: <T>() => Mixin1<
  ReplayObservableLike<T>,
  ReplayObservableLike<T>
> = /*@__PURE__*/ (<
  T,
  TReplayObservable extends ReplayObservableLike<T> = ReplayObservableLike<T>,
>() => {
  type TProperties = {
    [__DelegatingReplayObservableMixin_delegate]: TReplayObservable;
  };
  return returns(
    mix(
      function DelegatingReplayObservableMixin(
        instance: ReplayObservableLike<T> & TProperties,
        delegate: TReplayObservable,
      ): ReplayObservableLike<T> {
        instance[__DelegatingReplayObservableMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [__DelegatingReplayObservableMixin_delegate]: none,
      }),
      {
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        get [ReplayObservableLike_buffer]() {
          unsafeCast<TProperties>(this);
          return this[__DelegatingReplayObservableMixin_delegate][
            ReplayObservableLike_buffer
          ];
        },

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          this[__DelegatingReplayObservableMixin_delegate][
            ObservableLike_observe
          ](observer);
        },
      },
    ),
  );
})();

export default ReplayObservable_delegatingMixin;

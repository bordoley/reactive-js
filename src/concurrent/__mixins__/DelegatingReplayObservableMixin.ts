import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ReplayObservableLike,
  ReplayObservableLike_buffer,
} from "../../concurrent.js";
import { none, returns } from "../../functions.js";

const DelegatingReplayObservableMixin: <T>() => Mixin1<
  ReplayObservableLike<T>,
  ReplayObservableLike<T>
> = /*@__PURE__*/ (<
  T,
  TReplayObservable extends ReplayObservableLike<T> = ReplayObservableLike<T>,
>() => {
  const DelegatingReplayObservableMixin_delegate = Symbol(
    "DelegatingReplayObservableMixin_delegate",
  );
  type TProperties = {
    [DelegatingReplayObservableMixin_delegate]: TReplayObservable;
  };
  return returns(
    mix(
      function DelegatingReplayObservableMixin(
        instance: ReplayObservableLike<T> & TProperties,
        delegate: TReplayObservable,
      ): ReplayObservableLike<T> {
        instance[DelegatingReplayObservableMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingReplayObservableMixin_delegate]: none,
      }),
      {
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isPure]: true as const,
        [ObservableLike_isRunnable]: false as const,

        get [ReplayObservableLike_buffer]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingReplayObservableMixin_delegate][
            ReplayObservableLike_buffer
          ];
        },

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          this[DelegatingReplayObservableMixin_delegate][
            ObservableLike_observe
          ](observer);
        },
      },
    ),
  );
})();

export default DelegatingReplayObservableMixin;

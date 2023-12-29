import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import {
  MulticastObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../concurrent.js";
import { none, returns } from "../../functions.js";

const DelegatingMulticastObservableMixin: <T>() => Mixin1<
  MulticastObservableLike<T>,
  MulticastObservableLike<T>
> = /*@__PURE__*/ (<
  T,
  TReplayObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>,
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
        instance: MulticastObservableLike<T> & TProperties,
        delegate: TReplayObservable,
      ): MulticastObservableLike<T> {
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

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          this[DelegatingReplayObservableMixin_delegate][
            ObservableLike_observe
          ](observer);
        },
      },
    ),
  );
})();

export default DelegatingMulticastObservableMixin;

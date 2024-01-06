import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import {
  MulticastObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
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
  const DelegatingMulticastObservableMixin_delegate = Symbol(
    "DelegatingMulticastObservableMixin_delegate",
  );
  type TProperties = {
    [DelegatingMulticastObservableMixin_delegate]: TReplayObservable;
  };
  return returns(
    mix(
      function DelegatingMulticastObservableMixin(
        instance: MulticastObservableLike<T> & TProperties,
        delegate: TReplayObservable,
      ): MulticastObservableLike<T> {
        instance[DelegatingMulticastObservableMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingMulticastObservableMixin_delegate]: none,
      }),
      {
        [ObservableLike_isDeferred]: false as const,
        [ObservableLike_isMulticasted]: true as const,
        [ObservableLike_isPure]: true as const,
        [ObservableLike_isRunnable]: false as const,

        [ObservableLike_observe](this: TProperties, observer: ObserverLike<T>) {
          this[DelegatingMulticastObservableMixin_delegate][
            ObservableLike_observe
          ](observer);
        },
      },
    ),
  );
})();

export default DelegatingMulticastObservableMixin;

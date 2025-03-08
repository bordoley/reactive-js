import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  MulticastObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../computations.js";
import { none, returns } from "../../functions.js";

const DelegatingMulticastObservableMixin: <T>() => Mixin1<
  MulticastObservableLike<T>,
  MulticastObservableLike<T>
> = /*@__PURE__*/ (<
  T,
  TReplayObservable extends
    MulticastObservableLike<T> = MulticastObservableLike<T>,
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
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isSynchronous]: false as const,

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

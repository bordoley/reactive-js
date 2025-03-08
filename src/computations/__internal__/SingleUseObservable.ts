import {
  Mutable,
  mixInstanceFactory,
  props,
} from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  ObservableLike_observe,
  PureDeferredObservableLike,
} from "../../computations.js";
import { Optional, isSome, none, raiseIf } from "../../functions.js";
import { ObserverLike } from "../../utils.js";

export const SingleUseObservableLike_observer = Symbol(
  "SingleUseObservableLike_observer",
);

export interface SingleUseObservableLike<out T>
  extends PureDeferredObservableLike<T> {
  [SingleUseObservableLike_observer]: Optional<ObserverLike<T>>;
}

export const create: <T>() => SingleUseObservableLike<T> = (<T>() => {
  type TProperties = {
    [SingleUseObservableLike_observer]: Optional<ObserverLike<T>>;
  };

  return mixInstanceFactory(
    function SingleUseObservable(
      instance: SingleUseObservableLike<T> & Mutable<TProperties>,
    ): SingleUseObservableLike<T> {
      return instance;
    },
    props<TProperties>({
      [SingleUseObservableLike_observer]: none,
    }),
    {
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      [ObservableLike_observe](
        this: TProperties & SingleUseObservableLike<T>,
        observer: ObserverLike<T>,
      ) {
        raiseIf(
          isSome(this[SingleUseObservableLike_observer]),
          "SingleUseObservable already subscribed to.",
        );

        this[SingleUseObservableLike_observer] = observer;
      },
    },
  );
})();

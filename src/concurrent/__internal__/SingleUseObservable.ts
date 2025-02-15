import {
  Mutable,
  mixInstanceFactory,
  props,
} from "../../__internal__/mixins.js";
import {
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PureDeferredObservableLike,
} from "../../concurrent.js";
import { Optional, isSome, none, raiseIf } from "../../functions.js";

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
      [ObservableLike_isDeferred]: true as const,
      [ObservableLike_isPure]: true as const,
      [ObservableLike_isRunnable]: false as const,

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

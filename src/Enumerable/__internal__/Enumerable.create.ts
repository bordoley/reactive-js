import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Factory, none, pipe } from "../../functions.js";
import {
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumeratorLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";
import Enumerable_observeWith from "./Enumerable.observeWith.js";

const Enumerable_create: <T>(
  enumerate: Factory<EnumeratorLike<T>>,
) => EnumerableLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [EnumerableLike_enumerate]: Factory<EnumeratorLike<T>>;
  };

  return createInstanceFactory(
    mix(
      function CreateObservable(
        instance: Pick<
          EnumerableLike<T>,
          | typeof ObservableLike_observe
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isDeferred
          | typeof ObservableLike_isRunnable
        > &
          Mutable<TProperties>,
        enumerate: Factory<EnumeratorLike<T>>,
      ): EnumerableLike<T> {
        instance[EnumerableLike_enumerate] = enumerate;

        return instance;
      },
      props<TProperties>({
        [EnumerableLike_enumerate]: none,
      }),
      {
        [ObservableLike_isEnumerable]: true as const,
        [ObservableLike_isDeferred]: true as const,
        [ObservableLike_isRunnable]: true as const,

        [ObservableLike_observe](
          this: TProperties & EnumerableLike<T>,
          observer: ObserverLike,
        ) {
          pipe(this, Enumerable_observeWith(observer));
        },
      },
    ),
  );
})();

export default Enumerable_create;

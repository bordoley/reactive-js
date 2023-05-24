import Enumerable_observeWith from "../../Enumerable/__internal__/Enumerable.observeWith.js";
import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Factory, none, pipe } from "../../functions.js";
import {
  EnumerableBaseLike,
  EnumerableLike,
  EnumerableLike_enumerate,
  EnumerableWithSideEffectsLike,
  EnumeratorLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";

interface EnumerableBaseCreate {
  create<T>(
    enumerate: Factory<EnumeratorLike<T>>,
    isPure: true,
  ): EnumerableLike<T>;
  create<T>(
    enumerate: Factory<EnumeratorLike<T>>,
    isPure: false,
  ): EnumerableWithSideEffectsLike<T>;
  create<T>(
    enumerate: Factory<EnumeratorLike<T>>,
    isPure: boolean,
  ): EnumerableBaseLike<T>;
}

const EnumerableBase_create: EnumerableBaseCreate["create"] = /*@__PURE__*/ (<
  T,
>() => {
  type TProperties = {
    readonly [EnumerableLike_enumerate]: Factory<EnumeratorLike<T>>;
    readonly [ObservableLike_isPure]: boolean;
  };

  return createInstanceFactory(
    mix(
      function CreateObservable(
        instance: Pick<
          EnumerableBaseLike<T>,
          | typeof ObservableLike_observe
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isDeferred
          | typeof ObservableLike_isRunnable
        > &
          Mutable<TProperties>,
        enumerate: Factory<EnumeratorLike<T>>,
        isPure: boolean,
      ): EnumerableBaseLike<T> {
        instance[EnumerableLike_enumerate] = enumerate;
        instance[ObservableLike_isPure] = isPure;

        return instance;
      },
      props<TProperties>({
        [EnumerableLike_enumerate]: none,
        [ObservableLike_isPure]: false,
      }),
      {
        [ObservableLike_isEnumerable]: true as const,
        [ObservableLike_isDeferred]: true as const,
        [ObservableLike_isRunnable]: true as const,

        [ObservableLike_observe](
          this: TProperties & EnumerableBaseLike<T>,
          observer: ObserverLike,
        ) {
          pipe(this, Enumerable_observeWith(observer));
        },
      },
    ),
  );
})() as EnumerableBaseCreate["create"];

export default EnumerableBase_create;

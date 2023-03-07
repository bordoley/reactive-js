import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { SideEffect1, error, none } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";

const Observable_create: <T>(
  f: SideEffect1<ObserverLike>,
  isEnumerable?: boolean,
  isRunnable?: boolean,
) => ObservableLike<T> = /*@__PURE__*/ (() => {
  const CreateObservable_effect = Symbol("CreateObservable_effect");

  type TProperties = {
    readonly [CreateObservable_effect]: SideEffect1<ObserverLike>;
    readonly [ObservableLike_isEnumerable]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  };

  return createInstanceFactory(
    mix(
      function CreateObservable(
        instance: Pick<ObservableLike, typeof ObservableLike_observe> &
          Mutable<TProperties>,
        effect: SideEffect1<ObserverLike>,
        isEnumerable = false,
        isRunnable = false,
      ): ObservableLike {
        instance[CreateObservable_effect] = effect;
        instance[ObservableLike_isEnumerable] = isEnumerable;
        instance[ObservableLike_isRunnable] = isEnumerable || isRunnable;

        return instance;
      },
      props<TProperties>({
        [CreateObservable_effect]: none,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isEnumerable]: false,
      }),
      {
        [ObservableLike_observe](this: TProperties, observer: ObserverLike) {
          try {
            this[CreateObservable_effect](observer);
          } catch (e) {
            observer[DisposableLike_dispose](error(e));
          }
        },
      },
    ),
  );
})();

export default Observable_create;

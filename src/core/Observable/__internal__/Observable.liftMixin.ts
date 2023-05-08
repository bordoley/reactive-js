import {
  LiftedLike,
  LiftedLike_operators,
  LiftedLike_source,
} from "../../../__internal__/core.js";
import { Mixin4, mix, props } from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../core.js";
import {
  Function1,
  bindMethod,
  none,
  pipeUnsafe,
  returns,
} from "../../../functions.js";

const Observable_liftMixin: <TIn, TOut>() => Mixin4<
  LiftedLike<ObservableLike<TIn>, ObserverLike> & ObservableLike<TOut>,
  ObservableLike<TIn>,
  readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  boolean,
  boolean
> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedLike_source]: ObservableLike<TIn>;
    [LiftedLike_operators]: readonly Function1<
      ObserverLike<any>,
      ObserverLike<any>
    >[];
    [ObservableLike_isEnumerable]: boolean;
    [ObservableLike_isRunnable]: boolean;
  };
  return returns(
    mix(
      function LiftedObservable(
        instance: TProperties & ObservableLike<TOut>,
        source: ObservableLike<TIn>,
        ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
        isEnumerable: boolean,
        isRunnable: boolean,
      ): LiftedLike<ObservableLike<TIn>, ObserverLike> & ObservableLike<TOut> {
        instance[LiftedLike_source] = source;
        instance[LiftedLike_operators] = ops;
        instance[ObservableLike_isEnumerable] = isEnumerable;
        instance[ObservableLike_isRunnable] = isRunnable;

        return instance;
      },
      props<TProperties>({
        [LiftedLike_source]: none,
        [LiftedLike_operators]: none,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
      }),
      {
        [ObservableLike_observe](
          this: TProperties,
          observer: ObserverLike<TOut>,
        ) {
          pipeUnsafe(
            observer,
            ...this[LiftedLike_operators],
            bindMethod(this[LiftedLike_source], ObservableLike_observe),
          );
        },
      },
    ),
  );
})();

export default Observable_liftMixin;

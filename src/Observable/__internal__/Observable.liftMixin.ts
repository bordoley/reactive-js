import { Mixin3, mix, props } from "../../__internal__/mixins.js";
import {
  LiftedLike,
  LiftedLike_operators,
  LiftedLike_source,
} from "../../__internal__/types.js";
import {
  Function1,
  bindMethod,
  none,
  pipeUnsafe,
  returns,
} from "../../functions.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";

const Observable_liftMixin: <TIn, TOut>() => Mixin3<
  LiftedLike<ObservableLike<TIn>, ObserverLike> & ObservableLike<TOut>,
  ObservableLike<TIn>,
  readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  }
> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedLike_source]: ObservableLike<TIn>;
    [LiftedLike_operators]: readonly Function1<
      ObserverLike<any>,
      ObserverLike<any>
    >[];
    [ObservableLike_isDeferred]: boolean;
    [ObservableLike_isRunnable]: boolean;
  };

  return returns(
    mix(
      function LiftedObservable(
        instance: TProperties & ObservableLike<TOut>,
        source: ObservableLike<TIn>,
        ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
        config: {
          readonly [ObservableLike_isDeferred]: boolean;
          readonly [ObservableLike_isRunnable]: boolean;
        },
      ): LiftedLike<ObservableLike<TIn>, ObserverLike> & ObservableLike<TOut> {
        instance[LiftedLike_source] = source;
        instance[LiftedLike_operators] = ops;

        instance[ObservableLike_isDeferred] = config[ObservableLike_isDeferred];
        instance[ObservableLike_isRunnable] = config[ObservableLike_isRunnable];

        return instance;
      },
      props<TProperties>({
        [LiftedLike_source]: none,
        [LiftedLike_operators]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isRunnable]: false,
      }),
      {
        [ObservableLike_isEnumerable]: false as const,

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

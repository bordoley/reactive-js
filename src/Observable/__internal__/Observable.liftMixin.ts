import { __DEV__ } from "../../__internal__/constants.js";
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
  raiseWithDebugMessage,
  returns,
} from "../../functions.js";
import {
  ObservableBaseLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";

const Observable_liftMixin: <TIn, TOut>() => Mixin3<
  LiftedLike<ObservableBaseLike<TIn>, ObserverLike> &
    ObservableBaseLike<TOut> & {
      [ObservableLike_isEnumerable]: false;
    },
  ObservableBaseLike<TIn>,
  readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isPure]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  },
  unknown,
  Pick<ObservableBaseLike<TOut>, typeof ObservableLike_observe> & {
    [ObservableLike_isEnumerable]: false;
  }
> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedLike_source]: ObservableBaseLike<TIn>;
    [LiftedLike_operators]: readonly Function1<
      ObserverLike<any>,
      ObserverLike<any>
    >[];
    [ObservableLike_isDeferred]: boolean;
    [ObservableLike_isPure]: boolean;
    [ObservableLike_isRunnable]: boolean;
  };

  return returns(
    mix(
      function LiftedObservable(
        instance: TProperties &
          ObservableBaseLike<TOut> & {
            [ObservableLike_isEnumerable]: false;
          },
        source: ObservableBaseLike<TIn>,
        ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
        config: Pick<
          ObservableBaseLike,
          | typeof ObservableLike_isDeferred
          | typeof ObservableLike_isPure
          | typeof ObservableLike_isRunnable
        >,
      ): LiftedLike<ObservableBaseLike<TIn>, ObserverLike> &
        ObservableBaseLike<TOut> & {
          [ObservableLike_isEnumerable]: false;
        } {
        instance[LiftedLike_source] = source;
        instance[LiftedLike_operators] = ops;

        const configRunnable = config[ObservableLike_isRunnable] ?? false;
        const configDeferred = config[ObservableLike_isDeferred] ?? false;
        const configPure = config[ObservableLike_isPure] ?? false;

        if (__DEV__) {
          if (configRunnable && !configDeferred) {
            raiseWithDebugMessage(
              "Attempting to create a non-deferred, runnable observable, which is an illegal state",
            );
          } else if (!configDeferred && !configPure) {
            raiseWithDebugMessage(
              "Attempting to create a non-deferred, not-pure observable which is an illegal state",
            );
          }
        }

        instance[ObservableLike_isRunnable] = configRunnable;
        instance[ObservableLike_isDeferred] = configDeferred;
        instance[ObservableLike_isPure] = configPure;

        return instance;
      },
      props<TProperties>({
        [LiftedLike_source]: none,
        [LiftedLike_operators]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
      }),
      {
        [ObservableLike_isPure]: false,
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

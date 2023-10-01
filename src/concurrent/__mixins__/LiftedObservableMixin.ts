import { __DEV__ } from "../../__internal__/constants.js";
import { Mixin3, mix, props } from "../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../concurrent.js";
import {
  Function1,
  bindMethod,
  none,
  pipeUnsafe,
  raiseWithDebugMessage,
  returns,
} from "../../functions.js";

export const LiftedObservableLike_source = Symbol(
  "LiftedObservableMixin_source",
);
export const LiftedObservableLike_operators = Symbol(
  "LiftedObservableMixin_operators",
);

export interface LiftedObservableLike<TIn, TOut> extends ObservableLike<TOut> {
  [LiftedObservableLike_source]: ObservableLike<TIn>;
  [LiftedObservableLike_operators]: readonly Function1<
    ObserverLike<any>,
    ObserverLike<any>
  >[];
}

const LiftedObservableMixin: <TIn, TOut>() => Mixin3<
  LiftedObservableLike<TIn, TOut>,
  ObservableLike<TIn>,
  readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
  {
    readonly [ObservableLike_isDeferred]: boolean;
    readonly [ObservableLike_isPure]: boolean;
    readonly [ObservableLike_isRunnable]: boolean;
  },
  unknown,
  Pick<ObservableLike<TOut>, typeof ObservableLike_observe>
> = /*@__PURE__*/ (<TIn, TOut>() => {
  type TProperties = {
    [LiftedObservableLike_source]: ObservableLike<TIn>;
    [LiftedObservableLike_operators]: readonly Function1<
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
        instance: TProperties & ObservableLike<TOut>,
        source: ObservableLike<TIn>,
        ops: readonly Function1<ObserverLike<any>, ObserverLike<any>>[],
        config: Pick<
          ObservableLike,
          | typeof ObservableLike_isDeferred
          | typeof ObservableLike_isPure
          | typeof ObservableLike_isRunnable
        >,
      ): LiftedObservableLike<TIn, TOut> {
        instance[LiftedObservableLike_source] = source;
        instance[LiftedObservableLike_operators] = ops;

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
        [LiftedObservableLike_source]: none,
        [LiftedObservableLike_operators]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
      }),
      {
        [ObservableLike_observe](
          this: TProperties,
          observer: ObserverLike<TOut>,
        ) {
          pipeUnsafe(
            observer,
            ...this[LiftedObservableLike_operators],
            bindMethod(
              this[LiftedObservableLike_source],
              ObservableLike_observe,
            ),
          );
        },
      },
    ),
  );
})();

export default LiftedObservableMixin;

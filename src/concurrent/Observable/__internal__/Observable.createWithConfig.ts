import { __DEV__ } from "../../../__internal__/constants.js";
import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DeferredSideEffectsObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PureRunnableLike,
  RunnableWithSideEffectsLike,
} from "../../../concurrent.js";
import { SideEffect1, error, none, raiseIf } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";

interface ObservableCreateWithConfig {
  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      PureRunnableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): PureRunnableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      RunnableWithSideEffectsLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): RunnableWithSideEffectsLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      DeferredSideEffectsObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): DeferredSideEffectsObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      MulticastObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): MulticastObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      ObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): ObservableLike<T>;
}
const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"] =
  /*@__PURE__*/ (() => {
    const CreateObservable_effect = Symbol("CreateObservable_effect");

    type TProperties = {
      readonly [CreateObservable_effect]: SideEffect1<ObserverLike>;
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ObservableLike_isPure]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    };

    return createInstanceFactory(
      mix(
        function CreateObservable(
          instance: Pick<ObservableLike, typeof ObservableLike_observe> &
            Mutable<TProperties>,
          effect: SideEffect1<ObserverLike>,
          config: {
            readonly [ObservableLike_isDeferred]: boolean;
            readonly [ObservableLike_isPure]: boolean;
            readonly [ObservableLike_isRunnable]: boolean;
          },
        ): ObservableLike {
          instance[CreateObservable_effect] = effect;

          const configRunnable = config[ObservableLike_isRunnable] ?? false;
          const configDeferred = config[ObservableLike_isDeferred] ?? false;
          const configPure = config[ObservableLike_isPure] ?? false;

          if (__DEV__) {
            raiseIf(
              configRunnable && !configDeferred,
              "Attempting to create a non-deferred, runnable observable, which is an illegal state",
            );

            raiseIf(
              !configDeferred && !configPure,
              "Attempting to create a non-deferred, not-pure observable which is an illegal state",
            );
          }

          instance[ObservableLike_isRunnable] = configRunnable;
          instance[ObservableLike_isDeferred] = configDeferred;
          instance[ObservableLike_isPure] = configPure;

          return instance;
        },
        props<TProperties>({
          [CreateObservable_effect]: none,
          [ObservableLike_isDeferred]: false,
          [ObservableLike_isPure]: false,
          [ObservableLike_isRunnable]: false,
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
    ) as ObservableCreateWithConfig["createWithConfig"];
  })();

export default Observable_createWithConfig;

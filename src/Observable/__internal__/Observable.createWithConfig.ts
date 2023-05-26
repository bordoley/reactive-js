import { __DEV__ } from "../../__internal__/constants.js";
import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __CreateObservable_effect } from "../../__internal__/symbols.js";
import {
  SideEffect1,
  error,
  none,
  raiseWithDebugMessage,
} from "../../functions.js";
import {
  DeferredObservableLike,
  DisposableLike_dispose,
  MulticastObservableLike,
  ObservableBaseLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  RunnableLike,
  RunnableWithSideEffectsLike,
} from "../../types.js";

interface ObservableCreateWithConfig {
  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      RunnableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): RunnableLike<T>;

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
      DeferredObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): DeferredObservableLike<T>;

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
      ObservableBaseLike,
      | typeof ObservableLike_isDeferred
      | typeof ObservableLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): ObservableBaseLike<T>;
}
const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"] =
  /*@__PURE__*/ (() => {
    type TProperties = {
      readonly [__CreateObservable_effect]: SideEffect1<ObserverLike>;
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ObservableLike_isPure]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    };

    return createInstanceFactory(
      mix(
        function CreateObservable(
          instance: Pick<
            ObservableBaseLike,
            typeof ObservableLike_observe | typeof ObservableLike_isEnumerable
          > &
            Mutable<TProperties>,
          effect: SideEffect1<ObserverLike>,
          config: {
            readonly [ObservableLike_isDeferred]: boolean;
            readonly [ObservableLike_isPure]: boolean;
            readonly [ObservableLike_isRunnable]: boolean;
          },
        ): ObservableBaseLike {
          instance[__CreateObservable_effect] = effect;

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
          [__CreateObservable_effect]: none,
          [ObservableLike_isDeferred]: false,
          [ObservableLike_isPure]: false,
          [ObservableLike_isRunnable]: false,
        }),
        {
          [ObservableLike_isEnumerable]: false as const,
          [ObservableLike_observe](this: TProperties, observer: ObserverLike) {
            try {
              this[__CreateObservable_effect](observer);
            } catch (e) {
              observer[DisposableLike_dispose](error(e));
            }
          },
        },
      ),
    ) as ObservableCreateWithConfig["createWithConfig"];
  })();

export default Observable_createWithConfig;

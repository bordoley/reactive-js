import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { __CreateObservable_effect } from "../../__internal__/symbols.js";
import { SideEffect1, error, none } from "../../functions.js";
import {
  DeferredObservableLike,
  DisposableLike_dispose,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  RunnableLike,
} from "../../types.js";

interface ObservableCreateWithConfig {
  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isRunnable]: true;
    },
  ): RunnableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: true;
    },
  ): DeferredObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isPure]: true;
    },
  ): MulticastObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ObservableLike_isPure]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    },
  ): ObservableLike<T>;
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
            ObservableLike,
            typeof ObservableLike_observe | typeof ObservableLike_isEnumerable
          > &
            Mutable<TProperties>,
          effect: SideEffect1<ObserverLike>,
          config: {
            readonly [ObservableLike_isDeferred]?: boolean;
            readonly [ObservableLike_isPure]?: boolean;
            readonly [ObservableLike_isRunnable]?: boolean;
          },
        ): ObservableLike {
          instance[__CreateObservable_effect] = effect;

          const configRunnable = config[ObservableLike_isRunnable] ?? false;
          const configDeferred = config[ObservableLike_isDeferred] ?? false;
          const configPure = config[ObservableLike_isPure] ?? false;

          instance[ObservableLike_isDeferred] =
            !configPure && (configRunnable || configDeferred);

          instance[ObservableLike_isRunnable] = configRunnable && !configPure;

          instance[ObservableLike_isPure] =
            configPure && !configRunnable && !configDeferred;

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

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
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  RunnableLike,
} from "../../types.js";

interface ObservableCreateWithConfig {
  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: true;
      readonly [ObservableLike_isRunnable]: true;
    },
  ): RunnableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: true;
      readonly [ObservableLike_isRunnable]: false;
    },
  ): DeferredObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: false;
      readonly [ObservableLike_isRunnable]: false;
    },
  ): MulticastObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    },
  ): ObservableLike<T>;
}
const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"] =
  /*@__PURE__*/ (() => {
    type TProperties = {
      readonly [__CreateObservable_effect]: SideEffect1<ObserverLike>;
      readonly [ObservableLike_isDeferred]: boolean;
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
            readonly [ObservableLike_isDeferred]: boolean;
            readonly [ObservableLike_isRunnable]: boolean;
          },
        ): ObservableLike {
          instance[__CreateObservable_effect] = effect;
          instance[ObservableLike_isDeferred] =
            config[ObservableLike_isDeferred] ||
            config[ObservableLike_isRunnable];
          instance[ObservableLike_isRunnable] =
            config[ObservableLike_isRunnable];

          return instance;
        },
        props<TProperties>({
          [__CreateObservable_effect]: none,
          [ObservableLike_isDeferred]: false,
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

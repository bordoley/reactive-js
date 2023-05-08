import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __CreateObservable_effect } from "../../../__internal__/symbols.js";
import {
  DeferredObservableLike,
  DisposableLike_dispose,
  EnumerableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  RunnableLike,
} from "../../../core.js";
import { SideEffect1, error, none } from "../../../functions.js";

interface ObservableCreateWithConfig {
  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: true;
      readonly [ObservableLike_isEnumerable]: true;
      readonly [ObservableLike_isRunnable]: true;
    },
  ): EnumerableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: true;
      readonly [ObservableLike_isEnumerable]: false;
      readonly [ObservableLike_isRunnable]: true;
    },
  ): RunnableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: true;
      readonly [ObservableLike_isEnumerable]: false;
      readonly [ObservableLike_isRunnable]: false;
    },
  ): DeferredObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: false;
      readonly [ObservableLike_isEnumerable]: false;
      readonly [ObservableLike_isRunnable]: false;
    },
  ): ObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: {
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ObservableLike_isEnumerable]: boolean;
      readonly [ObservableLike_isRunnable]: boolean;
    },
  ): ObservableLike<T>;
}
const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"] =
  /*@__PURE__*/ (() => {
    type TProperties = {
      readonly [__CreateObservable_effect]: SideEffect1<ObserverLike>;
      readonly [ObservableLike_isDeferred]: boolean;
      readonly [ObservableLike_isEnumerable]: boolean;
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
            readonly [ObservableLike_isEnumerable]: boolean;
            readonly [ObservableLike_isRunnable]: boolean;
          },
        ): ObservableLike {
          instance[__CreateObservable_effect] = effect;
          instance[ObservableLike_isDeferred] =
            config[ObservableLike_isDeferred] ||
            config[ObservableLike_isEnumerable] ||
            config[ObservableLike_isRunnable];
          instance[ObservableLike_isRunnable] =
            config[ObservableLike_isEnumerable] ||
            config[ObservableLike_isRunnable];
          instance[ObservableLike_isEnumerable] =
            config[ObservableLike_isEnumerable];

          return instance;
        },
        props<TProperties>({
          [__CreateObservable_effect]: none,
          [ObservableLike_isDeferred]: false,
          [ObservableLike_isRunnable]: false,
          [ObservableLike_isEnumerable]: false,
        }),
        {
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

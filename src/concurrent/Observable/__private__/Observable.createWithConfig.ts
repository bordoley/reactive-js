import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import { ComputationLike_isPure } from "../../../computations.js";
import {
  DeferredObservableWithSideEffectsLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PureDeferredObservableLike,
  PureRunnableLike,
  RunnableWithSideEffectsLike,
} from "../../../concurrent.js";
import { SideEffect1, error, none } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import ObservableMixin from "../../__mixins__/ObservableMixin.js";

interface ObservableCreateWithConfig {
  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      PureRunnableLike,
      | typeof ObservableLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): PureRunnableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      RunnableWithSideEffectsLike,
      | typeof ObservableLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): RunnableWithSideEffectsLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      PureDeferredObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): PureDeferredObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      DeferredObservableWithSideEffectsLike,
      | typeof ObservableLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): DeferredObservableWithSideEffectsLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      MulticastObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): MulticastObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      ObservableLike,
      | typeof ObservableLike_isDeferred
      | typeof ComputationLike_isPure
      | typeof ObservableLike_isRunnable
    >,
  ): ObservableLike<T>;
}
const Observable_createWithConfig: ObservableCreateWithConfig["createWithConfig"] =
  /*@__PURE__*/ (() => {
    const CreateObservable_effect = Symbol("CreateObservable_effect");

    type TProperties = {
      readonly [CreateObservable_effect]: SideEffect1<ObserverLike>;
    };

    return mixInstanceFactory(
      include(ObservableMixin),
      function CreateObservable(
        instance: Pick<ObservableLike, typeof ObservableLike_observe> &
          Mutable<TProperties>,
        effect: SideEffect1<ObserverLike>,
        config: {
          readonly [ObservableLike_isDeferred]: boolean;
          readonly [ComputationLike_isPure]: boolean;
          readonly [ObservableLike_isRunnable]: boolean;
        },
      ): ObservableLike {
        init(ObservableMixin, instance, config);
        instance[CreateObservable_effect] = effect;

        return instance;
      },
      props<TProperties>({
        [CreateObservable_effect]: none,
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
    ) as ObservableCreateWithConfig["createWithConfig"];
  })();

export default Observable_createWithConfig;

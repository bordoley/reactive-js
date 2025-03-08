import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import ObservableMixin from "../../../computations/__mixins__/ObservableMixin.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  DeferredObservableWithSideEffectsLike,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
  PureDeferredObservableLike,
  PureSynchronousObservableLike,
  SynchronousObservableWithSideEffectsLike,
} from "../../../computations.js";
import { SideEffect1, error, none } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";

interface ObservableCreateWithConfig {
  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      PureSynchronousObservableLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
  ): PureSynchronousObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      SynchronousObservableWithSideEffectsLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
  ): SynchronousObservableWithSideEffectsLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      PureDeferredObservableLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
  ): PureDeferredObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      DeferredObservableWithSideEffectsLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
  ): DeferredObservableWithSideEffectsLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      ObservableLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
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
          readonly [ComputationLike_isPure]: boolean;
          readonly [ComputationLike_isSynchronous]: boolean;
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
        [ComputationLike_isDeferred]: true as const,

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

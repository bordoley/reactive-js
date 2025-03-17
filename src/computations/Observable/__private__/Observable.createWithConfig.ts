import {
  Mutable,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
  ObservableLike_observe,
  ObservableWithSideEffectsLike,
  PureObservableLike,
  PureSynchronousObservableLike,
  SynchronousObservableWithSideEffectsLike,
} from "../../../computations.js";
import { SideEffect1, error, none } from "../../../functions.js";
import { DisposableLike_dispose, ObserverLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";

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
      PureObservableLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
  ): PureObservableLike<T>;

  createWithConfig<T>(
    f: SideEffect1<ObserverLike<T>>,
    config: Pick<
      ObservableWithSideEffectsLike,
      typeof ComputationLike_isPure | typeof ComputationLike_isSynchronous
    >,
  ): ObservableWithSideEffectsLike<T>;

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
      readonly [ComputationLike_isPure]: boolean;
      readonly [ComputationLike_isSynchronous]: boolean;
    };

    return mixInstanceFactory(
      function CreateObservable(
        this: Pick<ObservableLike, typeof ObservableLike_observe> &
          Mutable<TProperties>,
        effect: SideEffect1<ObserverLike>,
        config: {
          readonly [ComputationLike_isPure]: boolean;
          readonly [ComputationLike_isSynchronous]: boolean;
        },
      ): ObservableLike {
        this[CreateObservable_effect] = effect;

        this[ComputationLike_isSynchronous] = Computation.isSynchronous(config);
        this[ComputationLike_isPure] = Computation.isPure(config);

        return this;
      },
      props<TProperties>({
        [CreateObservable_effect]: none,
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
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

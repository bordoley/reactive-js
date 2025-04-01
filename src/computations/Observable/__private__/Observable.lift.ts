import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ObservableLike,
} from "../../../computations.js";
import { Function1, Optional } from "../../../functions.js";
import { BackpressureStrategy, ObserverLike } from "../../../utils.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";
import LiftedSinkToObserverMixin from "../../__mixins__/LiftedSinkToObserverMixin.js";

export const liftedSinkToObserver: <T>(
  delegate: LiftedSinkLike<ObserverLike, unknown>,
  backPressure?: Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkToObserverMixin()),
    function LiftedSinkToObserver(
      this: unknown,
      operator: LiftedSinkLike<ObserverLike, unknown>,
      backPressure: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ObserverLike<T> {
      init(LiftedSinkToObserverMixin(), this, operator, backPressure);

      return this;
    },
  ))();

export const liftedSinkToObserverWithBackPressure =
  <T>(config: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
  }) =>
  (sink: LiftedSinkLike<ObserverLike, T>) =>
    liftedSinkToObserver(sink, config);

const Observable_lift =
  <TIn, TOut>(config?: {
    [ComputationLike_isPure]?: boolean;
    [ComputationLike_isSynchronous]?: boolean;
  }) =>
  (
    operator: Function1<
      LiftedSinkLike<ObserverLike, TOut>,
      LiftedSinkLike<ObserverLike, TIn>
    >,
  ) =>
  (source: ObservableLike<TIn>): ObservableLike<TOut> =>
    DeferredReactiveSource.createLifted(
      source,
      operator,
      liftedSinkToObserver,
      config,
    );

export default Observable_lift;

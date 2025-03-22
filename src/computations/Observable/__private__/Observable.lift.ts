import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ComputationOperatorWithSideEffects,
  ObservableLike,
  ObservableWithSideEffectsLike,
  PureAsynchronousComputationOperator,
  PureComputationOperator,
} from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";

interface ObservableLift {
  <TA, TB>(): (
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => PureComputationOperator<Observable.Computation, TA, TB>;

  <TA, TB>(options: {
    [ComputationLike_isPure]: true;
    [ComputationLike_isSynchronous]: true;
  }): (
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => PureComputationOperator<Observable.Computation, TA, TB>;

  <TA, TB>(options: {
    [ComputationLike_isPure]: false;
    [ComputationLike_isSynchronous]: true;
  }): (
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => ComputationOperatorWithSideEffects<Observable.Computation, TA, TB>;

  <TA, TB>(options: {
    [ComputationLike_isPure]: true;
    [ComputationLike_isSynchronous]: false;
  }): (
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => PureAsynchronousComputationOperator<Observable.Computation, TA, TB>;

  <TA, TB>(options: {
    [ComputationLike_isPure]: false;
    [ComputationLike_isSynchronous]: false;
  }): (
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, ObservableWithSideEffectsLike<TB>>;

  <TA, TB>(options: {
    [ComputationLike_isPure]: boolean;
    [ComputationLike_isSynchronous]: boolean;
  }): (
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ) => Function1<ObservableLike<TA>, ObservableLike<TB>>;
}

const Observable_lift: ObservableLift = Source.lift as ObservableLift;

export default Observable_lift;

import {
  ComputationLike_isPure,
  ComputationOf,
  ComputationOperatorWithSideEffects,
  PureComputationOperator,
} from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as Source from "../../__internal__/Source.js";

interface ProducerLift {
  <TA, TB>(): (
    operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>,
  ) => PureComputationOperator<Producer.Computation, TA, TB>;

  <TA, TB>(options: {
    [ComputationLike_isPure]: true;
  }): (
    operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>,
  ) => PureComputationOperator<Producer.Computation, TA, TB>;

  <TA, TB>(options: {
    [ComputationLike_isPure]: false;
  }): (
    operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>,
  ) => ComputationOperatorWithSideEffects<Producer.Computation, TA, TB>;

  <TA, TB>(options: {
    [ComputationLike_isPure]: boolean;
  }): (
    operator: Function1<ConsumerLike<TB>, ConsumerLike<TA>>,
  ) => Function1<
    ComputationOf<Producer.Computation, TA>,
    ComputationOf<Producer.Computation, TB>
  >;
}

const Producer_lift: ProducerLift = Source.lift as ProducerLift;

export default Producer_lift;

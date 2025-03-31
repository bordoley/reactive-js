import { ComputationLike_isPure, ComputationOf, ComputationOperatorWithSideEffects, PureComputationOperator } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";
interface RunnableLift {
    lift<TA, TB>(): (operator: Function1<LiftedSinkLike<SinkLike, TB>, LiftedSinkLike<SinkLike, TA>>) => PureComputationOperator<Runnable.Computation, TA, TB>;
    lift<TA, TB>(config: {
        [ComputationLike_isPure]: true;
    }): (operator: Function1<LiftedSinkLike<SinkLike, TB>, LiftedSinkLike<SinkLike, TA>>) => PureComputationOperator<Runnable.Computation, TA, TB>;
    lift<TA, TB>(config: {
        [ComputationLike_isPure]: false;
    }): (operator: Function1<LiftedSinkLike<SinkLike, TB>, LiftedSinkLike<SinkLike, TA>>) => ComputationOperatorWithSideEffects<Runnable.Computation, TA, TB>;
    lift<TA, TB>(config: {
        [ComputationLike_isPure]: boolean;
    }): (operator: Function1<LiftedSinkLike<SinkLike, TB>, LiftedSinkLike<SinkLike, TA>>) => Function1<ComputationOf<Runnable.Computation, TA>, ComputationOf<Runnable.Computation, TB>>;
}
declare const Runnable_lift: RunnableLift["lift"];
export default Runnable_lift;

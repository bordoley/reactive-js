import { ComputationBaseOf, ComputationOperator, ComputationWithSideEffectsOperator, DeferringComputationOperator, SinkLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
interface RunnableLift {
    lift<TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>): ComputationOperator<Runnable.Computation, TA, TB>;
    lift<TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: true): DeferringComputationOperator<Runnable.Computation, TA, TB>;
    lift<TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: false): ComputationWithSideEffectsOperator<Runnable.Computation, TA, TB>;
    lift<TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: boolean): Function1<ComputationBaseOf<Runnable.Computation, TA>, ComputationBaseOf<Runnable.Computation, TB>>;
}
declare const Runnable_lift: RunnableLift["lift"];
export default Runnable_lift;

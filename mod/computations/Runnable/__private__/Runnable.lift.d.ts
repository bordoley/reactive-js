import { ComputationOf, ComputationOperator, ComputationWithSideEffectsOperator, SinkLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import type { RunnableComputation } from "../../Runnable.js";
interface RunnableLift {
    lift<TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: true): ComputationOperator<RunnableComputation, TA, TB>;
    lift<TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: false): ComputationWithSideEffectsOperator<RunnableComputation, TA, TB>;
    lift<TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: boolean): Function1<ComputationOf<RunnableComputation, TA>, ComputationOf<RunnableComputation, TB>>;
}
declare const Runnable_lift: RunnableLift["lift"];
export default Runnable_lift;

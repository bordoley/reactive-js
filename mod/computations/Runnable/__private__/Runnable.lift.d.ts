import { ComputationOperator, ComputationWithSideEffectsOperator, RunnableLike, RunnableWithSideEffectsLike, SinkLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import type { RunnableComputationFor } from "../../Runnable.js";
interface RunnableLift {
    lift<TA, TB, TComputationType extends RunnableLike = RunnableLike>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: true): ComputationOperator<RunnableLike, RunnableComputationFor<RunnableLike>, TA, TB>;
    lift<TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: false): ComputationWithSideEffectsOperator<RunnableLike, RunnableComputationFor<RunnableLike>, RunnableWithSideEffectsLike, RunnableComputationFor<RunnableWithSideEffectsLike>, TA, TB>;
}
declare const Runnable_lift: RunnableLift["lift"];
export default Runnable_lift;

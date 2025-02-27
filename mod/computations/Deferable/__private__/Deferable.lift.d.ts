import { ComputationWithSideEffectsOperator, DeferableLike, DeferableWithSideEffectsLike, PureComputationOperator, SinkLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import type { DeferableComputation, DeferableWithSideEffectsComputation } from "../../Deferable.js";
interface DeferableLift {
    lift<TA, TB, TComputationType extends DeferableLike = DeferableLike>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: true): PureComputationOperator<DeferableLike, DeferableComputation, TA, TB>;
    lift<TA, TB>(operator: Function1<SinkLike<TB>, SinkLike<TA>>, isPure: false): ComputationWithSideEffectsOperator<DeferableLike, DeferableComputation, DeferableWithSideEffectsLike, DeferableWithSideEffectsComputation, TA, TB>;
}
declare const Deferable_lift: DeferableLift["lift"];
export default Deferable_lift;

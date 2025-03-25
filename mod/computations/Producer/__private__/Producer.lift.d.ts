import { ComputationLike_isPure, ProducerLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { LiftedOperatorLike } from "../../__internal__/LiftedSource.js";
declare const Producer_lift: <TIn, TOut>(config?: {
    [ComputationLike_isPure]?: boolean;
}) => (operator: Function1<LiftedOperatorLike<TOut>, LiftedOperatorLike<TIn>>) => (source: ProducerLike<TIn>) => ProducerLike<TOut>;
export default Producer_lift;

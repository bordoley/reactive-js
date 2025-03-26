import { ComputationLike_isPure, ProducerLike } from "../../../computations.js";
import { Function1 } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";
declare const Producer_lift: <TIn, TOut>(config?: {
    [ComputationLike_isPure]?: boolean;
}) => (operator: Function1<LiftedSinkLike<ConsumerLike, TOut>, LiftedSinkLike<ConsumerLike, TIn>>) => (source: ProducerLike<TIn>) => ProducerLike<TOut>;
export default Producer_lift;

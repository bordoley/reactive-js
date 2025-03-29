import { ComputationLike_isPure, ProducerLike } from "../../../computations.js";
import { Function1, Optional } from "../../../functions.js";
import { BackpressureStrategy, ConsumerLike } from "../../../utils.js";
import { LiftedSinkLike } from "../../__internal__/LiftedSource.js";
export declare const liftedSinkToConsumer: <T>(delegate: LiftedSinkLike<ConsumerLike, unknown>, backPressure?: Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>) => ConsumerLike<T>;
export declare const liftedSinkToConsumerWithBackPressure: <T>(config: {
    capacity: number;
    backpressureStrategy: BackpressureStrategy;
}) => (sink: LiftedSinkLike<ConsumerLike, T>) => ConsumerLike<unknown>;
declare const Producer_lift: <TIn, TOut>(config?: {
    [ComputationLike_isPure]?: boolean;
}) => (operator: Function1<LiftedSinkLike<ConsumerLike, TOut>, LiftedSinkLike<ConsumerLike, TIn>>) => (source: ProducerLike<TIn>) => ProducerLike<TOut>;
export default Producer_lift;

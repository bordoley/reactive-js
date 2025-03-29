import { Mixin2 } from "../../__internal__/mixins.js";
import { Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike, FlowControllerLike_addOnReadyListener, FlowControllerLike_backpressureStrategy, FlowControllerLike_capacity, FlowControllerLike_isReady } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import { LiftedSinkToSinkLike } from "./LiftedSinkToSinkMixin.js";
export interface LiftedSinkToConsumerLike<TSubscription extends ConsumerLike, T> extends LiftedSinkToSinkLike<TSubscription, T>, ConsumerLike<T> {
}
type TReturn<TSubscription extends ConsumerLike, T> = LiftedSinkToConsumerLike<TSubscription, T>;
type TPrototype<TSubscription extends ConsumerLike, T> = Pick<LiftedSinkToConsumerLike<TSubscription, T>, typeof FlowControllerLike_isReady | typeof FlowControllerLike_backpressureStrategy | typeof FlowControllerLike_capacity | typeof FlowControllerLike_addOnReadyListener>;
declare const LiftedSinkToConsumerMixin: <TSubscription extends ConsumerLike, T>() => Mixin2<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>, Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}>, TPrototype<TSubscription, T>>;
export default LiftedSinkToConsumerMixin;

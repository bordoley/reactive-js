import { Mixin1 } from "../../__internal__/mixins.js";
import { ConsumerLike, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady } from "../../utils.js";
import { LiftedOperatorLike } from "../__internal__/LiftedSource.js";
import { LiftedOperatorToSinkLike } from "./LiftedOperatorToSinkMixin.js";
export interface LiftedOperatorToConsumerLike<TSubscription extends ConsumerLike, T> extends LiftedOperatorToSinkLike<TSubscription, T>, ConsumerLike<T> {
}
type TReturn<TSubscription extends ConsumerLike, T> = LiftedOperatorToConsumerLike<TSubscription, T>;
type TPrototype<TSubscription extends ConsumerLike, T> = Pick<LiftedOperatorToConsumerLike<TSubscription, T>, typeof QueueableLike_isReady | typeof QueueableLike_backpressureStrategy | typeof QueueableLike_capacity | typeof QueueableLike_addOnReadyListener>;
declare const LiftedOperatorToConsumerMixin: <TSubscription extends ConsumerLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedOperatorLike<TSubscription, T>, TPrototype<TSubscription, T>>;
export default LiftedOperatorToConsumerMixin;

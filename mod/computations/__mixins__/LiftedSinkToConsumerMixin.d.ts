import { Mixin1 } from "../../__internal__/mixins.js";
import { ConsumerLike, DisposableLike, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import { LiftedSinkToSinkLike } from "./LiftedSinkToSinkMixin.js";
export interface LiftedSinkToConsumerLike<TSubscription extends ConsumerLike, T> extends LiftedSinkToSinkLike<TSubscription, T>, ConsumerLike<T> {
}
type TReturn<TSubscription extends ConsumerLike, T> = Omit<LiftedSinkToConsumerLike<TSubscription, T>, keyof DisposableLike>;
type TPrototype<TSubscription extends ConsumerLike, T> = Pick<LiftedSinkToConsumerLike<TSubscription, T>, typeof QueueableLike_isReady | typeof QueueableLike_backpressureStrategy | typeof QueueableLike_capacity | typeof QueueableLike_addOnReadyListener>;
declare const LiftedSinkToConsumerMixin: <TSubscription extends ConsumerLike, T>() => Mixin1<TReturn<TSubscription, T>, LiftedSinkLike<TSubscription, T>, TPrototype<TSubscription, T>>;
export default LiftedSinkToConsumerMixin;

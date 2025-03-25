import { Mixin2 } from "../../__internal__/mixins.js";
import { ConsumerLike, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady } from "../../utils.js";
import { LiftedOperatorLike } from "../__internal__/LiftedSource.js";
import { LiftedOperatorToSinkLike } from "./LiftedOperatorToSinkMixin.js";
export interface LiftedOperatorToConsumerLike<T, TDelegate extends ConsumerLike> extends LiftedOperatorToSinkLike<T, TDelegate>, ConsumerLike<T> {
}
type TReturn<T, TDelegate extends ConsumerLike> = LiftedOperatorToConsumerLike<T, TDelegate>;
type TPrototype<T, TDelegate extends ConsumerLike> = Pick<LiftedOperatorToConsumerLike<T, TDelegate>, typeof QueueableLike_isReady | typeof QueueableLike_backpressureStrategy | typeof QueueableLike_capacity | typeof QueueableLike_addOnReadyListener>;
declare const LiftedOperatorToConsumerMixin: <T, TDelegate extends ConsumerLike>() => Mixin2<TReturn<T, TDelegate>, LiftedOperatorLike<T>, TDelegate, TPrototype<T, TDelegate>>;
export default LiftedOperatorToConsumerMixin;

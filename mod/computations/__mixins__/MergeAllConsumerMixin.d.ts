import { Mixin3 } from "../../__internal__/mixins.js";
import { ReactiveSourceLike } from "../../computations.js";
import { Function1, Optional } from "../../functions.js";
import { BackpressureStrategy, ConsumerLike } from "../../utils.js";
type TReturn<TInnerSource extends ReactiveSourceLike<T, TConsumer>, TConsumer extends ConsumerLike<T>, T> = ConsumerLike<TInnerSource>;
declare const MergeAllConsumerMixin: <TInnerSource extends ReactiveSourceLike<T, TConsumer>, TConsumer extends ConsumerLike<T>, T>() => Mixin3<TReturn<TInnerSource, TConsumer, T>, ConsumerLike<T>, Optional<{
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
    concurrency?: number;
}>, Function1<TConsumer, TConsumer>>;
export default MergeAllConsumerMixin;

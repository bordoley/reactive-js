import { Mixin1 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { BackpressureStrategy, CollectionEnumeratorLike_count, CollectionEnumeratorLike_peek, DisposableLike, EnumeratorLike_current, EnumeratorLike_hasCurrent, FlowControlQueueLike, QueueLike_backpressureStrategy, QueueLike_capacity } from "../../utils.js";
type TReturn<T> = Omit<FlowControlQueueLike<T>, keyof DisposableLike>;
type TPrototype<T> = Omit<FlowControlQueueLike<T>, keyof DisposableLike | typeof CollectionEnumeratorLike_count | typeof EnumeratorLike_current | typeof EnumeratorLike_hasCurrent | typeof QueueLike_capacity | typeof QueueLike_backpressureStrategy | typeof CollectionEnumeratorLike_peek | typeof Symbol.iterator>;
type TConfig<T> = Optional<{
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
}>;
declare const FlowControlQueueMixin: <T>() => Mixin1<TReturn<T>, TConfig<T>, TPrototype<T>>;
export default FlowControlQueueMixin;

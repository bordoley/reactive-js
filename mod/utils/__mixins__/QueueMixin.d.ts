import { Mixin1 } from "../../__internal__/mixins.js";
import { Comparator, Optional } from "../../functions.js";
import { BackpressureStrategy, CollectionEnumeratorLike_count, DisposableLike, EnumeratorLike_current, EnumeratorLike_hasCurrent, QueueLike } from "../../utils.js";
type TReturn<T> = Omit<QueueLike<T>, keyof DisposableLike>;
type TPrototype<T> = Omit<QueueLike<T>, keyof DisposableLike | typeof CollectionEnumeratorLike_count | typeof EnumeratorLike_current | typeof EnumeratorLike_hasCurrent>;
type TConfig<T> = Optional<{
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
}>;
declare const QueueMixin: <T>() => Mixin1<TReturn<T>, TConfig<T>, TPrototype<T>>;
export default QueueMixin;

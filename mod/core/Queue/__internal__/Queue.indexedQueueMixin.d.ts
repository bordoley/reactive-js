import { IndexedQueueLike } from "../../../__internal__/core.js";
import { Mixin2 } from "../../../__internal__/mixins.js";
import { BufferLike_capacity, CollectionLike_count, QueueableLike, QueueableLike_backpressureStrategy } from "../../../core.js";
declare const Queue_indexedQueueMixin: <T>() => Mixin2<IndexedQueueLike<T>, number, QueueableLike[typeof QueueableLike_backpressureStrategy], unknown, Omit<IndexedQueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof CollectionLike_count | typeof BufferLike_capacity>>;
export default Queue_indexedQueueMixin;

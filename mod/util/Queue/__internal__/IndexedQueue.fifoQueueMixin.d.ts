import { Mixin2 } from "../../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../../__internal__/util.internal.js";
import { BufferLike_capacity, CollectionLike_count, QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const IndexedQueue_fifoQueueMixin: <T>() => Mixin2<IndexedQueueLike<T>, number, QueueableLike[typeof QueueableLike_backpressureStrategy], Omit<IndexedQueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof CollectionLike_count | typeof BufferLike_capacity>>;
export default IndexedQueue_fifoQueueMixin;

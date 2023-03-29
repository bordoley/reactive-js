import { Mixin2 } from "../../../__internal__/mixins.js";
import { IndexedQueueLike, QueueLike_count } from "../../../__internal__/util.internal.js";
import { QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../../util.js";
declare const IndexedQueue_fifoQueueMixin: <T>() => Mixin2<IndexedQueueLike<T>, number, QueueableLike[typeof QueueableLike_backpressureStrategy], Omit<IndexedQueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof QueueLike_count | typeof QueueableLike_capacity>>;
export default IndexedQueue_fifoQueueMixin;

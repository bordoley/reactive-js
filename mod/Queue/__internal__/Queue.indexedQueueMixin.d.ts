import { Mixin2 } from "../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../__internal__/types.js";
import { CollectionLike_count, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../types.js";
declare const Queue_indexedQueueMixin: <T>() => Mixin2<IndexedQueueLike<T>, number, QueueableLike[typeof QueueableLike_backpressureStrategy], unknown, Omit<IndexedQueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof CollectionLike_count | typeof QueueableLike_capacity>>;
export default Queue_indexedQueueMixin;

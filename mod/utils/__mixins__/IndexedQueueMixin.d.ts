import { Mixin2 } from "../../__internal__/mixins.js";
import { CollectionLike_count } from "../../collections.js";
import { IndexedQueueLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../utils.js";
declare const IndexedQueueMixin: <T>() => Mixin2<IndexedQueueLike<T>, number, QueueableLike[typeof QueueableLike_backpressureStrategy], unknown, Omit<IndexedQueueLike<T>, typeof QueueableLike_backpressureStrategy | typeof CollectionLike_count | typeof QueueableLike_capacity>>;
export default IndexedQueueMixin;

import { Mixin1 } from "../../../__internal__/mixins.js";
import { IndexedQueueLike, QueueLike_count } from "../../../__internal__/util.internal.js";
import { QueueableLike_maxBufferSize } from "../../../util.js";
declare const IndexedQueue_fifoQueueMixin: <T>() => Mixin1<IndexedQueueLike<T>, number, Omit<IndexedQueueLike<T>, typeof QueueLike_count | typeof QueueableLike_maxBufferSize>>;
export default IndexedQueue_fifoQueueMixin;

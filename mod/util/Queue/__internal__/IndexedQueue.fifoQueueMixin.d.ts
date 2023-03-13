import { Mixin1 } from "../../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../../__internal__/util.internal.js";
import { QueueableLike_count, QueueableLike_maxBufferSize } from "../../../util.js";
declare const IndexedQueue_fifoQueueMixin: <T>() => Mixin1<IndexedQueueLike<T>, number, Omit<IndexedQueueLike<T>, typeof QueueableLike_count | typeof QueueableLike_maxBufferSize>>;
export default IndexedQueue_fifoQueueMixin;

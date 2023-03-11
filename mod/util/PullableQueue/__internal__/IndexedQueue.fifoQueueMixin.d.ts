import { Mixin } from "../../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../../__internal__/util.internal.js";
import { QueueLike_count } from "../../../util.js";
declare const IndexedQueue_fifoQueueMixin: <T>() => Mixin<IndexedQueueLike<T>, Omit<IndexedQueueLike<T>, typeof QueueLike_count>>;
export default IndexedQueue_fifoQueueMixin;

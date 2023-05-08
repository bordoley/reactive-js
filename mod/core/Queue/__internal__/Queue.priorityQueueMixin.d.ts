import { QueueCollectionLike } from "../../../__internal__/core.js";
import { Mixin3 } from "../../../__internal__/mixins.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../core.js";
import { Comparator } from "../../../functions.js";
declare const Queue_priorityQueueMixin: <T>() => Mixin3<QueueCollectionLike<T>, Comparator<T>, number, QueueableLike[typeof QueueableLike_backpressureStrategy]>;
export default Queue_priorityQueueMixin;

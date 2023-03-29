import { Mixin3 } from "../../../__internal__/mixins.js";
import { QueueLike } from "../../../__internal__/util.internal.js";
import { Comparator } from "../../../functions.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Queue_priorityQueueMixin: <T>() => Mixin3<QueueLike<T>, Comparator<T>, number, QueueableLike[typeof QueueableLike_backpressureStrategy]>;
export default Queue_priorityQueueMixin;

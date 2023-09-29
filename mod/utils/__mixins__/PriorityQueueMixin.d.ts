import { Mixin3 } from "../../__internal__/mixins.js";
import { Comparator } from "../../functions.js";
import { QueueCollectionLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../utils.js";
declare const PriorityQueueMixin: <T>() => Mixin3<QueueCollectionLike<T>, Comparator<T>, number, QueueableLike[typeof QueueableLike_backpressureStrategy]>;
export default PriorityQueueMixin;

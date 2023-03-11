import { Mixin1 } from "../../../__internal__/mixins.js";
import { QueueLike } from "../../../__internal__/util.internal.js";
import { Comparator } from "../../../functions.js";
declare const Queue_priorityQueueMixin: <T>() => Mixin1<QueueLike<T>, Comparator<T>>;
export default Queue_priorityQueueMixin;

import { Mixin1 } from "../../../__internal__/mixins.js";
import { Comparator } from "../../../functions.js";
import { PullableQueueLike } from "../../__internal__/util.internal.js";
declare const PullableQueue_priorityQueueMixin: <T>() => Mixin1<PullableQueueLike<T>, Comparator<T>>;
export default PullableQueue_priorityQueueMixin;

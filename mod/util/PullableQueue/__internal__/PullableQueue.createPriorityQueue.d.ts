import { PullableQueueLike } from "../../../__internal__/util.internal.js";
import { Comparator } from "../../../functions.js";
declare const PullableQueue_createPriorityQueue: <T>(comparator: Comparator<T>) => PullableQueueLike<T>;
export default PullableQueue_createPriorityQueue;

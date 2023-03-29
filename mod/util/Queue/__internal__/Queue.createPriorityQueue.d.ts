import { QueueLike } from "../../../__internal__/util.internal.js";
import { Comparator } from "../../../functions.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../util.js";
declare const Queue_createPriorityQueue: <T>(comparator: Comparator<T>, capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => QueueLike<T>;
export default Queue_createPriorityQueue;

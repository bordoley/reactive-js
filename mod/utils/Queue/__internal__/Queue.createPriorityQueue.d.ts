import { Comparator } from "../../../functions.js";
import { QueueCollectionLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../../utils.js";
declare const Queue_createPriorityQueue: <T>(comparator: Comparator<T>, capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => QueueCollectionLike<T>;
export default Queue_createPriorityQueue;

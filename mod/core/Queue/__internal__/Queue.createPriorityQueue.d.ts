import { QueueCollectionLike } from "../../../__internal__/core.js";
import { QueueableLike, QueueableLike_backpressureStrategy } from "../../../core.js";
import { Comparator } from "../../../functions.js";
declare const Queue_createPriorityQueue: <T>(comparator: Comparator<T>, capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => QueueCollectionLike<T>;
export default Queue_createPriorityQueue;

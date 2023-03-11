import { QueueLike } from "../../../__internal__/util.internal.js";
import { Comparator } from "../../../functions.js";
declare const Queue_createPriorityQueue: <T>(comparator: Comparator<T>) => QueueLike<T>;
export default Queue_createPriorityQueue;

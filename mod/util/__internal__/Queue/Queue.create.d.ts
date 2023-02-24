import { Comparator } from "../../../functions.js";
import { PullableQueueLike } from "../util.internal.js";
declare const Queue_create: <T>(comparator: Comparator<T>) => PullableQueueLike<T>;
export default Queue_create;

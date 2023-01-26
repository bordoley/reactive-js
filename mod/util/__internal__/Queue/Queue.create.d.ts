import { Comparator } from "../../../functions.js";
import { QueueLike } from "../util.internal.js";
declare const Queue_create: <T>(comparator: Comparator<T>) => QueueLike<T>;
export { Queue_create as default };

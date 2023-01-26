import { Comparator } from "../../../functions.js";
import { QueueLike } from "../util.internal.js";
declare const Queue$create: <T>(comparator: Comparator<T>) => QueueLike<T>;
export { Queue$create as default };

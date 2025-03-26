import { Comparator } from "../functions.js";
import { QueueLike } from "../utils.js";
export declare const create: <T>() => QueueLike<T>;
export declare const createSorted: <T>(comparator: Comparator<T>) => QueueLike<T>;

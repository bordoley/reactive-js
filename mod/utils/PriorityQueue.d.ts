import { Comparator } from "../functions.js";
import { QueueCollectionLike, QueueableLike, QueueableLike_backpressureStrategy } from "../utils.js";
export declare const create: <T>(comparator: Comparator<T>, capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]) => QueueCollectionLike<T>;

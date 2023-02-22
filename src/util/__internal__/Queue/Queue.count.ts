import { QueueLike, QueueLike_count } from "../util.internal.js";

const Queue_count = <T>(queue: QueueLike<T>): number => queue[QueueLike_count];

export default Queue_count;

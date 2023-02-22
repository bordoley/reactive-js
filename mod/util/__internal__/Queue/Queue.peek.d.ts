import { Optional } from "../../../functions.js";
import { QueueLike } from "../util.internal.js";
declare const Queue_peek: <T>(queue: QueueLike<T>) => Optional<T>;
export default Queue_peek;

import { Optional } from "../../../functions.js";
import { QueueLike, QueueLike_peek } from "../util.internal.js";

const Queue_peek = <T>(queue: QueueLike<T>): Optional<T> =>
  queue[QueueLike_peek]();

export default Queue_peek;

import { Optional } from "../../../functions.js";
import { QueueLike, QueueLike_pop } from "../util.internal.js";

const Queue_pop = <T>(queue: QueueLike<T>): Optional<T> =>
  queue[QueueLike_pop]();

export default Queue_pop;

import { Optional } from "../../../functions";
import { QueueLike, QueueLike_pop } from "../util.internal";

const Queue_pop = <T>(queue: QueueLike<T>): Optional<T> =>
  queue[QueueLike_pop]();

export default Queue_pop;

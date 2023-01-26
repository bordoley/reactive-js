import { Optional } from "../../../functions";
import { QueueLike, QueueLike_peek } from "../util.internal";

const Queue_peek = <T>(queue: QueueLike<T>): Optional<T> =>
  queue[QueueLike_peek]();

export default Queue_peek;

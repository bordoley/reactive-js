import { Optional } from "../../../functions";
import { QueueLike, QueueLike_peek } from "../util.internal";

const Queue$peek = <T>(queue: QueueLike<T>): Optional<T> =>
  queue[QueueLike_peek]();

export default Queue$peek;

import { Optional } from "../../../functions";
import { QueueLike, QueueLike_pop } from "../util.internal";

const QueueLike__pop = <T>(queue: QueueLike<T>): Optional<T> =>
  queue[QueueLike_pop]();

export default QueueLike__pop;

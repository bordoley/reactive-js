import { QueueLike, QueueLike_count } from "../util.internal";

const QueueLike__count = <T>(queue: QueueLike<T>): number =>
  queue[QueueLike_count];

export default QueueLike__count;

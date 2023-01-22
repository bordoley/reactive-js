import { QueueLike, QueueLike_push } from "../util.internal";

// FIXME: Maybe this should be pipeable?
const QueueLike__push = <T>(queue: QueueLike<T>, value: T): void =>
  queue[QueueLike_push](value);

export default QueueLike__push;

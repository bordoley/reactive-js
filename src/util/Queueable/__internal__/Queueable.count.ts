import { QueueableLike, QueueableLike_count } from "../../../util.js";

const Queueable_count = <T>(queue: QueueableLike<T>): number =>
  queue[QueueableLike_count];

export default Queueable_count;

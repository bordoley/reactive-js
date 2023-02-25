import { SideEffect1 } from "../../../functions.js";
import { QueueLike, QueueLike_push } from "../../../util.js";

const Queue_pushTo =
  <T>(queue: QueueLike<T>): SideEffect1<T> =>
  v =>
    queue[QueueLike_push](v);

export default Queue_pushTo;

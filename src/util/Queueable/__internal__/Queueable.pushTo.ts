import { SideEffect1 } from "../../../functions.js";
import { QueueableLike, QueueableLike_push } from "../../../util.js";

const Queueable_pushTo =
  <T>(queue: QueueableLike<T>): SideEffect1<T> =>
  v =>
    queue[QueueableLike_push](v);

export default Queueable_pushTo;

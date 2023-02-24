import { Updater } from "../../../functions.js";
import { QueueableLike, QueueableLike_push } from "../../../util.js";

const Queueable_push =
  <T, TDispatcher extends QueueableLike<T>>(v: T): Updater<TDispatcher> =>
  queue => {
    queue[QueueableLike_push](v);
    return queue;
  };

export default Queueable_push;

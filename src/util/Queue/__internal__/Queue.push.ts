import { Updater } from "../../../functions.js";
import { QueueLike, QueueLike_push } from "../../../util.js";

const Queue_push =
  <T, TDispatcher extends QueueLike<T>>(v: T): Updater<TDispatcher> =>
  queue => {
    queue[QueueLike_push](v);
    return queue;
  };

export default Queue_push;

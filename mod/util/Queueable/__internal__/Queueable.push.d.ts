import { Updater } from "../../../functions.js";
import { QueueableLike } from "../../../util.js";
declare const Queueable_push: <T, TDispatcher extends QueueableLike<T>>(v: T) => Updater<TDispatcher>;
export default Queueable_push;

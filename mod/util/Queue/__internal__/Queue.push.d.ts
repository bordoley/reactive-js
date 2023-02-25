import { Updater } from "../../../functions.js";
import { QueueLike } from "../../../util.js";
declare const Queue_push: <T, TDispatcher extends QueueLike<T>>(v: T) => Updater<TDispatcher>;
export default Queue_push;

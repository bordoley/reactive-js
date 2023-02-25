import { SideEffect1 } from "../../../functions.js";
import { QueueLike } from "../../../util.js";
declare const Queue_pushTo: <T>(queue: QueueLike<T>) => SideEffect1<T>;
export default Queue_pushTo;

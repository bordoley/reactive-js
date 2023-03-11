import { SideEffect1 } from "../../../functions.js";
import { QueueableLike } from "../../../util.js";
declare const Queue_pushTo: <T>(queue: QueueableLike<T>) => SideEffect1<T>;
export default Queue_pushTo;

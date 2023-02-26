import { SideEffect1 } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink_notifySink: <T>(sink: SinkLike<T>) => SideEffect1<T>;
export default Sink_notifySink;

import { SideEffect1 } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink_notifySink: <TSink extends SinkLike<T>, T>(sink: TSink) => SideEffect1<T>;
export default Sink_notifySink;

import { SideEffect1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
declare const Sink_notifySink: <T>(sink: ObserverLike<T>) => SideEffect1<T>;
export default Sink_notifySink;

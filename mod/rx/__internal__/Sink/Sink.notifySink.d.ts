import { SideEffect1 } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink$notifySink: <TSink extends SinkLike<T>, T>(sink: TSink) => SideEffect1<T>;
export { Sink$notifySink as default };

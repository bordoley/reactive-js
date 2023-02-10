import { Function1 } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink_notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
export { Sink_notify as default };

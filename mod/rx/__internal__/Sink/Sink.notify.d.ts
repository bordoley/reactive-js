import { Function1 } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const Sink$notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
export { Sink$notify as default };

import { Function1 } from "../../../functions.js";
import { SinkLike } from "../../../rx.js";
declare const SinkLike__notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
export { SinkLike__notify as default };

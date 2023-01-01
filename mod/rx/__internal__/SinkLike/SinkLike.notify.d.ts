import { Function1 } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const SinkLike__notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
export { SinkLike__notify as default };

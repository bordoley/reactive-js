import { Function1 } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
export { notify as default };

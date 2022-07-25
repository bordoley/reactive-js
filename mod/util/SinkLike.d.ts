import { Function1, SideEffect1 } from "../functions.mjs";
import { SinkLike } from "../util.mjs";
declare const notify: <T, TSink extends SinkLike<T> = SinkLike<T>>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <T, TSink extends SinkLike<T> = SinkLike<T>>(sink: TSink) => SideEffect1<T>;
export { notify, notifySink };

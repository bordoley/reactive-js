import { Function1, SideEffect1 } from "../functions.mjs";
import { SinkLike } from "../util.mjs";
declare const notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <TSink extends SinkLike<T>, T>(sink: TSink) => SideEffect1<T>;
export { notify, notifySink };

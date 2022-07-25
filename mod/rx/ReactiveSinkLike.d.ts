import { Function1, SideEffect1 } from "../functions.mjs";
import { ReactiveSinkLike } from "../rx.mjs";
declare const notify: <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(sink: TSink) => SideEffect1<T>;
export { notify, notifySink };

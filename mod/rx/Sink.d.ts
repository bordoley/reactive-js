import { Function1, SideEffect1 } from "../functions.js";
import { SinkLike, ReactiveContainerLike } from "../rx.js";
declare const notify: <TSink extends SinkLike<T>, T>(v: T) => Function1<TSink, TSink>;
declare const notifySink: <TSink extends SinkLike<T>, T>(sink: TSink) => SideEffect1<T>;
declare const sourceFrom: <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(source: C) => Function1<TSink, TSink>;
export { notify, notifySink, sourceFrom };

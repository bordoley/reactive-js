import { SideEffect1 } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const notifySink: <TSink extends SinkLike<T>, T>(sink: TSink) => SideEffect1<T>;
export { notifySink as default };

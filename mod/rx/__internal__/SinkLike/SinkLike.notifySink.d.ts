import { SideEffect1 } from "../../../functions.mjs";
import { SinkLike } from "../../../rx.mjs";
declare const SinkLike__notifySink: <TSink extends SinkLike<T>, T>(sink: TSink) => SideEffect1<T>;
export { SinkLike__notifySink as default };

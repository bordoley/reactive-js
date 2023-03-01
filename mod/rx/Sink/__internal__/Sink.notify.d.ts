import { Function1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
declare const Sink_notify: <TSink extends ObserverLike<T>, T>(v: T) => Function1<TSink, TSink>;
export default Sink_notify;

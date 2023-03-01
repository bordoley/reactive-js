import { SideEffect1 } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";

const Sink_notifySink =
  <T>(sink: SinkLike<T>): SideEffect1<T> =>
  (next: T) =>
    sink[ObserverLike_notify](next);

export default Sink_notifySink;

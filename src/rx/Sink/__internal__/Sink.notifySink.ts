import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";

const Sink_notifySink =
  <T>(sink: ObserverLike<T>): SideEffect1<T> =>
  (next: T) =>
    sink[ObserverLike_notify](next);

export default Sink_notifySink;

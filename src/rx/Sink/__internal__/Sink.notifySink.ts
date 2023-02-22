import { SideEffect1 } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";

const Sink_notifySink =
  <TSink extends SinkLike<T>, T>(sink: TSink): SideEffect1<T> =>
  (next: T) =>
    sink[SinkLike_notify](next);

export default Sink_notifySink;

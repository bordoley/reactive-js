import { Function1 } from "../../../functions.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";

const Sink_notify =
  <TSink extends SinkLike<T>, T>(v: T): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink[ObserverLike_notify](v);
    return sink;
  };

export default Sink_notify;

import { Function1 } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";

const Sink_notify =
  <TSink extends SinkLike<T>, T>(v: T): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink[SinkLike_notify](v);
    return sink;
  };

export default Sink_notify;

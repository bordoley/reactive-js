import { Function1 } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";

const Sink$notify =
  <TSink extends SinkLike<T>, T>(v: T): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink[SinkLike_notify](v);
    return sink;
  };

export default Sink$notify;

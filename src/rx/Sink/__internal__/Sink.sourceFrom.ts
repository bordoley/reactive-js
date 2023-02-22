import { Function1 } from "../../../functions.js";
import {
  ReactiveContainerLike,
  ReactiveContainerLike_sinkInto,
  SinkLike,
} from "../../../rx.js";

const Sink_sourceFrom =
  <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
  };

export default Sink_sourceFrom;

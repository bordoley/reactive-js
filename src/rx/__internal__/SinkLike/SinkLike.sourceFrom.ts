import { Function1 } from "../../../functions";
import {
  ReactiveContainerLike,
  ReactiveContainerLike_sinkInto,
  SinkLike,
} from "../../../rx";

const SinkLike__sourceFrom =
  <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
  };

export default SinkLike__sourceFrom;

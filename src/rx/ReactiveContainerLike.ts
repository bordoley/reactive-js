import { Function1 } from "../functions";
import {
  ReactiveContainerLike,
  ReactiveContainerLike_sinkInto,
  SinkLike,
} from "../rx";

export const sinkInto =
  <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
  };

import { Function1 } from "../functions";
import { ReactiveContainerLike, ReactiveContainerLike_sinkInto } from "../rx";
import { SinkLike } from "../util";

export const sinkInto =
  <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
  };

export const sourceFrom =
  <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
  };

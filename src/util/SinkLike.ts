import { Function1, SideEffect1 } from "../functions";
import { ReactiveContainerLike, ReactiveContainerLike_sinkInto } from "../rx";
import { SinkLike, SinkLike_notify } from "../util";

export const notify =
  <TSink extends SinkLike<T>, T>(v: T): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink[SinkLike_notify](v);
    return sink;
  };

export const notifySink =
  <TSink extends SinkLike<T>, T>(sink: TSink): SideEffect1<T> =>
  (next: T) =>
    sink[SinkLike_notify](next);

export const sourceFrom =
  <C extends ReactiveContainerLike<TSink>, TSink extends SinkLike<T>, T>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
  };

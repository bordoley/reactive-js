import { Function1, SideEffect1 } from "../functions";
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

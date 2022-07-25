import { Function1, SideEffect1 } from "../functions";
import { ReactiveSinkLike, ReactiveSinkLike_notify } from "../rx";

export const notify =
  <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(
    v: T,
  ): Function1<TSink, TSink> =>
  (sink: TSink) => {
    sink[ReactiveSinkLike_notify](v);
    return sink;
  };

export const notifySink =
  <T, TSink extends ReactiveSinkLike<T> = ReactiveSinkLike<T>>(
    sink: TSink,
  ): SideEffect1<T> =>
  (next: T) =>
    sink[ReactiveSinkLike_notify](next);

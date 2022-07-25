import { StatefulContainerStateOf } from "../containers";
import { Function1 } from "../functions";
import { ReactiveContainerLike, ReactiveContainerLike_sinkInto } from "../rx";

export const sinkInto =
  <
    C extends ReactiveContainerLike,
    T,
    TSink extends StatefulContainerStateOf<C, T>,
  >(
    sink: TSink,
  ): Function1<C, C> =>
  source => {
    source[ReactiveContainerLike_sinkInto](sink);
    return source;
  };

export const sourceFrom =
  <
    C extends ReactiveContainerLike,
    T,
    TSink extends StatefulContainerStateOf<C, T>,
  >(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source[ReactiveContainerLike_sinkInto](sink);
    return sink;
  };

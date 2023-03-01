import { Function1 } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";

const Sink_sourceFrom =
  <C extends ObservableLike, TSink extends ObserverLike<T>, T>(
    source: C,
  ): Function1<TSink, TSink> =>
  sink => {
    source[ObservableLike_observe](sink);
    return sink;
  };

export default Sink_sourceFrom;

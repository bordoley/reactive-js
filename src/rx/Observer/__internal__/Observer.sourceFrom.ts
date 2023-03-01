import { Function1 } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";

const Observer_sourceFrom =
  <C extends ObservableLike, TObserver extends ObserverLike<T>, T>(
    source: C,
  ): Function1<TObserver, TObserver> =>
  sink => {
    source[ObservableLike_observe](sink);
    return sink;
  };

export default Observer_sourceFrom;

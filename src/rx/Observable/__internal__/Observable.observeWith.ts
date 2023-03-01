import { Function1 } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";

const Observable_observeWith =
  <C extends ObservableLike, T>(observer: ObserverLike<T>): Function1<C, C> =>
  source => {
    source[ObservableLike_observe](observer);
    return source;
  };

export default Observable_observeWith;

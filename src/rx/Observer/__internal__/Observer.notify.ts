import { Function1 } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";

const Observer_notify =
  <TObserver extends ObserverLike<T>, T>(
    v: T,
  ): Function1<TObserver, TObserver> =>
  (observer: TObserver) => {
    observer[ObserverLike_notify](v);
    return observer;
  };

export default Observer_notify;

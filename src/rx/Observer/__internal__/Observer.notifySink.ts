import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";

const Observer_notifyObserver =
  <T>(observer: ObserverLike<T>): SideEffect1<T> =>
  (next: T) =>
    observer[ObserverLike_notify](next);

export default Observer_notifyObserver;

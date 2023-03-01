import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";

const Observer_notifyObserver =
  <T>(sink: ObserverLike<T>): SideEffect1<T> =>
  (next: T) =>
    sink[ObserverLike_notify](next);

export default Observer_notifyObserver;

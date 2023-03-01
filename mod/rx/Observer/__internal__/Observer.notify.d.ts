import { Function1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
declare const Observer_notify: <TObserver extends ObserverLike<T>, T>(v: T) => Function1<TObserver, TObserver>;
export default Observer_notify;

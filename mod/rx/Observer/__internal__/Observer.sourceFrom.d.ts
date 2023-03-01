import { Function1 } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
declare const Observer_sourceFrom: <C extends ObservableLike<unknown>, TObserver extends ObserverLike<T>, T>(source: C) => Function1<TObserver, TObserver>;
export default Observer_sourceFrom;

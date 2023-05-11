import { Function2 } from "../../functions.js";
import { ObservableLike, ObserverLike } from "../../types.js";
declare const Observer_createWithLatestObserver: <TA, TB, T>(delegate: ObserverLike<T>, other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ObserverLike<TA>;
export default Observer_createWithLatestObserver;

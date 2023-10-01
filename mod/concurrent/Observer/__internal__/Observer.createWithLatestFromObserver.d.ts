import { ObservableLike, ObserverLike } from "../../../concurrent.js";
import { Function2 } from "../../../functions.js";
declare const Observer_createWithLatestFromObserver: <TA, TB, T>(delegate: ObserverLike<T>, other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ObserverLike<TA>;
export default Observer_createWithLatestFromObserver;

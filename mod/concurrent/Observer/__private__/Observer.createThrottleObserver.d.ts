import { ObservableLike, ObserverLike } from "../../../concurrent.js";
import { Function1 } from "../../../functions.js";
declare const Observer_createThrottleObserver: <T>(delegate: ObserverLike<T>, durationFunction: Function1<T, ObservableLike>, mode: "first" | "last" | "interval") => ObserverLike<T>;
export default Observer_createThrottleObserver;

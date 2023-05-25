import { Function1 } from "../../functions.js";
import { DeferredObservableBaseLike, ObserverLike } from "../../types.js";
declare const Observer_createThrottleObserver: <T>(delegate: ObserverLike<T>, durationFunction: Function1<T, DeferredObservableBaseLike>, mode: "first" | "last" | "interval") => ObserverLike<T>;
export default Observer_createThrottleObserver;

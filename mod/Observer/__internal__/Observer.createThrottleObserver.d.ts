import { Function1 } from "../../functions.js";
import { DeferredObservableLike, ObserverLike } from "../../types.js";
declare const Observer_createThrottleObserver: <T>(delegate: ObserverLike<T>, durationFunction: Function1<T, DeferredObservableLike>, mode: "first" | "last" | "interval") => ObserverLike<T>;
export default Observer_createThrottleObserver;

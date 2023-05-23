import { DeferredObservableLike, ObserverLike } from "../../types.js";
declare const Observer_createSwitchAllObserver: <T>(o: ObserverLike<T>) => ObserverLike<DeferredObservableLike<T>>;
export default Observer_createSwitchAllObserver;

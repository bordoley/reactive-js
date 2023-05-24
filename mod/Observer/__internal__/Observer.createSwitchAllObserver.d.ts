import { DeferredObservableBaseLike, ObserverLike } from "../../types.js";
declare const Observer_createSwitchAllObserver: <T>(o: ObserverLike<T>) => ObserverLike<DeferredObservableBaseLike<T>>;
export default Observer_createSwitchAllObserver;

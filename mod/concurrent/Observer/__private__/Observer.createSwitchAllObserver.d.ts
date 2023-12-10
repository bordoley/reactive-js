import { ObservableLike, ObserverLike } from "../../../concurrent.js";
declare const Observer_createSwitchAllObserver: <T>(o: ObserverLike<T>) => ObserverLike<ObservableLike<T>>;
export default Observer_createSwitchAllObserver;

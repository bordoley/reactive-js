import { ObserverLike } from "../../../concurrent.js";
import { Predicate } from "../../../functions.js";
declare const Observer_createKeepObserver: <T>(delegate: ObserverLike<T>, predicate: Predicate<T>) => ObserverLike<T>;
export default Observer_createKeepObserver;

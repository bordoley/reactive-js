import { ObserverLike } from "../../../concurrent.js";
import { Predicate } from "../../../functions.js";
declare const Observer_createTakeWhileObserver: <T>(delegate: ObserverLike<T>, predicate: Predicate<T>, inclusive: boolean) => ObserverLike<T>;
export default Observer_createTakeWhileObserver;

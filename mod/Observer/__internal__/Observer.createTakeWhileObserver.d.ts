import { Predicate } from "../../functions.js";
import { ObserverLike } from "../../types.js";
declare const Observer_createTakeWhileObserver: <T>(delegate: ObserverLike<T>, predicate: Predicate<T>, inclusive: boolean) => ObserverLike<T>;
export default Observer_createTakeWhileObserver;

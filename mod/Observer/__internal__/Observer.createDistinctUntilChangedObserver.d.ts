import { Equality } from "../../functions.js";
import { ObserverLike } from "../../types.js";
declare const Observer_createDistinctUntilChangedObserver: <T>(delegate: ObserverLike<T>, equality: Equality<T>) => ObserverLike<T>;
export default Observer_createDistinctUntilChangedObserver;

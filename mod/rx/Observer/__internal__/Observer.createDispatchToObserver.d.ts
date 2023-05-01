import { ObserverLike } from "../../../rx.js";
import { DispatcherLike } from "../../../util.js";
declare const Observer_createDispatchToObserver: <T>(observer: ObserverLike<T>, dispatcher: DispatcherLike<T>) => ObserverLike<T>;
export default Observer_createDispatchToObserver;

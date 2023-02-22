import { ObserverLike } from "../../../rx.js";
import { DispatcherLike } from "../../../scheduling.js";
declare const Observer_getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
export default Observer_getDispatcher;

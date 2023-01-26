import { ObserverLike } from "../../../rx.js";
import { DispatcherLike } from "../../../scheduling.js";
declare const Observer$getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
export { Observer$getDispatcher as default };

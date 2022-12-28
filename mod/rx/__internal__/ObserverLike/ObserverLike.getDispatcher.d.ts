import { ObserverLike } from "../../../rx.mjs";
import { DispatcherLike } from "../../../scheduling.mjs";
declare const getDispatcher: <T>(observer: ObserverLike<T>) => DispatcherLike<T>;
export { getDispatcher as default };

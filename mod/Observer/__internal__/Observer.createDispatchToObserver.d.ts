import { DispatcherLike, ObserverLike } from "../../types.js";
declare const Observer_createDispatchToObserver: <T>(observer: ObserverLike<T>, dispatcher: DispatcherLike<T>) => ObserverLike<T>;
export default Observer_createDispatchToObserver;

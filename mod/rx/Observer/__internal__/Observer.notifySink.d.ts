import { SideEffect1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
declare const Observer_notifyObserver: <T>(observer: ObserverLike<T>) => SideEffect1<T>;
export default Observer_notifyObserver;

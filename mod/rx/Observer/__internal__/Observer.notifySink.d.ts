import { SideEffect1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
declare const Observer_notifyObserver: <T>(sink: ObserverLike<T>) => SideEffect1<T>;
export default Observer_notifyObserver;

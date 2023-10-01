import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observer_createForEachObserver: <T>(delegate: ObserverLike<T>, effect: SideEffect1<T>) => ObserverLike<T>;
export default Observer_createForEachObserver;

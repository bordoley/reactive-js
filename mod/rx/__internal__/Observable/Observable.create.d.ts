import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, ObservableLike } from "../../../rx.js";
declare const Observable$create: <T>(f: SideEffect1<ObserverLike>, isEnumerable?: boolean, isRunnable?: boolean) => ObservableLike<T>;
export { Observable$create as default };

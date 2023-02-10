import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, ObservableLike } from "../../../rx.js";
declare const Observable_create: <T>(f: SideEffect1<ObserverLike>, isEnumerable?: boolean, isRunnable?: boolean) => ObservableLike<T>;
export { Observable_create as default };

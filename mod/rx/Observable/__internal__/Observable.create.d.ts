import { SideEffect1 } from "../../../functions.js";
import { ObservableLike, ObserverLike } from "../../../rx.js";
declare const Observable_create: <T>(f: SideEffect1<ObserverLike>, isEnumerable?: boolean, isRunnable?: boolean) => ObservableLike<T>;
export default Observable_create;

import { SideEffect1 } from "../../../functions.mjs";
import { ObserverLike, ObservableLike } from "../../../rx.mjs";
declare const create: <T>(f: SideEffect1<ObserverLike>, isEnumerable?: boolean, isRunnable?: boolean) => ObservableLike<T>;
export { create as default };

import { ObserverLike, SharedObservableLike } from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
declare const SharedObservable_create: <T>(f: SideEffect1<ObserverLike<T>>) => SharedObservableLike<T>;
export default SharedObservable_create;

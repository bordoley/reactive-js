import { SideEffect1 } from "../../functions.js";
import { ObserverLike, SharedObservableLike } from "../../types.js";
declare const SharedObservable_create: <T>(f: SideEffect1<ObserverLike<T>>) => SharedObservableLike<T>;
export default SharedObservable_create;

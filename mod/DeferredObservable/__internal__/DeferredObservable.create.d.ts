import { SideEffect1 } from "../../functions.js";
import { DeferredObservableLike, ObserverLike } from "../../types.js";
declare const DeferredObservable_create: <T>(f: SideEffect1<ObserverLike<T>>) => DeferredObservableLike<T>;
export default DeferredObservable_create;

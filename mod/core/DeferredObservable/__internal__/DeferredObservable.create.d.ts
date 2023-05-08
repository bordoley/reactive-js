import { DeferredObservableLike, ObserverLike } from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
declare const DeferredObservable_create: <T>(f: SideEffect1<ObserverLike<T>>) => DeferredObservableLike<T>;
export default DeferredObservable_create;

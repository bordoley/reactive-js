import { SideEffect1 } from "../../../functions.js";
import { EnumerableObservableLike, ObserverLike } from "../../../rx.js";
declare const EnumerableObservable_create: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableObservableLike<T>;
export default EnumerableObservable_create;

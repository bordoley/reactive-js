import { SideEffect1 } from "../../../functions.js";
import { ObserverLike, EnumerableObservableLike } from "../../../rx.js";
declare const EnumerableObservable$create: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableObservableLike<T>;
export { EnumerableObservable$create as default };

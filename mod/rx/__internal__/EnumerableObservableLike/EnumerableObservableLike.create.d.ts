import { SideEffect1 } from "../../../functions.mjs";
import { ObserverLike, EnumerableObservableLike } from "../../../rx.mjs";
declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableObservableLike<T>;
export { create as default };

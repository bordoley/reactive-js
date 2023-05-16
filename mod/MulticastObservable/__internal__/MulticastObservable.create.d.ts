import { SideEffect1 } from "../../functions.js";
import { MulticastObservableLike, ObserverLike } from "../../types.js";
declare const MulticastObservable_create: <T>(f: SideEffect1<ObserverLike<T>>) => MulticastObservableLike<T>;
export default MulticastObservable_create;

import { EnumerableLike, ObserverLike } from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
declare const Enumerable_create: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableLike<T>;
export default Enumerable_create;

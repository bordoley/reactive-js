import { SideEffect1 } from "../../functions.js";
import { EnumerableLike, ObserverLike } from "../../types.js";
declare const Enumerable_create: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableLike<T>;
export default Enumerable_create;

import { SideEffect1 } from "../../functions.js";
import { ObservableLike, ObserverLike } from "../../types.js";
declare const Observable_create: <T>(f: SideEffect1<ObserverLike>) => ObservableLike<T>;
export default Observable_create;

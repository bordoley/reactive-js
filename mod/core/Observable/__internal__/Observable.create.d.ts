import { ObservableLike, ObserverLike } from "../../../core.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observable_create: <T>(f: SideEffect1<ObserverLike>) => ObservableLike<T>;
export default Observable_create;

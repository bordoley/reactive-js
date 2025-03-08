import { SideEffect1 } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
declare const Observable_createPureSynchronousObservable: <T>(f: SideEffect1<ObserverLike<T>>) => import("../../../computations.js").PureSynchronousObservableLike<T>;
export default Observable_createPureSynchronousObservable;

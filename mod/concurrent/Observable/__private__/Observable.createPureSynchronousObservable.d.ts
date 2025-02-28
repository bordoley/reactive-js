import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observable_createPureSynchronousObservable: <T>(f: SideEffect1<ObserverLike<T>>) => import("../../../concurrent.js").PureSynchronousObservableLike<T>;
export default Observable_createPureSynchronousObservable;

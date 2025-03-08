import { SideEffect1 } from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
declare const Observable_createPureDeferredObservable: <T>(f: SideEffect1<ObserverLike<T>>) => import("../../../computations.js").PureDeferredObservableLike<T>;
export default Observable_createPureDeferredObservable;

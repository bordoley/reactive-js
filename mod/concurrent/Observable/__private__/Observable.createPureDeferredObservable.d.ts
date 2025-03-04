import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observable_createPureDeferredObservable: <T>(f: SideEffect1<ObserverLike<T>>) => import("../../../concurrent.js").PureDeferredObservableLike<T>;
export default Observable_createPureDeferredObservable;

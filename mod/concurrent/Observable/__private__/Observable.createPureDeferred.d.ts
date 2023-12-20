import { ObserverLike, PureDeferredObservableLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observable_createPureDeferred: <T>(f: SideEffect1<ObserverLike<T>>) => PureDeferredObservableLike<T>;
export default Observable_createPureDeferred;

import { ObserverLike } from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observable_createMulticast: <T>(f: SideEffect1<ObserverLike<T>>) => import("../../../computations.js").MulticastObservableLike<T>;
export default Observable_createMulticast;

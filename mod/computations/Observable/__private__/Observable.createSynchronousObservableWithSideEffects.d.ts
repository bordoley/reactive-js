import { ObserverLike } from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observable_createSynchronousObservableWithSideEffects: <T>(f: SideEffect1<ObserverLike<T>>) => import("../../../computations.js").SynchronousObservableWithSideEffectsLike<T>;
export default Observable_createSynchronousObservableWithSideEffects;

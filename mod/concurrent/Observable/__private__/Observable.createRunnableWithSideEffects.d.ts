import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observable_createRunnableWithSideEffects: <T>(f: SideEffect1<ObserverLike<T>>) => import("../../../concurrent.js").RunnableWithSideEffectsLike<T>;
export default Observable_createRunnableWithSideEffects;

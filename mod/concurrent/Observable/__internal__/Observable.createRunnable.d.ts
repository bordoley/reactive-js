import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observable_createRunnable: <T>(f: SideEffect1<ObserverLike<T>>) => import("../../../concurrent.js").RunnableLike<T>;
export default Observable_createRunnable;

import { ObserverLike } from "../../../concurrent.js";
import { SideEffect1 } from "../../../functions.js";
declare const Observable_createPureRunnable: <T>(f: SideEffect1<ObserverLike<T>>) => import("../../../concurrent.js").PureRunnableLike<T>;
export default Observable_createPureRunnable;

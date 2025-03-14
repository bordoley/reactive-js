import { RunnableLike } from "../../../computations.js";
declare const Observable_fromRunnable: <T>() => (runnable: RunnableLike<T>) => import("../../../computations.js").PureSynchronousObservableLike<T> | import("../../../computations.js").SynchronousObservableWithSideEffectsLike<T>;
export default Observable_fromRunnable;

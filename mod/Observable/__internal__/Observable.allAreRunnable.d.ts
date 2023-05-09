import { ObservableLike, RunnableLike } from "../../types.js";
declare const Observable_allAreRunnable: (srcs: ReadonlyArray<ObservableLike>) => srcs is readonly RunnableLike<unknown>[];
export default Observable_allAreRunnable;

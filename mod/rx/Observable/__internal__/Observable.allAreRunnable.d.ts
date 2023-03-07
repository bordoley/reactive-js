import { ReadonlyArrayLike } from "../../../containers.js";
import { ObservableLike, RunnableLike } from "../../../rx.js";
declare const Observable_allAreRunnable: (srcs: ReadonlyArrayLike<ObservableLike>) => srcs is ReadonlyArrayLike<RunnableLike<unknown>>;
export default Observable_allAreRunnable;

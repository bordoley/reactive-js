import { ReadonlyArrayContainerLike } from "../../../containers.js";
import { ObservableLike, RunnableLike } from "../../../rx.js";
declare const Observable_allAreRunnable: (srcs: ReadonlyArrayContainerLike<ObservableLike>) => srcs is ReadonlyArrayContainerLike<RunnableLike<unknown>>;
export default Observable_allAreRunnable;

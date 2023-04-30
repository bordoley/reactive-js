import { ReadonlyArrayContainerLike } from "../../../containers.js";
import { EnumerableLike, ObservableLike } from "../../../rx.js";
declare const Observable_allAreEnumerable: (srcs: ReadonlyArrayContainerLike<ObservableLike>) => srcs is ReadonlyArrayContainerLike<EnumerableLike<unknown>>;
export default Observable_allAreEnumerable;

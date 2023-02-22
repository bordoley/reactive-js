import { ReadonlyArrayLike } from "../../../containers.js";
import { EnumerableObservableLike, ObservableLike } from "../../../rx.js";
declare const Observable_allAreEnumerable: (srcs: ReadonlyArrayLike<ObservableLike>) => srcs is ReadonlyArrayLike<EnumerableObservableLike<unknown>>;
export default Observable_allAreEnumerable;

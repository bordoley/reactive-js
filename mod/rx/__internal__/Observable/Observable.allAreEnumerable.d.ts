import { ReadonlyArrayLike } from "../../../containers.js";
import { ObservableLike, EnumerableObservableLike } from "../../../rx.js";
declare const Observable_allAreEnumerable: (srcs: ReadonlyArrayLike<ObservableLike>) => srcs is ReadonlyArrayLike<EnumerableObservableLike<unknown>>;
export { Observable_allAreEnumerable as default };

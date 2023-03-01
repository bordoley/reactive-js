import { ReadonlyArrayLike } from "../../../containers.js";
import { EnumerableLike } from "../../../ix.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_allAreEnumerable: (srcs: ReadonlyArrayLike<ObservableLike>) => srcs is ReadonlyArrayLike<EnumerableLike<unknown>>;
export default Observable_allAreEnumerable;

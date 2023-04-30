import { EnumerableLike, ObservableLike } from "../../../rx.js";
declare const Observable_allAreEnumerable: (srcs: ReadonlyArray<ObservableLike>) => srcs is readonly EnumerableLike<unknown>[];
export default Observable_allAreEnumerable;

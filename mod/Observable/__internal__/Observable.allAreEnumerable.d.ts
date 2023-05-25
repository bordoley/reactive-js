import { EnumerableLike, ObservableBaseLike } from "../../types.js";
declare const Observable_allAreEnumerable: <T = unknown>(observables: readonly ObservableBaseLike<T>[]) => observables is ReadonlyArray<EnumerableLike<T>>;
export default Observable_allAreEnumerable;

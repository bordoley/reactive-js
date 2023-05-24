import { EnumerableLike, ObservableLike } from "../../types.js";
declare const Observable_allArePure: <T = unknown>(observables: readonly ObservableLike<T>[]) => observables is ReadonlyArray<EnumerableLike<T>>;
export default Observable_allArePure;

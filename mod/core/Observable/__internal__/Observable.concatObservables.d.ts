import { EnumerableLike, ObservableLike, RunnableLike } from "../../../core.js";
interface ObservableConcatObservables {
    concatObservables<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatObservables<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    concatObservables<T>(observables: readonly ObservableLike<T>[]): ObservableLike<T>;
}
declare const Observable_concatObservables: ObservableConcatObservables["concatObservables"];
export default Observable_concatObservables;

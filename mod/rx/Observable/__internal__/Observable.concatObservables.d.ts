import { EnumerableLike, ObservableLike, RunnableLike } from "../../../rx.js";
interface ObservableConcatObservables {
    <T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    <T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    <T>(observables: readonly ObservableLike<T>[]): ObservableLike<T>;
}
declare const Observable_concatObservables: ObservableConcatObservables;
export default Observable_concatObservables;

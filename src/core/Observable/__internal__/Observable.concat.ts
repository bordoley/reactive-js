import { EnumerableLike, ObservableLike, RunnableLike } from "../../../core.js";
import Observable_concatObservables from "./Observable.concatObservables.js";

interface ObservableConcat {
  concat<T>(
    fst: EnumerableLike<T>,
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): EnumerableLike<T>;
  concat<T>(
    fst: RunnableLike<T>,
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableLike<T>;
  concat<T>(
    fst: ObservableLike<T>,
    snd: ObservableLike<T>,
    ...tail: readonly ObservableLike<T>[]
  ): ObservableLike<T>;
}
const Observable_concat: ObservableConcat["concat"] = (<T>(
  ...observables: ObservableLike<T>[]
) =>
  Observable_concatObservables<T>(observables)) as ObservableConcat["concat"];

export default Observable_concat;

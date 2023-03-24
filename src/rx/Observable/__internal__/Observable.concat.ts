import { EnumerableLike, ObservableLike, RunnableLike } from "../../../rx.js";
import Observable_concatObservables from "./Observable.concatObservables.js";

interface ObservableConcat {
  <T>(
    fst: EnumerableLike<T>,
    snd: EnumerableLike<T>,
    ...tail: readonly EnumerableLike<T>[]
  ): EnumerableLike<T>;
  <T>(
    fst: RunnableLike<T>,
    snd: RunnableLike<T>,
    ...tail: readonly RunnableLike<T>[]
  ): RunnableLike<T>;
  <T>(
    fst: ObservableLike<T>,
    snd: ObservableLike<T>,
    ...tail: readonly ObservableLike<T>[]
  ): ObservableLike<T>;
}
const Observable_concat: ObservableConcat = (<T>(
  ...observables: ObservableLike<T>[]
) => Observable_concatObservables<T>(observables)) as ObservableConcat;

export default Observable_concat;

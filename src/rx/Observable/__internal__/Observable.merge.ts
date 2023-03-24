import { EnumerableLike, ObservableLike, RunnableLike } from "../../../rx.js";
import Observable_mergeObservables from "./Observable.mergeObservables.js";

interface ObservableMerge {
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
const Observable_merge: ObservableMerge = (<T>(
  ...observables: ObservableLike<T>[]
) => Observable_mergeObservables<T>(observables)) as ObservableMerge;

export default Observable_merge;

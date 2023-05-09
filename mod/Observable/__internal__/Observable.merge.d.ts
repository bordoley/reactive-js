import { EnumerableLike, ObservableLike, RunnableLike } from "../../types.js";
interface ObservableMerge {
    merge<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    merge<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    merge<T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): ObservableLike<T>;
}
declare const Observable_merge: ObservableMerge["merge"];
export default Observable_merge;

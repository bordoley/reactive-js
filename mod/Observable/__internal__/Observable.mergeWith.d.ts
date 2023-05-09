import { Containers, ObservableContainer } from "../../types.js";
type ObservableMergeWith = <C extends ObservableContainer, T>(snd: Containers.Of<C, T>, ...tail: readonly Containers.Of<C, T>[]) => Containers.Operator<C, T, T>;
declare const Observable_mergeWith: ObservableMergeWith;
export default Observable_mergeWith;

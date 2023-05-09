import { Containers, ObservableContainer } from "../../containers.js";
type ObservableMergeWith = <C extends ObservableContainer.Type, T>(snd: Containers.Of<C, T>, ...tail: readonly Containers.Of<C, T>[]) => Containers.Operator<C, T, T>;
declare const Observable_mergeWith: ObservableMergeWith;
export default Observable_mergeWith;

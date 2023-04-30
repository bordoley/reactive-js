import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { ObservableContainer } from "../../../rx.js";
type ObservableMergeWith = <C extends ObservableContainer, T>(snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
declare const Observable_mergeWith: ObservableMergeWith;
export default Observable_mergeWith;

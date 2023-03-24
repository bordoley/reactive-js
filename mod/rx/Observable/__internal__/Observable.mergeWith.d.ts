import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
type ObservableMergeWith = <C extends ObservableLike, T>(snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
declare const Observable_mergeWith: ObservableMergeWith;
export default Observable_mergeWith;

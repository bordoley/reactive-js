import { Container, ObservableContainer } from "../../containers.js";
type ObservableMergeWith = <C extends ObservableContainer.Type, T>(snd: Container.Of<C, T>, ...tail: readonly Container.Of<C, T>[]) => Container.Operator<C, T, T>;
declare const Observable_mergeWith: ObservableMergeWith;
export default Observable_mergeWith;

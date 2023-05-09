import Container_concatWith from "../../Container/__internal__/Container.concatWith.js";
import { Container, ObservableContainer } from "../../containers.js";
import Observable_merge from "./Observable.merge.js";

type ObservableMergeWith = <C extends ObservableContainer.Type, T>(
  snd: Container.Of<C, T>,
  ...tail: readonly Container.Of<C, T>[]
) => Container.Operator<C, T, T>;
const Observable_mergeWith: ObservableMergeWith =
  /*@__PURE__*/ Container_concatWith<ObservableContainer.Type>(
    Observable_merge,
  ) as ObservableMergeWith;

export default Observable_mergeWith;

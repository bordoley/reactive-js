import { Container, ObservableContainer } from "../../../core.js";
import Container_concatWith from "../../../core/Container/__internal__/Container.concatWith.js";
import Observable_merge from "./Observable.merge.js";

type ObservableMergeWith = <C extends ObservableContainer, T>(
  snd: Container.Of<C, T>,
  ...tail: readonly Container.Of<C, T>[]
) => Container.Operator<C, T, T>;
const Observable_mergeWith: ObservableMergeWith =
  /*@__PURE__*/ Container_concatWith<ObservableContainer>(
    Observable_merge,
  ) as ObservableMergeWith;

export default Observable_mergeWith;

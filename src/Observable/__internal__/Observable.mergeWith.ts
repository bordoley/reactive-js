import Container_concatWith from "../../Container/__internal__/Container.concatWith.js";
import { Containers, ObservableContainer } from "../../types.js";
import Observable_merge from "./Observable.merge.js";

type ObservableMergeWith = <C extends ObservableContainer, T>(
  snd: Containers.Of<C, T>,
  ...tail: readonly Containers.Of<C, T>[]
) => Containers.Operator<C, T, T>;
const Observable_mergeWith: ObservableMergeWith =
  /*@__PURE__*/ Container_concatWith<ObservableContainer>(
    Observable_merge,
  ) as ObservableMergeWith;

export default Observable_mergeWith;

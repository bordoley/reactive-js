import { ContainerOf, ContainerOperator } from "../../../containers.js";
import Container_concatWith from "../../../containers/Container/__internal__/Container.concatWith.js";
import { ObservableLike } from "../../../rx.js";
import Observable_merge from "./Observable.merge.js";

type ObservableMergeWith = <C extends ObservableLike, T>(
  snd: ContainerOf<C, T>,
  ...tail: readonly ContainerOf<C, T>[]
) => ContainerOperator<C, T, T>;
const Observable_mergeWith: ObservableMergeWith =
  /*@__PURE__*/ Container_concatWith<ObservableLike>(
    Observable_merge,
  ) as ObservableMergeWith;

export default Observable_mergeWith;

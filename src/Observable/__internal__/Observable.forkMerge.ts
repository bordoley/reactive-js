import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
import {
  Containers,
  ObservableContainer,
  ObservableContainers,
  ObservableLike,
} from "../../types.js";
import Observable_mergeObservables from "./Observable.mergeObservables.js";

const Observable_forkMerge: ObservableContainers.TypeClass<ObservableContainer>["forkMerge"] =

    <TIn, TOut>(
      ...ops: readonly Containers.Operator<ObservableContainer, TIn, TOut>[]
    ) =>
    (obs: ObservableLike<TIn>) =>
      pipe(
        ops,
        ReadonlyArray_map(op => op(obs)),
        Observable_mergeObservables,
      );

export default Observable_forkMerge;

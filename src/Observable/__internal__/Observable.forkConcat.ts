import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipe } from "../../functions.js";
import {
  Containers,
  DeferredContainers,
  ObservableContainer,
  ObservableLike,
} from "../../types.js";
import Observable_concatObservables from "./Observable.concatObservables.js";

const Observable_forkConcat: DeferredContainers.TypeClass<ObservableContainer>["forkConcat"] =

    <TIn, TOut>(
      ...ops: readonly Containers.Operator<ObservableContainer, TIn, TOut>[]
    ) =>
    (obs: ObservableLike<TIn>) =>
      pipe(
        ops,
        ReadonlyArray_map(op => op(obs)),
        Observable_concatObservables,
      );

export default Observable_forkConcat;

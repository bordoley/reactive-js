import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { pipe } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_mergeObservables from "./Observable.mergeObservables.js";

const Observable_forkMerge: ObservableContainer.TypeClass["forkMerge"] =
  <TIn, TOut>(
    ...ops: readonly Containers.Operator<ObservableContainer.Type, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      ReadonlyArray_map(op => op(obs)),
      Observable_mergeObservables,
    );

export default Observable_forkMerge;

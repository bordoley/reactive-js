import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { Containers, ObservableContainer } from "../../containers.js";
import { pipe } from "../../functions.js";
import { ObservableLike } from "../../types.js";
import Observable_zipObservables from "./Observable.zipObservables.js";

const Observable_forkZip: ObservableContainer.TypeClass["forkZip"] =
  <TIn, TOut>(
    ...ops: readonly Containers.Operator<ObservableContainer.Type, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      ReadonlyArray_map(op => op(obs)),
      Observable_zipObservables,
    );

export default Observable_forkZip;

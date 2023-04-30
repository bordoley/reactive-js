import { ContainerOperator, ForkZip } from "../../../containers.js";
import { pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { ObservableContainer, ObservableLike } from "../../../rx.js";
import Observable_zipObservables from "./Observable.zipObservables.js";

const Observable_forkZip: ForkZip<ObservableContainer>["forkZip"] =
  <TIn, TOut>(
    ...ops: readonly ContainerOperator<ObservableContainer, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      ReadonlyArray_map(op => op(obs)),
      Observable_zipObservables,
    );

export default Observable_forkZip;
